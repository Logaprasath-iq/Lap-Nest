const fs = require('fs');

console.log('favicon.svg:');
console.log(fs.readFileSync('favicon.svg', 'utf8').substring(0, 500));
