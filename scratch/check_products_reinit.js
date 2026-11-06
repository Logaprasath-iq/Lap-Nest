const fs = require('fs');

const content = fs.readFileSync('assets/js/products.js', 'utf8');
console.log('Calls reinitScrollAnimations:', content.includes('reinitScrollAnimations'));
console.log('Calls ScrollTrigger:', content.includes('ScrollTrigger'));
