const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/user-upload-2.png');
// parse PNG chunks
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
const height = 147;
console.log(`Decompressed IDAT size: ${uncompressed.length}, expected: ${height * (1 + width * 4)}`);

// Sample colors across the width at middle height (y = 73)
const y = 73;
const stride = 1 + width * 4;
const row = uncompressed.slice(y * stride + 1, (y + 1) * stride);

// Let's find vertical lines (pixels that are distinct color at specific x positions)
// Let's inspect x at 0, 100, 200, 300, 330, 341, 500, 680, 700, 1000
for (let x = 0; x < width; x += 10) {
  const r = row[x * 4];
  const g = row[x * 4 + 1];
  const b = row[x * 4 + 2];
  if (x % 50 === 0) {
    console.log(`x=${x}: rgb(${r},${g},${b})`);
  }
}
