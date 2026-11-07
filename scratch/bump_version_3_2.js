const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (content.includes('style.css?v=3.1')) {
    content = content.replace(/style\.css\?v=3\.1/g, 'style.css?v=3.2');
    changed = true;
  } else if (content.includes('style.css?v=3.0')) {
    content = content.replace(/style\.css\?v=3\.0/g, 'style.css?v=3.2');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updated++;
  }
});

console.log(`Bumped version to 3.2 in ${updated} files.`);
