const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');
console.log('Has gradient in input.css:', css.includes('gradient'));
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('gradient')) console.log(`L${i+1}: ${l}`);
});
