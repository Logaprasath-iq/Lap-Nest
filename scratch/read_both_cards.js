const fs = require('fs');

const html = fs.readFileSync('contact.html', 'utf8');
const start = html.indexOf('<!-- SECTION 6 & 7: WORKING HOURS, FAQ & SOCIAL LINKS -->');
const end = html.indexOf('</section>', start) + 10;
console.log(html.slice(start, end));
