const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('<!-- Product 1: Dell Inspiron');
console.log(html.substring(idx, idx + 1200));
