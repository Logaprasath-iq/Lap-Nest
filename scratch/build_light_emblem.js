const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/logo/logo-orbital-crop.png');
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

const width = 618;
const height = 417;
const stride = 1 + width * 4;

const outUncompressed = Buffer.alloc(uncompressed.length);

// Make the laptop emblem deep rich black/charcoal (#0e181f) for light mode
// Preserving antialiased alpha and intensity
for (let y = 0; y < height; y++) {
  outUncompressed[y * stride] = 0; // Filter 0 (None)
  for (let x = 0; x < width; x++) {
    const srcIdx = y * stride + 1 + x * 4;
    const r = uncompressed[srcIdx];
    const g = uncompressed[srcIdx + 1];
    const b = uncompressed[srcIdx + 2];
    const a = uncompressed[srcIdx + 3];

    // Compute luminance of the original white/grey pixel
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Output color: #0e181f (r=14, g=24, b=31) scaled by luminance
    outUncompressed[srcIdx] = Math.round(14 * (1 - lum * 0.1));
    outUncompressed[srcIdx + 1] = Math.round(24 * (1 - lum * 0.1));
    outUncompressed[srcIdx + 2] = Math.round(31 * (1 - lum * 0.1));
    // Effective alpha combines original alpha and luminance
    outUncompressed[srcIdx + 3] = Math.round(a * lum);
  }
}

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

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const lightEmblemPng = Buffer.concat([
  pngSignature,
  makeChunk('IHDR', ihdr),
  makeChunk('IDAT', zlib.deflateSync(outUncompressed)),
  makeChunk('IEND', Buffer.alloc(0))
]);

fs.writeFileSync('assets/images/logo/logo-orbital-crop-light.png', lightEmblemPng);
console.log('Successfully saved logo-orbital-crop-light.png (' + lightEmblemPng.length + ' bytes)');
