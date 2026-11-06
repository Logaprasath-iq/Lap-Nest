const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/logo/logo-3d-laptop.png');

// Find IDAT chunks
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
zlib.inflate(allIdat, (err, decompressed) => {
  if (err) return console.error(err);
  // first line filter byte is decompressed[0]
  // pixel 0 is decompressed[1..4]: R, G, B, A
  console.log('Pixel (0,0): R=' + decompressed[1] + ', G=' + decompressed[2] + ', B=' + decompressed[3] + ', A=' + decompressed[4]);
});
