const fs = require('fs');

console.log('--- input.css ---');
const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = inputCss.split('\n');
lines.forEach((l, i) => {
  if (l.includes('252628') || l.includes('19171b') || l.includes('353639') || l.includes('b5b5b5')) {
    console.log(`L${i+1}: ${l}`);
  }
});

console.log('--- forms.js ---');
const formsJs = fs.readFileSync('assets/js/forms.js', 'utf8');
const fLines = formsJs.split('\n');
fLines.forEach((l, i) => {
  if (l.includes('252628') || l.includes('19171b') || l.includes('353639')) {
    console.log(`L${i+1}: ${l}`);
  }
});
