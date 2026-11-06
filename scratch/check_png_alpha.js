const fs = require('fs');

function inspectPng(filePath) {
  const buf = fs.readFileSync(filePath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const colorType = buf[25]; // 6 is RGBA (has alpha channel), 2 is RGB
  return { width, height, colorType, hasAlpha: colorType === 6 };
}

console.log(inspectPng('assets/images/hero/hero-laptop-floating.png'));
