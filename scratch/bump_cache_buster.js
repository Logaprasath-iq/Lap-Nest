const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('style.css?v=4.5')) {
    content = content.replace(/style\.css\?v=4\.5/g, 'style.css?v=4.6');
    fs.writeFileSync(f, content, 'utf8');
    updated++;
  }
});
console.log(`Bumped cache buster to v=4.6 in ${updated} files.`);
