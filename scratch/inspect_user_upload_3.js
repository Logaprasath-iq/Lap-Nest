const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('assets/images/user-upload-3.png');
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

const width = 1024;
const height = 682;
const bpp = 4;
const stride = 1 + width * bpp;

// Let's unfilter PNG rows
const raw = Buffer.alloc(width * height * 4);
let prevRow = Buffer.alloc(width * 4);

for (let y = 0; y < height; y++) {
  const filterType = uncompressed[y * stride];
  const curRow = uncompressed.slice(y * stride + 1, (y + 1) * stride);
  const outRow = Buffer.alloc(width * 4);

  for (let i = 0; i < width * 4; i++) {
    const a = i >= 4 ? outRow[i - 4] : 0;
    const b = prevRow[i];
    const c = i >= 4 ? prevRow[i - 4] : 0;
    const x = curRow[i];

    if (filterType === 0) outRow[i] = x;
    else if (filterType === 1) outRow[i] = (x + a) & 0xff;
    else if (filterType === 2) outRow[i] = (x + b) & 0xff;
    else if (filterType === 3) outRow[i] = (x + Math.floor((a + b) / 2)) & 0xff;
    else if (filterType === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      else pr = c;
      outRow[i] = (x + pr) & 0xff;
    }
  }

  outRow.copy(raw, y * width * 4);
  prevRow = outRow;
}

// Now find bounding box of non-transparent (alpha > 20) and non-black (if alpha=255 and not black)
let minX = width, maxX = 0, minY = height, maxY = 0;
let solidPixels = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = raw[idx];
    const g = raw[idx + 1];
    const b = raw[idx + 2];
    const a = raw[idx + 3];

    // If it's visible and not pure black background
    if (a > 30 && (r > 20 || g > 20 || b > 20)) {
      solidPixels++;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log(`Solid visible pixels: ${solidPixels}`);
console.log(`Bounding box: (${minX}, ${minY}) to (${maxX}, ${maxY}) - size: ${maxX - minX + 1}x${maxY - minY + 1}`);

// Sample colors in the center
const sampleY = Math.floor((minY + maxY) / 2);
const sampleX = Math.floor((minX + maxX) / 2);
const sIdx = (sampleY * width + sampleX) * 4;
console.log(`Center pixel at (${sampleX}, ${sampleY}): rgba(${raw[sIdx]}, ${raw[sIdx+1]}, ${raw[sIdx+2]}, ${raw[sIdx+3]})`);
