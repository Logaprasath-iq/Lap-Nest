const fs = require('fs');

const html = fs.readFileSync('contact.html', 'utf8');
const start = html.indexOf('<!-- Left Column: Showroom & Lab Timings -->');
const end = html.indexOf('<!-- Right Column: Quick Emergency Assistance -->');
console.log(html.slice(start, end));
