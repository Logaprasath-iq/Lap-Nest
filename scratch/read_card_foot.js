const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const idx = js.indexOf('<!-- Equal Card Footer');
console.log(js.substring(idx, idx + 800));
