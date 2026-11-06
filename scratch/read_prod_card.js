const fs = require('fs');

const js = fs.readFileSync('assets/js/products.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(315, 395).join('\n'));
