const fs = require('fs');

const buf = fs.readFileSync('assets/images/logo/logo-3d-laptop.png');
// Check if it's RGBA PNG
// Let's inspect bytes or check if corners are white or transparent
console.log('Byte 25 (color type):', buf[25]); 
// In PNG specification:
// color type 6 is RGBA (Truecolor with alpha)
// color type 2 is RGB (Truecolor without alpha)
// color type 3 is Palette
