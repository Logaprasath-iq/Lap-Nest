const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/logo/logo-orbital-crop-light.png');
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

let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
let minA = 255, maxA = 0;
let visibleCount = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = y * stride + 1 + x * 4;
    const r = uncompressed[idx];
    const g = uncompressed[idx + 1];
    const b = uncompressed[idx + 2];
    const a = uncompressed[idx + 3];

    if (a > 20) {
      visibleCount++;
      if (r < minR) minR = r;
      if (r > maxR) maxR = r;
      if (g < minG) minG = g;
      if (g > maxG) maxG = g;
      if (b < minB) minB = b;
      if (b > maxB) maxB = b;
      if (a < minA) minA = a;
      if (a > maxA) maxA = a;
    }
  }
}

console.log(`Visible pixels: ${visibleCount}`);
console.log(`R: ${minR}-${maxR}, G: ${minG}-${maxG}, B: ${minB}-${maxB}, A: ${minA}-${maxA}`);
