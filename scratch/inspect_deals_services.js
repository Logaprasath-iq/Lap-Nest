const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find Deals section in index.html
const dIdx = indexHtml.indexOf('Latest Deals');
if (dIdx !== -1) {
  console.log('--- DEALS SECTION ---');
  console.log(indexHtml.substring(dIdx - 100, dIdx + 1800));
}

// Find Services section in index.html
const sIdx = indexHtml.indexOf('id="services"');
if (sIdx !== -1) {
  console.log('--- SERVICES SECTION ---');
  console.log(indexHtml.substring(sIdx, sIdx + 1500));
}
