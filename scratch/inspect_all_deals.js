const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const dIdx = indexHtml.indexOf('Latest Deals');
const dEnd = indexHtml.indexOf('</section>', dIdx);
console.log(indexHtml.substring(dIdx, dEnd));
