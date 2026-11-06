const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const start = html.indexOf('Showroom & Lab Timings');
console.log(html.slice(start - 200, start + 1800));
