const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const idx = indexHtml.indexOf('Enterprise-Grade Service Level Guarantees');
console.log(indexHtml.substring(idx - 100, idx + 100));
