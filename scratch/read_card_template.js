const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const idx = js.indexOf('function renderProductCardHTML');
console.log(js.substring(idx, idx + 2500));
