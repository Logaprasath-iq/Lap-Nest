const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793784045362_83536543.png';
const dest = 'assets/images/logo/logo-mark-user.png';

fs.copyFileSync(src, dest);
console.log('Copied user logo image to assets/images/logo/logo-mark-user.png, size:', fs.statSync(dest).size);
