const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793792420644_5802afd7.png';
fs.copyFileSync(src, 'assets/images/user-upload-3.png');
console.log('Copied user-upload-3.png');
