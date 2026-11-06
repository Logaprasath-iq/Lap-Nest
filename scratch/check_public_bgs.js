const fs = require('fs');

const publicFiles = [
  'index.html',
  'products.html',
  'repair-upgrade.html',
  'service-details.html',
  'about.html',
  'contact.html',
  'cart.html',
  'checkout.html',
  'compare.html',
  'faq.html',
  'privacy.html',
  'terms.html',
  'login.html',
  'register.html'
];

publicFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  // Check any bg-[#...]
  const hexBgs = content.match(/bg-\[#[a-fA-F0-9]{3,6}\]/g) || [];
  const uniqueHex = [...new Set(hexBgs)];
  console.log(`${f}:`, uniqueHex);
});
