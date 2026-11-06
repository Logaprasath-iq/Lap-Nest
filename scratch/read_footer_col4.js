const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const lines = indexHtml.split('\n');
const outpostIdx = lines.findIndex(l => l.includes('CHENNAI OUTPOST'));

lines.slice(outpostIdx - 2, outpostIdx + 20).forEach((l, i) => {
  console.log(`L${outpostIdx - 1 + i}: ${l}`);
});
