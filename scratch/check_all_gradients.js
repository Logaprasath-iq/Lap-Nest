const fs = require('fs');

const pages = [
  'index.html',
  'products.html',
  'repair-upgrade.html',
  'service-details.html',
  'about.html',
  'contact.html',
  'pricing.html',
  'faq.html',
  'blog.html',
  'blog-details.html',
  'product-details.html',
  'home-2.html',
  'order.html',
  'terms.html',
  'privacy-policy.html'
];

// Check any other gradient backgrounds that might not turn light in light mode:
pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const gradientMatches = content.match(/bg-gradient-to-[a-z]+\s+from-\[[^\]]+\]\s+to-\[[^\]]+\]/g) || [];
  if (gradientMatches.length > 0) {
    console.log(`${p}: has gradients:`, gradientMatches);
  }
});
