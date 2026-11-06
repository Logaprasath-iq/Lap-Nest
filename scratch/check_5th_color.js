const fs = require('fs');

const buf = fs.readFileSync('assets/images/logo/logo-5th.png');
console.log('Color type (byte 25):', buf[25]); // 6 = RGBA, 2 = RGB
