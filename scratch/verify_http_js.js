const http = require('http');

http.get('http://127.0.0.1:3000/assets/js/products.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('products.js status:', res.statusCode);
    console.log('has vertical divider:', data.includes('w-px h-3.5 bg-[#233D4C] shrink-0'));
    console.log('has moved-down border-t:', data.includes('pt-2.5 border-t border-[#233D4C]'));
    console.log('has footer border-t:', data.includes('equal-card-footer mt-auto pt-4 border-t border-[#233D4C]'));
  });
});
