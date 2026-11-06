const fs = require('fs');

const pages = [
  'about.html', 'products.html', 'product-details.html', 'pricing.html',
  'repair-upgrade.html', 'service-details.html', 'order.html',
  'blog.html', 'blog-details.html', 'contact.html', 'faq.html',
  'privacy-policy.html', 'terms.html', 'home-2.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const heroMatch = content.match(/<section[^>]*class=\"[^\"]*hero[^\"]*\"[\s\S]*?<\/section>/i) 
                 || content.match(/<section[\s\S]*?<\/section>/i);
  const hasImg = heroMatch ? heroMatch[0].includes('<img') || heroMatch[0].includes('url(') : false;
  console.log(`${p}: H1="${h1 ? h1[1].replace(/<[^>]+>/g, '').trim().slice(0, 40) : 'none'}", heroHasImg=${hasImg}`);
});
