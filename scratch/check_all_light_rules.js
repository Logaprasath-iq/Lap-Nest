const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');

// Let's inspect all light mode rules in input.css
const lines = css.split('\n');
const lightRules = [];
let inLightBlock = false;

lines.forEach((l, i) => {
  if (l.includes('html.light') || l.includes('.light ')) {
    lightRules.push(`L${i+1}: ${l}`);
  }
});

console.log('Total light mode selectors:', lightRules.length);
console.log(lightRules.slice(0, 40).join('\n'));
