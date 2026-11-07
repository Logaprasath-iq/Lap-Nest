const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const t2Start = html.indexOf('How LAPNEST Compares');
const t2End = html.indexOf('</table>', t2Start) + 8;
console.log('TABLE 2 FULL:\n', html.slice(t2Start, t2End));
