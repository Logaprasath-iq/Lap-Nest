const http = require('http');

http.get('http://127.0.0.1:3000/assets/images/general/category-accessories.jpg', res => {
  let size = 0;
  res.on('data', c => size += c.length);
  res.on('end', () => {
    console.log(`✅ category-accessories.jpg: Status ${res.statusCode}, Size ${size} bytes`);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
