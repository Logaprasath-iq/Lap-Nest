const fs = require('fs');
const path = require('path');

const imgPath = path.resolve('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793792244087_d008c99d.png');

console.log('Exists:', fs.existsSync(imgPath));
const stats = fs.statSync(imgPath);
console.log('Size:', stats.size);
