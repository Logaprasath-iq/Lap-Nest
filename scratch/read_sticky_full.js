const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('id="sticky-diagnostic-section"');
const sEnd = indexHtml.indexOf('</section>', sIdx);
console.log(indexHtml.substring(sIdx, sEnd + 10));
