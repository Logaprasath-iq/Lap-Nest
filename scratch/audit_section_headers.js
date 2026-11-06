const fs = require('fs');

const pages = [
  'products.html',
  'pricing.html',
  'repair-upgrade.html',
  'blog.html',
  'about.html',
  'contact.html',
  'faq.html'
];

pages.forEach(page => {
  const html = fs.readFileSync(page, 'utf8');
  console.log(`\n=== Checking ${page} ===`);
  const leftFlexMatches = html.match(/<div class="flex flex-col md:flex-row md:items-end justify-between[^"]*">[\s\S]*?<h2[^>]*>[\s\S]*?<\/h2>/g) || [];
  console.log(`Found ${leftFlexMatches.length} left-aligned section headers in ${page}`);
  leftFlexMatches.forEach((m, idx) => {
    console.log(`Match ${idx + 1}:`, m.substring(0, 200).replace(/\n/g, ' '));
  });
});
