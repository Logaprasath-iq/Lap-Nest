const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (content.includes('style.css?v=3.0')) {
    content = content.replace(/style\.css\?v=3\.0/g, 'style.css?v=3.1');
    changed = true;
  }
  if (content.includes('blog-details.js')) {
    if (!content.includes('blog-details.js?v=')) {
      content = content.replace(/blog-details\.js/g, 'blog-details.js?v=3.1');
      changed = true;
    } else {
      content = content.replace(/blog-details\.js\?v=[0-9.]+/g, 'blog-details.js?v=3.1');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updated++;
  }
});

console.log(`Bumped version to 3.1 in ${updated} files.`);
