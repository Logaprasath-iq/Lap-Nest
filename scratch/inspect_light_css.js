const fs = require('fs');

const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');

const lightMatches = inputCss.match(/\.light[^{]*\{[^}]*\}/g) || [];
console.log('Found light rules in input.css:', lightMatches.length);
lightMatches.forEach((m, idx) => {
  if (idx < 15) console.log(m);
});
