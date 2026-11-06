const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const cIdx = indexHtml.indexOf('id="diagnostic-card-phase-1-2"');
console.log(indexHtml.substring(cIdx, cIdx + 1200));
