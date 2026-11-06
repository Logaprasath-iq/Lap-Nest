const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('html.light') && (l.includes('card') || l.includes('contact') || l.includes('timings') || l.includes('emergency') || l.includes('172731'))) {
    console.log(i, l);
  }
});
