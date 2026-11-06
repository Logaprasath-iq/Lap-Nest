const fs = require('fs');

const h2 = fs.readFileSync('home-2.html', 'utf8');
const footerIdx = h2.indexOf('<footer');
console.log(h2.slice(Math.max(0, footerIdx - 1200), footerIdx));
