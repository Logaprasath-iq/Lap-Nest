const fs = require('fs');
const zlib = require('zlib');

function inspectPng(filePath) {
  const buf = fs.readFileSync(filePath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  console.log(`${filePath}: ${width}x${height}`);
}

inspectPng('assets/images/media_1793796948066_1064efce.png');
