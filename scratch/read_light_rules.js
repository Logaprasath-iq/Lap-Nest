const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(295, 345).join('\n'));
