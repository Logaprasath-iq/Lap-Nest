const fs = require('fs');

const pages = ['index.html', 'about.html', 'pricing.html', 'products.html', 'repair-upgrade.html', 'contact.html', 'blog.html', 'home-2.html'];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  // Count grid containers
  const grids = (html.match(/<div[^>]*class="[^"]*grid[^"]*gap-[^"]*"[^>]*>/g) || []).length;
  const cards = (html.match(/class="[^"]*(tilt-card|equal-card|product-card|service-card|rounded-2xl bg-\[#172731\])[^"]*"/g) || []).length;
  console.log(`${p}: ${grids} grids, ${cards} detected cards`);
});
