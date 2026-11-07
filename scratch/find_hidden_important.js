const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const regex = /[^{}]*hidden[^{]*\{[^}]*display:\s*none!important[^}]*\}/g;
let m;
while ((m = regex.exec(css)) !== null) {
  console.log('Found:', m[0]);
}
