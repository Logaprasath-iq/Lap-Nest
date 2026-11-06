const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const s4 = html.match(/<!-- SECTION 4: REPAIR PRICING -->[\s\S]*?<\/section>/);
if (s4) {
  console.log(s4[0].substring(0, 1500));
}
