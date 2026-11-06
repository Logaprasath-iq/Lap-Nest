const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793786649668_69ba6923.png';
const dest = 'assets/images/logo/logo-5th.png';

fs.copyFileSync(src, dest);
const buf = fs.readFileSync(dest);
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`Copied 5th image: ${width}x${height}, size: ${buf.length}`);
