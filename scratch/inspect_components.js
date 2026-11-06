const fs = require('fs');

const pages = [
  'index.html', 'home-2.html', 'products.html', 'product-details.html',
  'about.html', 'contact.html', 'pricing.html', 'repair-upgrade.html',
  'blog.html', 'blog-details.html', 'order.html', 'faq.html',
  'service-details.html', 'terms.html', 'privacy-policy.html',
  '404.html', 'coming-soon.html', 'maintenance.html'
];

console.log('Inspecting key components across pages:');
for (const page of pages) {
  if (!fs.existsSync(page)) continue;
  const html = fs.readFileSync(page, 'utf8');
  
  // check for inputs
  const hasInputs = html.includes('<input') || html.includes('<textarea');
  // check for tables
  const hasTable = html.includes('<table');
  // check for modals
  const hasModal = html.includes('modal') || html.includes('dialog');
  
  console.log(`${page.padEnd(22)}: inputs=${hasInputs ? 'YES' : 'NO '}, table=${hasTable ? 'YES' : 'NO '}, modal=${hasModal ? 'YES' : 'NO '}`);
}
