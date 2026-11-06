const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('id="sticky-diagnostic-section"');
const sEnd = indexHtml.indexOf('</section>', sIdx);
console.log('STICKY SECTION:');
console.log(indexHtml.substring(sIdx, sEnd + 10));

const tIdx = indexHtml.indexOf('id="testimonials"');
const tEnd = indexHtml.indexOf('</section>', tIdx);
console.log('\nTESTIMONIALS SECTION:');
console.log(indexHtml.substring(tIdx, tEnd + 10));
