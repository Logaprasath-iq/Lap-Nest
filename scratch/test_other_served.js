const http = require('http');

['about.html', 'products.html', 'repair-upgrade.html', 'order.html', 'contact.html', 'home-2.html'].forEach(page => {
  http.get(`http://127.0.0.1:3000/${page}`, res => {
    let len = 0;
    res.on('data', chunk => len += chunk.length);
    res.on('end', () => console.log(`${page}: Status ${res.statusCode}, size ${len} bytes`));
  });
});
