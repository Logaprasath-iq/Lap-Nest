const fs = require('fs');

const buf = fs.readFileSync('assets/videos/diagnostic-lab.mp4');

// Search for 'mvhd' or 'tkhd' atom in MP4 to get duration and dimensions
let pos = 0;
while (pos < buf.length - 8) {
  const size = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'moov' || type === 'trak' || type === 'mdia') {
    pos += 8;
  } else if (type === 'tkhd') {
    // tkhd width and height are at offset 76 or 88 depending on version
    const version = buf[pos + 8];
    const widthOffset = version === 1 ? pos + 96 : pos + 84;
    const heightOffset = version === 1 ? pos + 100 : pos + 88;
    const width = buf.readUInt32BE(widthOffset) >> 16;
    const height = buf.readUInt32BE(heightOffset) >> 16;
    console.log(`Video track dimensions: ${width}x${height}`);
    break;
  } else {
    if (size <= 0) break;
    pos += size;
  }
}
