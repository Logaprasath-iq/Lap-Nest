const fs = require('fs');

const content = fs.readFileSync('404.html', 'utf8');
const idx = content.indexOf('<!-- WhatsApp (Official Green) -->');
const svgMatch = content.slice(idx).match(/<svg[\s\S]*?<\/svg>/);
console.log(svgMatch[0]);
