const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('Enterprise-Grade Service Level Guarantees');
const secStart = indexHtml.lastIndexOf('<section', sIdx);
const secEnd = indexHtml.indexOf('</section>', sIdx);
console.log(indexHtml.substring(secStart, secStart + 600));
console.log('\n--- Between SLA cards and FAQ ---');
const gridEnd = indexHtml.indexOf('<!-- Frequently Asked Hardware Questions', sIdx);
if (gridEnd !== -1) {
  console.log(indexHtml.substring(gridEnd - 200, gridEnd + 300));
} else {
  console.log('No FAQ comment found, checking FAQ section...');
}
