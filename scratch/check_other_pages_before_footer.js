const fs = require('fs');

const pages = ['about.html', 'repair-upgrade.html', 'pricing.html', 'contact.html', 'products.html'];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  // find last section before footer
  const footerIdx = content.indexOf('<footer');
  if (footerIdx !== -1) {
    const beforeFooter = content.slice(Math.max(0, footerIdx - 1200), footerIdx);
    console.log(`=== ${p} (before footer) ===`);
    const secMatch = beforeFooter.match(/<section[^>]*>/g);
    if (secMatch) {
      console.log(secMatch[secMatch.length - 1]);
    }
  }
});
