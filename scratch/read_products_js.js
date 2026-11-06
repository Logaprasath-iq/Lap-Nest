const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

// Find render function
const renderIdx = js.indexOf('function renderProducts') !== -1 ? js.indexOf('function renderProducts') : js.indexOf('renderProducts');
console.log(js.substring(renderIdx, renderIdx + 2000));
