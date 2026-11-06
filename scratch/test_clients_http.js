const http = require('http');

const images = [
  'assets/images/clients/client-1.jpg',
  'assets/images/clients/client-2.jpg',
  'assets/images/clients/client-3.jpg'
];

images.forEach(img => {
  http.get('http://127.0.0.1:3000/' + img, res => {
    let size = 0;
    res.on('data', c => size += c.length);
    res.on('end', () => {
      console.log(`✅ ${img}: Status ${res.statusCode}, Size ${size} bytes`);
    });
  }).on('error', err => {
    console.error(`❌ ${img} Error:`, err.message);
  });
});
