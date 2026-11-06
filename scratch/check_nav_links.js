const fs = require('fs');

['index.html', 'about.html', 'products.html', 'contact.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const nav = content.match(/<nav class="[^"]*">([\s\S]*?)<\/nav>/);
  console.log('=== ' + f + ' ===');
  if (nav) {
    const links = nav[1].match(/<a[^>]*>|<button[^>]*>/g);
    console.log(links);
  }
});
