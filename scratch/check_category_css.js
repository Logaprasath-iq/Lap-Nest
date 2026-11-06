const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('category') || l.includes('tilt-card') || l.includes('from-[#172731]')) {
    console.log(`L${i+1}: ${l}`);
  }
});
