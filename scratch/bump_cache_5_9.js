const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('v=5.8')) {
    content = content.replace(/v=5\.8/g, 'v=5.9');
    fs.writeFileSync(f, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cache query to v=5.9 in ${count} files.`);
