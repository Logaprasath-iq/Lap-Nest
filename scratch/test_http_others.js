const http = require('http');

['repair-upgrade.html', 'home-2.html', 'blog-details.html'].forEach(page => {
  http.get(`http://127.0.0.1:3000/${page}`, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`[${page}] Status: ${res.statusCode}, v=2.8: ${data.includes('style.css?v=2.8')}`);
    });
  }).on('error', err => {
    console.error(`Error fetching ${page}:`, err.message);
  });
});
