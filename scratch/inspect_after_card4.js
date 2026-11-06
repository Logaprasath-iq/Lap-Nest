const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('SLA Card 4');
console.log(indexHtml.substring(sIdx, sIdx + 1200));
