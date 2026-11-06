const http = require('http');

http.get('http://127.0.0.1:3000/assets/js/products.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const has25 = data.includes('252628');
    const has17 = data.includes('172731');
    const has23 = data.includes('233D4C');
    console.log('Has #252628 (old brown):', has25);
    console.log('Has #172731 (brand card):', has17);
    console.log('Has #233D4C (brand border):', has23);
  });
});
