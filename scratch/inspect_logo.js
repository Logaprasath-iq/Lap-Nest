const fs = require('fs');
const svg = fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8');
console.log('SVG length:', svg.length);
console.log(svg.replace(/href="data:image\/png;base64,[^"]+"/, 'href="[BASE64_IMAGE]"'));
