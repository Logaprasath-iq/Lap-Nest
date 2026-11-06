const http = require('http');

http.get('http://127.0.0.1:3000/index.html', res => {
  console.log('index.html status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const hasOrangeWA = data.includes('text-[#FD802E]');
    const hasProperPath = data.includes('M.057 24l1.687-6.163');
    const hasOrangeHover = data.includes('hover:text-[#FD802E]');
    console.log('Has Orange WA:', hasOrangeWA, 'Has Proper Path:', hasProperPath, 'Has Orange Hover:', hasOrangeHover);
  });
});
