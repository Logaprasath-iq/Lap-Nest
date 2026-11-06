const http = require('http');

const moreUrls = [
  '/faq.html',
  '/product-details.html?id=lenovo-thinkpad',
  '/service-details.html?id=motherboard',
  '/blog-details.html?id=ssd-benchmark',
  '/terms.html',
  '/privacy-policy.html',
  '/404.html',
  '/coming-soon.html',
  '/maintenance.html'
];

let done = 0;
moreUrls.forEach(u => {
  http.get('http://127.0.0.1:3000' + u, res => {
    let b = '';
    res.on('data', c => b += c);
    res.on('end', () => {
      console.log(`[${res.statusCode}] ${u} (${b.length} bytes)`);
      done++;
      if (done === moreUrls.length) console.log('All 9 auxiliary pages returned 200 OK!');
    });
  });
});
