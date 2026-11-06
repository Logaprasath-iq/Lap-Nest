const fs = require('fs');

const pages = ['about.html', 'pricing.html', 'blog.html', 'repair-upgrade.html', 'products.html', 'contact.html', 'order.html'];

pages.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('==================== ' + f + ' ====================');
  const mainIdx = content.indexOf('<main');
  if (mainIdx === -1) {
    console.log('No <main> tag found!');
    return;
  }
  const mainSlice = content.substring(mainIdx, mainIdx + 1600);
  console.log(mainSlice.substring(0, 1000));
  console.log('\n----------------------------------------\n');
});
