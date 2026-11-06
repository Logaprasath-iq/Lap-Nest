const fs = require('fs');

const pjs = fs.readFileSync('assets/js/products.js', 'utf8');
const lines = pjs.split('\n');
lines.forEach((l, i) => {
  if (l.match(/(252628|1f1d22|19171b|353639|b5b5b5)/i)) {
    console.log(`L${i+1}: ${l}`);
  }
});
