const fs = require('fs');
['about.html', 'blog.html', 'pricing.html', 'repair-upgrade.html', 'products.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<div class="pt-1[^"]*"[\s\S]*?<\/div>/);
  if (match) {
    console.log(`=== ${file} ===\n${match[0]}\n`);
  }
});
