const http = require('http');

http.get('http://127.0.0.1:3000/index.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('index.html status:', res.statusCode);
    // 1. Category cards footer
    const categoryBorder = data.includes('equal-card-footer mt-auto pt-4 border-t border-[#233D4C]');
    // 2. Service cards footer
    const serviceBorder = data.includes('equal-card-footer mt-auto pt-4 border-t border-[#233D4C] flex items-center justify-between');
    // 3. Laptop specs column dividers
    const laptopDividers = data.includes('pr-2 border-r border-[#233D4C]');
    // 4. Laptop card footer
    const laptopFooter = data.includes('equal-card-footer mt-auto pt-4 border-t border-[#233D4C] grid grid-cols-2 gap-3');

    console.log('Category cards have border-t footer:', categoryBorder);
    console.log('Service cards have border-t footer:', serviceBorder);
    console.log('Laptop specs have vertical column dividers:', laptopDividers);
    console.log('Laptop cards have border-t footer:', laptopFooter);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
