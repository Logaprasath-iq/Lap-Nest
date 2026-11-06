const fs = require('fs');

if (fs.existsSync('assets/js/products.js')) {
  const content = fs.readFileSync('assets/js/products.js', 'utf8');
  console.log('Length of products.js:', content.length);
  const rIdx = content.indexOf('render');
  if (rIdx !== -1) {
    console.log(content.substring(rIdx, rIdx + 1200));
  }
} else {
  console.log('products.js not found');
}
