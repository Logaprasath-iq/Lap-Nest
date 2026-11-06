const fs = require('fs');

const animJs = fs.readFileSync('assets/js/animations.js', 'utf8');

const sIdx = animJs.indexOf('sticky');
if (sIdx !== -1) {
  console.log(animJs.substring(sIdx - 100, sIdx + 1500));
} else {
  console.log('No sticky found in animations.js');
}
