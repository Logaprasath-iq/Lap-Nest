const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('newsletter') || l.includes('STAY AHEAD') || l.includes('newsletter-cta')) {
    console.log(`L${i+1}: ${l}`);
  }
});
