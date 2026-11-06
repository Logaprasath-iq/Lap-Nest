const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const footerIdx = about.indexOf('<footer');
const slice = about.slice(Math.max(0, footerIdx - 1500), footerIdx);
console.log(slice);
