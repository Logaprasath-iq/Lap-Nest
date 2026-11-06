const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793785568934_10cd9ff1.png';
const dest = 'assets/images/logo/logo-3d-laptop.png';

fs.copyFileSync(src, dest);
const buf = fs.readFileSync(dest);
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`Copied 3rd image to ${dest}: ${width}x${height}, size: ${buf.length}`);
