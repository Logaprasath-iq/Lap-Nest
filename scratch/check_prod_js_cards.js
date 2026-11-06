const fs = require('fs');
const content = fs.readFileSync('assets/js/products.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('id:') || line.includes('image:') || line.includes('ROG Strix') || line.includes('Nitro 5') || line.includes('MacBook Pro')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
