const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const idx = js.indexOf('<h3 class="text-lg f');
console.log(js.substring(idx, idx + 1500));
