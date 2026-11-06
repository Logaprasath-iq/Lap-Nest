const fs = require('fs');

const svgLight = fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8');
const svgDark = fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8');

console.log('svgLight length:', svgLight.length);
console.log('svgDark length:', svgDark.length);

// Check if svgLight contains black laptop image and black text
console.log('Has #0e181f in light svg:', svgLight.includes('#0e181f'));
console.log('Has LAPNEST in light svg:', svgLight.includes('LAPNEST'));
console.log('Has #FD802E in light svg:', svgLight.includes('#FD802E'));
