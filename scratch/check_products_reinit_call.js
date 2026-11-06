const fs = require('fs');

const pJs = fs.readFileSync('assets/js/products.js', 'utf8');

const idx = pJs.indexOf('reinitScrollAnimations');
console.log(pJs.substring(idx - 100, idx + 200));
