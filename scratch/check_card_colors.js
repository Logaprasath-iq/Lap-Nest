const fs = require('fs');

console.log('=== TAILWIND CONFIG ===');
if (fs.existsSync('tailwind.config.js')) {
  console.log(fs.readFileSync('tailwind.config.js', 'utf8'));
}

console.log('=== PRODUCTS.JS (first 80 lines) ===');
const prodJs = fs.readFileSync('assets/js/products.js', 'utf8');
console.log(prodJs.slice(0, 1500));
