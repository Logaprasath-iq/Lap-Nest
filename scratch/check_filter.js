const fs = require('fs');
const zlib = require('zlib');

// Read PNG
const buf = fs.readFileSync('assets/images/logo/logo-3d-laptop.png');
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);

let idatBuffers = [];
let offset = 8;
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    idatBuffers.push(buf.slice(offset + 8, offset + 8 + len));
  }
  offset += 12 + len;
}

const allIdat = Buffer.concat(idatBuffers);
const decompressed = zlib.inflateSync(allIdat);

// Decompressed format: height lines, each line has 1 filter byte + width * 4 bytes (RGBA)
const stride = 1 + width * 4;
const newDecompressed = Buffer.from(decompressed);

for (let y = 0; y < height; y++) {
  const lineStart = y * stride;
  // filter byte is at lineStart, leave it unchanged if filter 0 or unfilter
  // Wait, let's check what filter byte is used!
}

console.log('Filter bytes for first 5 lines:', [
  decompressed[0 * stride], decompressed[1 * stride], decompressed[2 * stride],
  decompressed[3 * stride], decompressed[4 * stride]
]);
