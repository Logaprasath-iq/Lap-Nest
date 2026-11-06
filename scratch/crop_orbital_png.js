const fs = require('fs');
const zlib = require('zlib');

// Load raw unfiltered image from scratch/inspect_user_upload_3.js logic
const buf = fs.readFileSync('assets/images/user-upload-3.png');
let pos = 8;
const chunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  const data = buf.slice(pos + 8, pos + 8 + len);
  chunks.push({ type, len, data });
  pos += 12 + len;
}

const idat = Buffer.concat(chunks.filter(c => c.type === 'IDAT').map(c => c.data));
const uncompressed = zlib.inflateSync(idat);

const width = 1024;
const height = 682;
const bpp = 4;
const stride = 1 + width * bpp;

const raw = Buffer.alloc(width * height * 4);
let prevRow = Buffer.alloc(width * 4);

for (let y = 0; y < height; y++) {
  const filterType = uncompressed[y * stride];
  const curRow = uncompressed.slice(y * stride + 1, (y + 1) * stride);
  const outRow = Buffer.alloc(width * 4);

  for (let i = 0; i < width * 4; i++) {
    const a = i >= 4 ? outRow[i - 4] : 0;
    const b = prevRow[i];
    const c = i >= 4 ? prevRow[i - 4] : 0;
    const x = curRow[i];

    if (filterType === 0) outRow[i] = x;
    else if (filterType === 1) outRow[i] = (x + a) & 0xff;
    else if (filterType === 2) outRow[i] = (x + b) & 0xff;
    else if (filterType === 3) outRow[i] = (x + Math.floor((a + b) / 2)) & 0xff;
    else if (filterType === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      else pr = c;
      outRow[i] = (x + pr) & 0xff;
    }
  }

  outRow.copy(raw, y * width * 4);
  prevRow = outRow;
}

// Bounding box with 10px margin
const minX = Math.max(0, 210 - 8);
const minY = Math.max(0, 142 - 8);
const maxX = Math.min(width - 1, 811 + 8);
const maxY = Math.min(height - 1, 542 + 8);

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;

console.log(`Cropping to ${cropW}x${cropH}...`);

// Build cropped PNG
const cropStride = 1 + cropW * 4;
const cropUncompressed = Buffer.alloc(cropH * cropStride);

for (let y = 0; y < cropH; y++) {
  cropUncompressed[y * cropStride] = 0; // Filter 0 (None)
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((minY + y) * width + (minX + x)) * 4;
    const dstIdx = y * cropStride + 1 + x * 4;
    cropUncompressed[dstIdx] = raw[srcIdx];
    cropUncompressed[dstIdx + 1] = raw[srcIdx + 1];
    cropUncompressed[dstIdx + 2] = raw[srcIdx + 2];
    cropUncompressed[dstIdx + 3] = raw[srcIdx + 3];
  }
}

// Compress IDAT
const cropIdat = zlib.deflateSync(cropUncompressed);

// Helper for CRC32
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.slice(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

// IHDR
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(cropW, 0);
ihdr.writeUInt32BE(cropH, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 6; // color type RGBA
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // interlace

const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const croppedPng = Buffer.concat([
  pngSignature,
  makeChunk('IHDR', ihdr),
  makeChunk('IDAT', cropIdat),
  makeChunk('IEND', Buffer.alloc(0))
]);

fs.writeFileSync('assets/images/logo/logo-orbital-crop.png', croppedPng);
fs.writeFileSync('assets/images/logo/laptop-orbit-clean.png', croppedPng);
fs.writeFileSync('favicon.png', croppedPng);
console.log(`Saved cropped PNG: ${cropW}x${cropH}, size: ${croppedPng.length} bytes`);
