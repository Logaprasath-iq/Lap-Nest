const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const match = css.match(/[^{}]*\.hidden[^{]*\{[^}]*\}/g);
console.log('Matches for .hidden in style.css:', match);
