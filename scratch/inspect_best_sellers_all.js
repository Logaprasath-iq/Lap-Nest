const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const bsIdx = indexHtml.indexOf('id="best-sellers"');
const bsEnd = indexHtml.indexOf('</section>', bsIdx);
console.log(indexHtml.substring(bsIdx, bsEnd));
