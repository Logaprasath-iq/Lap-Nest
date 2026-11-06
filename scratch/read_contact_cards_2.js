const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const start = html.indexOf('Quick Emergency Assistance');
console.log(html.slice(start, start + 1200));
