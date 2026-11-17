const fs = require('fs');
const html = fs.readFileSync('home-2.html', 'utf8');

const s5Start = html.indexOf('<!-- SECTION 5: LAPTOP RENTAL PROMOTIONAL SECTION -->');
const s5End = html.indexOf('<!-- SECTION 6: EXPERT REPAIR AND MAINTENANCE -->');
const s5 = html.substring(s5Start, s5End);
console.log(s5);
