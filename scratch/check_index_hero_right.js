const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const heroMatch = html.match(/<section id=\"hero-section\"[\s\S]*?<\/section>/i);
if (heroMatch) console.log(heroMatch[0].slice(1500));
