const fs = require('fs');

const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');

const eIdx = inputCss.indexOf('equal-card');
if (eIdx !== -1) {
  console.log(inputCss.substring(eIdx - 50, eIdx + 800));
} else {
  console.log('No equal-card in input.css');
}
