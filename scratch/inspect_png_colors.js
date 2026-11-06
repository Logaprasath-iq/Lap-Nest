const fs = require('fs');
const zlib = require('zlib');

function inspectPng(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 8;
  const chunks = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.slice(pos + 8, pos + 8 + len);
    chunks.push({ type, len, data });
    pos += 12 + len;
  }
  const idat = Buffer.concat(chunks.filter(c => c.type === 'IDAT').map(c => c.data));
  const uncompressed = zlib.inflateSync(idat);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  console.log(`${filePath}: ${width}x${height}, uncompressed len: ${uncompressed.length}`);
  
  // Sample dominant colors
  const colorMap = {};
  for (let i = 0; i < uncompressed.length; i += 4) {
    const r = uncompressed[i + 1];
    const g = uncompressed[i + 2];
    const b = uncompressed[i + 3];
    const a = uncompressed[i + 4];
    if (a > 50) {
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      colorMap[hex] = (colorMap[hex] || 0) + 1;
    }
  }
  const sorted = Object.entries(colorMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
  console.log('Top colors:', sorted);
}

inspectPng('assets/images/media_1793796814940_8ce1facd.png');
