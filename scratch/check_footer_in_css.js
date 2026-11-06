const fs = require('fs');

const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');

const fIdx = inputCss.indexOf('footer');
if (fIdx !== -1) {
  console.log('Footer mentions in input.css:');
  console.log(inputCss.substring(fIdx - 100, fIdx + 300));
} else {
  console.log('No footer mentions in input.css');
}
