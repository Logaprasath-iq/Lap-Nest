const http = require('http');

['blog.html', 'coming-soon.html', 'about.html', 'products.html', 'pricing.html'].forEach(page => {
  http.get('http://127.0.0.1:3000/' + page, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`✅ ${page}: Status ${res.statusCode}, Size ${data.length} bytes`);
    });
  }).on('error', err => {
    console.error(`❌ ${page} Error:`, err.message);
  });
});
