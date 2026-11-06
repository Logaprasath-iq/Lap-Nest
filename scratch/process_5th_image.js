const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/logo/logo-5th.png');
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);

// Extract IDAT chunks
const chunks = [];
let offset = 8;
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    chunks.push(buf.slice(offset + 8, offset + 8 + len));
  }
  offset += 12 + len;
}

const compressed = Buffer.concat(chunks);
const raw = zlib.inflateSync(compressed);

const bpp = 4;
const lineLen = 1 + width * bpp;

const uncompressed = Buffer.alloc(height * width * bpp);
let prevLine = Buffer.alloc(width * bpp);

for (let y = 0; y < height; y++) {
  const filterType = raw[y * lineLen];
  const srcLine = raw.slice(y * lineLen + 1, (y + 1) * lineLen);
  const dstLine = Buffer.alloc(width * bpp);

  for (let x = 0; x < width * bpp; x++) {
    const a = x >= bpp ? dstLine[x - bpp] : 0;
    const b = prevLine[x];
    const c = x >= bpp ? prevLine[x - bpp] : 0;

    let val = srcLine[x];
    if (filterType === 0) {}
    else if (filterType === 1) { val = (val + a) & 0xff; }
    else if (filterType === 2) { val = (val + b) & 0xff; }
    else if (filterType === 3) { val = (val + Math.floor((a + b) / 2)) & 0xff; }
    else if (filterType === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      else pr = c;
      val = (val + pr) & 0xff;
    }
    dstLine[x] = val;
  }

  dstLine.copy(uncompressed, y * width * bpp);
  prevLine = dstLine;
}

console.log('Unfiltered 5th image successfully!');

// Make white background transparent
for (let i = 0; i < uncompressed.length; i += 4) {
  const r = uncompressed[i];
  const g = uncompressed[i + 1];
  const b = uncompressed[i + 2];

  const brightness = (r + g + b) / 3;
  const diff = Math.max(Math.abs(r - 255), Math.abs(g - 255), Math.abs(b - 255));

  if (brightness > 248 && diff < 8) {
    uncompressed[i + 3] = 0;
  } else if (brightness > 230 && diff < 25) {
    const t = (brightness - 230) / (248 - 230);
    uncompressed[i + 3] = Math.round(255 * (1 - t));
  }
}

// Re-encode into PNG with filter 0 (None)
const filtered = Buffer.alloc(height * (1 + width * bpp));
for (let y = 0; y < height; y++) {
  filtered[y * (1 + width * bpp)] = 0; // Filter 0
  uncompressed.copy(filtered, y * (1 + width * bpp) + 1, y * width * bpp, (y + 1) * width * bpp);
}

const newIdatData = zlib.deflateSync(filtered, { level: 9 });

// CRC32 table
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[i] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4);
  data.copy(chunk, 8);
  const typeAndData = chunk.slice(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

// Build IHDR data
const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(width, 0);
ihdrData.writeUInt32BE(height, 4);
ihdrData[8] = 8;
ihdrData[9] = 6;
ihdrData[10] = 0;
ihdrData[11] = 0;
ihdrData[12] = 0;

const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ihdrChunk = makeChunk('IHDR', ihdrData);
const idatChunk = makeChunk('IDAT', newIdatData);
const iendChunk = makeChunk('IEND', Buffer.alloc(0));

const finalPng = Buffer.concat([pngHeader, ihdrChunk, idatChunk, iendChunk]);
fs.writeFileSync('assets/images/logo/logo-5th-trans.png', finalPng);
console.log('Saved transparent 5th image: assets/images/logo/logo-5th-trans.png, size:', finalPng.length);
