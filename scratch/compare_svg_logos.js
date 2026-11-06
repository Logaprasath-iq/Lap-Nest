const fs = require('fs');

console.log('--- logo-dark.svg ---');
console.log(fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8').substring(0, 500));

console.log('\n--- logo-light.svg ---');
console.log(fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8').substring(0, 500));
