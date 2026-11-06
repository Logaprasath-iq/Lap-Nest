const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const fIdx = indexHtml.indexOf('id="flagship-showcase-section"');
const fEnd = indexHtml.indexOf('</section>', fIdx);
console.log('FLAGSHIP SECTION:');
console.log(indexHtml.substring(fIdx, fEnd + 10));
