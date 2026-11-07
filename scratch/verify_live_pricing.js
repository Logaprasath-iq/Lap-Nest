const http = require('http');

http.get('http://127.0.0.1:3000/pricing.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('[pricing.html] HTTP Status:', res.statusCode);
    console.log('  1. Explore Rental Tariffs links to #rental:', data.includes('href="#rental"'));
    console.log('  2. Has centered Most Popular badge:', data.includes('<!-- Horizontally Centered Most Popular Tag -->'));
    console.log('  3. Rate Card Table has border-r:', data.includes('border-r border-[#233D4C]'));
    console.log('  4. Comparison Matrix has border-r:', data.includes('border-r border-[#233D4C]'));
    console.log('  5. Has v=3.4 cache buster:', data.includes('style.css?v=3.4'));
  });
}).on('error', err => console.error(err));
