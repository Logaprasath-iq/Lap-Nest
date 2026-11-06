const fs = require('fs');

const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');
console.log('Last 400 chars of input.css:');
console.log(inputCss.substring(inputCss.length - 400));
