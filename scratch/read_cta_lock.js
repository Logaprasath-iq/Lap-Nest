const fs = require('fs');

const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.slice(625, 675).forEach((l, i) => console.log(`L${626+i}: ${l}`));
