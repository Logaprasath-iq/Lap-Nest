const fs = require('fs');

['order.html', 'product-details.html', 'service-details.html', 'faq.html', 'home-2.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`${f}: H1="${h1 ? h1[1].replace(/<[^>]+>/g, '').trim().slice(0, 50) : 'none'}"`);
});
