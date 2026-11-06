const fs = require('fs');
const content = fs.readFileSync('product-details.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('dell-inspiron') || line.includes('main-product-img') || line.includes('product-gallery')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
