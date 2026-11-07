const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');

const matches = css.match(/html\.light[^{]*nav[^{]*\{[^}]*\}/g);
console.log('Light nav rules:', matches);
