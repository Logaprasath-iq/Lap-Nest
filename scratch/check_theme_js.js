const fs = require('fs');

const themeJs = fs.readFileSync('assets/js/theme.js', 'utf8');
const lines = themeJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('19171b') || l.includes('252628') || l.includes('172731')) {
    console.log(`L${i+1}: ${l}`);
  }
});
