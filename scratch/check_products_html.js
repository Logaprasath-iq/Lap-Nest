const fs = require('fs');

const phtml = fs.readFileSync('products.html', 'utf8');
const lines = phtml.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('product-grid') || l.includes('products-grid') || l.includes('tilt-card') || l.includes('equal-card') || l.includes('renderProductCard')) {
    console.log(`L${idx+1}: ${l.trim()}`);
  }
});
