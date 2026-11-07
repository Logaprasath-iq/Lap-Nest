const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('style.css?v=4.6')) {
    content = content.replace(/style\.css\?v=4\.6/g, 'style.css?v=4.7');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Updated cache-buster in ${count} files.`);
