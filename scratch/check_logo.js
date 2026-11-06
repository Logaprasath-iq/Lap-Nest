const fs = require('fs');
const svg = fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8');
console.log(svg.replace(/href="data:image\/png;base64,[^"]+"/g, 'href="[BASE64_IMAGE_DATA]"'));
