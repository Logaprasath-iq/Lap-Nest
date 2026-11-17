const fs = require('fs');

const pages = [
  'about.html',
  'blog.html',
  'contact.html',
  'order.html',
  'pricing.html',
  'products.html',
  'repair-upgrade.html'
];

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const m = c.match(/<!--\s*ELEGANT SECTION SEPARATION DIVIDER\s*-->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
  if (m) {
    console.log(`\n=== ${p} ===`);
    console.log(m[0]);
  }
});
