const fs = require('fs');

['index.html', 'home-2.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  console.log(`\n=== ${file} ===`);
  lines.forEach((l, i) => {
    if (l.includes('border-t') && (l.includes('border-[#') || l.includes('card-footer') || l.includes('equal-card-footer'))) {
      console.log(`  L${i+1}: ${l.trim().substring(0, 110)}`);
    }
  });
});
