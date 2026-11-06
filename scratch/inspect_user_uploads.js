const fs = require('fs');

const uploads = [
  'media_1793796704626_b53d8fcd.png',
  'media_1793796756629_32945803.png',
  'media_1793796814940_8ce1facd.png',
  'media_1793796948066_1064efce.png'
];

uploads.forEach(u => {
  const p = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/' + u;
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    console.log(`${u}: ${width}x${height}, size ${buf.length} bytes`);
  } else {
    console.log(`${u}: not found`);
  }
});
