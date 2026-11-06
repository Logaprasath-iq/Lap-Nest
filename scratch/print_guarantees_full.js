const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('Enterprise-Grade Service Level Guarantees');
const secStart = indexHtml.lastIndexOf('<section', sIdx);
const secEnd = indexHtml.indexOf('</section>', sIdx) + 10;

console.log('Section length:', secEnd - secStart);
console.log(indexHtml.substring(secStart, secEnd));
