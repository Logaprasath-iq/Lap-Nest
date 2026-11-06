const fs = require('fs');

const buf = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793795265366_225869e6.mp4');

// Look for 'tkhd' box in moov
let offset = 0;
while (offset < buf.length - 8) {
  const len = buf.readUInt32BE(offset);
  if (len < 8) break;
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'moov' || type === 'trak' || type === 'mdia' || type === 'minf' || type === 'stbl') {
    offset += 8;
    continue;
  }
  if (type === 'tkhd') {
    const w = buf.readUInt32BE(offset + len - 8) >> 16;
    const h = buf.readUInt32BE(offset + len - 4) >> 16;
    if (w > 0 && h > 0) {
      console.log(`Track dimensions: ${w} x ${h}`);
    }
  }
  offset += len;
}
