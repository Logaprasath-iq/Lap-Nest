const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

// Find where .hidden is in style.css
const hiddenPos = css.indexOf('.hidden{');
const equalCardPos = css.indexOf('.equal-card{');

console.log('.hidden pos:', hiddenPos);
console.log('.equal-card pos:', equalCardPos);

if (equalCardPos > hiddenPos) {
  console.log('CRITICAL BUG DETECTED: .equal-card comes AFTER .hidden in style.css!');
  console.log('Because both have specificity (0,1,0), .equal-card { display: flex } OVERRIDES .hidden { display: none }!');
} else {
  console.log('.hidden comes after .equal-card');
}
