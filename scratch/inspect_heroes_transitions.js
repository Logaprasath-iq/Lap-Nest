const fs = require('fs');

const files = ['about.html', 'pricing.html', 'blog.html', 'repair-upgrade.html', 'products.html', 'contact.html', 'order.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n============================= ${f} =============================`);
  const match = content.match(/<!-- COMPACT ENCLOSED HERO SECTION[\s\S]*?<\/section>[\s\S]*?(<section[^>]*>|<div class="grid)/);
  if (match) {
    console.log(match[0].slice(-300));
  } else {
    // Try products or order style
    const pMatch = content.match(/<!-- HERO BANNER[\s\S]*?<\/div>\s*<\/div>[\s\S]*?(<div[^>]*>|<section)/);
    if (pMatch) {
      console.log(pMatch[0].slice(-300));
    } else {
      console.log('No direct pattern match for hero boundary');
    }
  }
});
