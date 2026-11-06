const http = require('http');

const images = [
  'assets/images/products/accessory-mouse.jpg',
  'assets/images/products/accessory-keyboard.jpg',
  'assets/images/products/accessory-stand.jpg'
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
