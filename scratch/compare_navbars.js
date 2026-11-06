const fs = require('fs');

const testFiles = ['index.html', 'about.html', 'products.html', 'pricing.html'];

testFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const rtlMatch = content.match(/<button[^>]*class="[^"]*rtl-toggle-btn[^"]*"[^>]*>/);
  const themeMatch = content.match(/<button[^>]*class="[^"]*theme-toggle-btn[^"]*"[^>]*>/);
  const orderMatch = content.match(/<a[^>]*href="order\.html"[^>]*class="[^"]*"[^>]*>/);
  console.log(`=== ${f} ===`);
  console.log('RTL:', rtlMatch ? rtlMatch[0] : 'none');
  console.log('Theme:', themeMatch ? themeMatch[0] : 'none');
  console.log('Order:', orderMatch ? orderMatch[0] : 'none');
});
