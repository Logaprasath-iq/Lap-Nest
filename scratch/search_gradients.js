const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('gradient') || l.includes('from-white') || l.includes('from-[#ffffff]')) {
    console.log(i, l);
  }
});
