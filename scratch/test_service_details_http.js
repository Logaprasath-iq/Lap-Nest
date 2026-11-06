const http = require('http');

['service-details.html?service=screen',
 'service-details.html?service=battery',
 'service-details.html?service=motherboard',
 'service-details.html?service=ssd',
 'assets/js/services.js'
].forEach(url => {
  http.get('http://127.0.0.1:3000/' + url, res => {
    let size = 0;
    res.on('data', c => size += c.length);
    res.on('end', () => {
      console.log(`✅ ${url}: Status ${res.statusCode}, Size ${size} bytes`);
    });
  }).on('error', err => {
    console.error(`❌ ${url} Error:`, err.message);
  });
});
