const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<button id="mobile-menu-btn"[\s\S]*?<\/button>/);
  if (m) console.log(f, ':', m[0].replace(/\s+/g, ' '));
  else console.log(f, ': NO mobile-menu-btn');
});
