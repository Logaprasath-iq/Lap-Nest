const fs = require('fs');

['about.html', 'products.html', 'pricing.html', 'repair-upgrade.html', 'order.html', 'contact.html', 'home-2.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasHeader = /<header[\s\S]*?<\/header>/i.test(content);
  const hasFooter = /<footer[\s\S]*?<\/footer>/i.test(content);
  const hasMobileDrawer = content.includes('id="mobile-drawer"');
  console.log(`${f}: header=${hasHeader}, footer=${hasFooter}, mobileDrawer=${hasMobileDrawer}`);
});
