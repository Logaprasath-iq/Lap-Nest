const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');

const lightIdx = css.indexOf('.light');
if (lightIdx !== -1) {
  console.log(css.substring(lightIdx, lightIdx + 2000));
} else {
  console.log('No .light found in input.css');
}
