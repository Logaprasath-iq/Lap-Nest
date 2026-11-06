const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');
const match = css.match(/\.footer-dark-lock[\s\S]*?\}/g);
console.log(match);
