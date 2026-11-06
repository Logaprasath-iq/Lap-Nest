const fs = require('fs');
const animJs = fs.readFileSync('assets/js/animations.js', 'utf8');
console.log('Total length of animations.js:', animJs.length);
console.log(animJs);
