const fs = require('fs');

const buf = fs.readFileSync('assets/videos/Gaming_laptop_floating_with_lights_d473e30e.mp4');
const avc1Idx = buf.indexOf(Buffer.from('avc1'));
if (avc1Idx !== -1) {
  // in avc1 atom: width is at offset + 24 (uint16), height is at offset + 26 (uint16)
  const w = buf.readUInt16BE(avc1Idx + 24);
  const h = buf.readUInt16BE(avc1Idx + 26);
  console.log(`avc1 resolution: ${w} x ${h}`);
} else {
  console.log('avc1 not found, checking vp09 / hvc1');
  const hvc1Idx = buf.indexOf(Buffer.from('hvc1'));
  if (hvc1Idx !== -1) {
    const w = buf.readUInt16BE(hvc1Idx + 24);
    const h = buf.readUInt16BE(hvc1Idx + 26);
    console.log(`hvc1 resolution: ${w} x ${h}`);
  }
}
