const fs = require('fs');

const buf = fs.readFileSync('assets/images/logo/logo-mark-user.png');
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`Dimensions: ${width}x${height}`);
