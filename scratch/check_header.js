const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const headerMatch = about.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('about.html header:');
  console.log(headerMatch[0].slice(0, 800));
}
