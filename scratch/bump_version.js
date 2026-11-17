const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updatedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('style.css?v=6.2')) {
    content = content.replaceAll('style.css?v=6.2', 'style.css?v=6.3');
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
  }
});
console.log(`Bumped cache version to v=6.3 in ${updatedCount} files.`);
