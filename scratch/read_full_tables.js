const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const t1Start = html.indexOf('<!-- Comprehensive Rate Card Table -->');
const t1End = html.indexOf('</table>', t1Start) + 8;
console.log('TABLE 1 FULL:\n', html.slice(t1Start, t1End));

const t2Start = html.indexOf('<!-- SECTION 6: SERVICE COMPARISON MATRIX -->');
const t2End = html.indexOf('</table>', t2Start) + 8;
console.log('\n\nTABLE 2 FULL:\n', html.slice(t2Start, t2End));
