const fs = require('fs');

const content = fs.readFileSync('404.html', 'utf8');
const idx = content.indexOf('https://wa.me');
console.log(content.slice(idx - 100, idx + 400));
