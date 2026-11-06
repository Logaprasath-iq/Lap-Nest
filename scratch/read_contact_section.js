const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const lines = html.split('\n');
const startIdx = lines.findIndex(l => l.includes('Showroom & Lab Timings'));
console.log(lines.slice(startIdx - 10, startIdx + 50).join('\n'));
