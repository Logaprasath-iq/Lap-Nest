const fs = require('fs');

const p = 'assets/images/hero/hero-laptop-floating.png';
const stat = fs.statSync(p);
console.log('hero-laptop-floating.png size:', stat.size);
