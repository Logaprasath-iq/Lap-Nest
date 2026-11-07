const http = require('http');

http.get('http://127.0.0.1:3000/products.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const hasBadge = data.includes('id="products-count-badge"');
    const hasLink = data.includes('href="#products-catalog"');
    const hasSectionId = data.includes('id="products-catalog"');
    console.log('Has products-count-badge:', hasBadge);
    console.log('Has link to #products-catalog:', hasLink);
    console.log('Has section id="products-catalog":', hasSectionId);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
