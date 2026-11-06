const fs = require('fs');

const prodJs = fs.readFileSync('assets/js/products.js', 'utf8');

// Find render function
const lines = prodJs.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('render') || line.includes('card') || line.includes('bg-')) {
    if (idx > 150) { // skip data section
      console.log(`L${idx+1}: ${line.trim()}`);
    }
  }
});
