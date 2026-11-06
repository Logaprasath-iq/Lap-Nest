const fs = require('fs');

const phtml = fs.readFileSync('products.html', 'utf8');
const lines = phtml.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('252628') || l.includes('353639') || l.includes('19171b') || l.includes('b5b5b5')) {
    console.log(`L${idx+1}: ${l}`);
  }
});
