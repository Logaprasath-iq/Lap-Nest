const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<div class="pt-1[^"]*"[\s\S]*?<\/div>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log(`=== ${file} ===`);
    console.log(match[0].replace(/\s+/g, ' ').substring(0, 160));
  }
});
