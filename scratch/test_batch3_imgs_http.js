const http = require('http');

const images = [
  'assets/images/products/macbook-air.jpg',
  'assets/images/products/dell-latitude.jpg',
  'assets/images/products/thinkpad-t480.jpg',
  'assets/images/general/deals-refurbished.jpg'
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
