const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('id="sticky-visual-col"');
console.log(indexHtml.substring(sIdx + 2000, sIdx + 3500));
