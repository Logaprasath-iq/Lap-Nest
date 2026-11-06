const fs = require('fs');

const buf = fs.readFileSync('assets/videos/Gaming_laptop_floating_with_lights_d473e30e.mp4');
console.log('Size:', buf.length);

// Look for 'mvhd' atom or 'tkhd' atom to get video width and height
let offset = 0;
while (offset < buf.length - 8) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'moov' || type === 'trak' || type === 'mdia') {
    offset += 8;
    continue;
  }
  if (type === 'tkhd') {
    // In tkhd, width and height are 16.16 fixed point numbers at the end of the atom
    const version = buf[offset + 8];
    const widthOffset = version === 1 ? offset + 8 + 84 : offset + 8 + 72;
    const w = buf.readUInt32BE(widthOffset) >> 16;
    const h = buf.readUInt32BE(widthOffset + 4) >> 16;
    if (w > 0 && h > 0) {
      console.log(`Video dimensions from tkhd: ${w} x ${h}`);
    }
  }
  if (len === 0 || len === 1) break;
  offset += len;
}
