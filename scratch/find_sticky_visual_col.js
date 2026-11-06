const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('id="sticky-visual-col"');
console.log('Found id="sticky-visual-col" at:', sIdx);
if (sIdx !== -1) {
  console.log(indexHtml.substring(sIdx - 100, sIdx + 1200));
}
