const fs = require('fs');

const content = fs.readFileSync('home-2.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(355, 395).join('\n'));
