const fs = require('fs');

const inputCss = fs.readFileSync('assets/css/input.css', 'utf8');
console.log('Contains laptop3DSpin:', inputCss.includes('laptop3DSpin'));
console.log('Contains animate-laptop-spin:', inputCss.includes('animate-laptop-spin'));
