const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
// Find the CTA section before footer in about.html
const lines = about.split('\n');
lines.slice(lines.length - 80).forEach((l, i) => console.log(l));
