const fs = require('fs');

const animJs = fs.readFileSync('assets/js/animations.js', 'utf8');

const sIdx = animJs.indexOf('sticky-diagnostic-section');
if (sIdx !== -1) {
  console.log(animJs.substring(sIdx - 50, sIdx + 1200));
} else {
  console.log('No sticky-diagnostic-section in animations.js');
}
