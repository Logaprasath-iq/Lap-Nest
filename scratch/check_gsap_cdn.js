const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const gsapIdx = indexHtml.indexOf('gsap');
console.log(indexHtml.substring(gsapIdx - 50, gsapIdx + 400));
