const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const gIdx = indexHtml.indexOf('Guarantees');
console.log('Index of Guarantees in index.html:', gIdx);
if (gIdx !== -1) {
  console.log(indexHtml.substring(Math.max(0, gIdx - 600), gIdx + 1200));
}
