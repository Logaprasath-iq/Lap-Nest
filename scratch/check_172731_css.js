const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('172731')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
