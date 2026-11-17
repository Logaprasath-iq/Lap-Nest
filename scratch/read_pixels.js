const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1794905906814_80ed9077.png');
let pos = 8;
const chunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') {
    chunks.push(buf.subarray(pos + 8, pos + 8 + len));
  }
  pos += 12 + len;
}
const compressed = Buffer.concat(chunks);
const raw = zlib.inflateSync(compressed);
const width = 187;
const stride = 1 + width * 4;

console.log('Background of card:');
const bgIdx = 10 * stride + 1 + 50 * 4;
console.log('Card bg:', raw[bgIdx], raw[bgIdx+1], raw[bgIdx+2]);

console.log('\nText pixels:');
for (let y = 125; y < 135; y += 2) {
  for (let x = 30; x < 150; x += 10) {
    const idx = y * stride + 1 + x * 4;
    console.log(x, y, 'rgb:', raw[idx], raw[idx+1], raw[idx+2]);
  }
}
