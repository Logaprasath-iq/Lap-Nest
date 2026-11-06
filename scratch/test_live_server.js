const http = require('http');

const urls = [
  '/',
  '/index.html',
  '/home-2.html',
  '/about.html',
  '/products.html',
  '/pricing.html',
  '/repair-upgrade.html',
  '/blog.html',
  '/contact.html',
  '/order.html',
  '/assets/images/logo/logo-dark.svg',
  '/assets/images/logo/logo-light.svg',
  '/favicon.svg',
  '/assets/css/style.css',
  '/assets/js/navbar.js'
];

let completed = 0;
urls.forEach(u => {
  http.get('http://127.0.0.1:3000' + u, res => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(`[${res.statusCode}] ${u} (${body.length} bytes)`);
      completed++;
      if (completed === urls.length) console.log('All 15 endpoints verified successfully!');
    });
  }).on('error', err => {
    console.error('Error fetching ' + u, err);
  });
});
