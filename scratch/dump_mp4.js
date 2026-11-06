const fs = require('fs');

const buf = fs.readFileSync('assets/videos/Gaming_laptop_floating_with_lights_d473e30e.mp4');

function dumpBoxes(offset, end, depth = 0) {
  while (offset < end - 8) {
    const len = buf.readUInt32BE(offset);
    if (len < 8) break;
    const type = buf.toString('ascii', offset + 4, offset + 8);
    const indent = '  '.repeat(depth);
    console.log(`${indent}${type} (${len} bytes at ${offset})`);
    if (['moov', 'trak', 'mdia', 'minf', 'stbl'].includes(type)) {
      dumpBoxes(offset + 8, offset + len, depth + 1);
    }
    offset += len;
  }
}

dumpBoxes(0, Math.min(buf.length, 50000));
