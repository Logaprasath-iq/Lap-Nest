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

console.log(`Dimensions: ${width} x ${height}`);

// Sample colors in the image: find white laptop lines vs orange orbital rings
let whiteCount = 0;
let orangeCount = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = y * stride + 1 + x * 4;
    const r = uncompressed[idx];
    const g = uncompressed[idx + 1];
    const b = uncompressed[idx + 2];
    const a = uncompressed[idx + 3];

    if (a > 30) {
      // Check if pixel is predominantly orange vs white/grey
      // Orange: high red, moderate green, low blue (e.g. r > 180, g < 160, b < 70)
      if (r > 160 && g > 60 && g < 180 && b < 80) {
        orangeCount++;
      } else if (r > 120 && g > 120 && b > 120) {
        whiteCount++;
      }
    }
  }
}

console.log(`White/Grey pixels: ${whiteCount}, Orange pixels: ${orangeCount}`);
