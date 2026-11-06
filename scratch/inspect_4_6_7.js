const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<section[\s\S]*?(?=<section|<\/main|$)/gi;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  if (i === 4 || i === 6 || i === 7) {
    console.log(`=== SECTION ${i} ===`);
    console.log(match[0].slice(0, 500));
  }
}
