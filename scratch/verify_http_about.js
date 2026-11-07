const http = require('http');

http.get('http://127.0.0.1:3000/about.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('about.html status:', res.statusCode);
    console.log('has updated Technical Rigor:', data.includes('Every machine that leaves our facility undergoes rigorous 40-point burn-in stress testing and chip-level thermal benchmarks.'));
    console.log('has updated Zero E-Waste:', data.includes('We responsibly recycle dead silicon, salvage functional micro-ICs, and grant renewed second lives to corporate off-lease machines.'));
    console.log('has min-h-[4.75rem]:', data.includes('min-h-[4.75rem]'));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
