const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('products-count-badge')) {
    console.log((i+1) + ': ' + l);
  }
});
