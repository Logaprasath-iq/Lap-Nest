const http = require('http');

http.get('http://127.0.0.1:3000/products.html', (res) => {
  console.log('products.html HTTP Status:', res.statusCode);
});
