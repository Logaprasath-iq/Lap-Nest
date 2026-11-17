const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1794907244714_41851bea.png');
let pos = 8;
const chunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') chunks.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const compressed = Buffer.concat(chunks);
const raw = zlib.inflateSync(compressed);
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
const stride = 1 + width * 4;

// Find non-white pixels
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = y * stride + 1 + x * 4;
    const r = raw[idx], g = raw[idx+1], b = raw[idx+2];
    if (r < 240 || g < 240 || b < 240) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
console.log({ minX, maxX, minY, maxY, width, height });

// Sample inside card at center
const cardCenterX = Math.floor((minX + maxX) / 2);
const cardCenterY = Math.floor((minY + maxY) / 2);
const centerIdx = cardCenterY * stride + 1 + cardCenterX * 4;
console.log('Card center color:', raw[centerIdx], raw[centerIdx+1], raw[centerIdx+2]);

// Sample title area (near top of card)
for (let y = minY + 20; y <= minY + 45; y += 5) {
  for (let x = minX + 25; x <= minX + 180; x += 30) {
    const idx = y * stride + 1 + x * 4;
    console.log(`Title at (${x}, ${y}): rgb(${raw[idx]}, ${raw[idx+1]}, ${raw[idx+2]})`);
  }
}
