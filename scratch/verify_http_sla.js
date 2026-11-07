const http = require('http');

http.get('http://127.0.0.1:3000/index.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('index.html status:', res.statusCode);
    const hasMinHHeading = data.includes('min-h-[3rem] flex items-center');
    const hasMinHDesc = data.includes('min-h-[2.5rem] flex items-center');
    const hasMinHPoints = data.includes('min-h-[2.75rem] flex items-center gap-2.5 leading-snug');
    const hasFooterBorder = data.includes('mt-auto pt-6 border-t border-[#233D4C] text-left');
    console.log('Has min-h-[3rem] heading:', hasMinHHeading);
    console.log('Has min-h-[2.5rem] desc:', hasMinHDesc);
    console.log('Has min-h-[2.75rem] points:', hasMinHPoints);
    console.log('Has border-t footer:', hasFooterBorder);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
