const http = require('http');

http.get('http://127.0.0.1:3000/home-2.html', res => {
  console.log('home-2.html status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Check Home 2 active dot in static HTML
    const hasHome2Active = data.includes('<a href="home-2.html" class="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg text-white hover:bg-[#233D4C] hover:text-[#FD802E] transition-colors">\n                <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>');
    console.log('Home 2 has orange dot in home-2.html:', hasHome2Active);
  });
});

http.get('http://127.0.0.1:3000/assets/css/style.css', resCss => {
  console.log('style.css status:', resCss.statusCode);
  let dataCss = '';
  resCss.on('data', chunk => dataCss += chunk);
  resCss.on('end', () => {
    // Check if display:none!important is compiled for the gradient overlays in light mode
    console.log('Has display:none for light gradients:', dataCss.includes('display:none!important') && dataCss.includes('from-\\[\\#172731\\]'));
  });
});
