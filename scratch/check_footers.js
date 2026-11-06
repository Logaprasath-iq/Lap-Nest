const fs = require('fs');

['about.html', 'pricing.html', 'repair-upgrade.html'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const footerIdx = content.indexOf('<footer');
  const slice = content.slice(Math.max(0, footerIdx - 600), footerIdx);
  console.log(`=== ${p} ===`);
  console.log(slice.trim());
});
