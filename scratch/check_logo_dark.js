const fs = require('fs');
const darkSvg = fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8');
console.log(darkSvg.replace(/href="data:image\/png;base64,[^"]+"/g, 'href="[BASE64_IMAGE_DATA]"'));
