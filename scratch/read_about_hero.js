const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const heroMatch = about.match(/<section[\s\S]*?<\/section>/i);
if (heroMatch) console.log(heroMatch[0].slice(0, 1200));
