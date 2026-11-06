const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793792244087_d008c99d.png';
fs.copyFileSync(src, 'assets/images/user-upload-2.png');
console.log('Copied user-upload-2.png');
