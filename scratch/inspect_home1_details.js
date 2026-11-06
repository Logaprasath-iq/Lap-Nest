const fs = require('fs');

const buf = fs.readFileSync('assets/videos/home1.mp4');

// dump moov boxes
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
    if (type === 'hdlr') {
      const handlerType = buf.toString('ascii', offset + 16, offset + 20);
      console.log(`${indent}  -> handler: ${handlerType}`);
    }
    offset += len;
  }
}

// find moov
const moovIdx = buf.indexOf(Buffer.from('moov'));
console.log('moov index:', moovIdx);
dumpBoxes(moovIdx - 4, buf.length);
