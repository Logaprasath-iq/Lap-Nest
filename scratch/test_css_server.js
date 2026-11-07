const http = require('http');

http.get('http://127.0.0.1:3000/assets/css/style.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('style.css status:', res.statusCode);
    const hasRule = data.includes('@media (max-width:1023px){#main-navbar .rtl-toggle-btn,#main-navbar .theme-toggle-btn,#main-navbar a[href*="order.html"]{display:none!important}}');
    console.log('Served style.css has display:none!important on max-width:1023px:', hasRule);
  });
}).on('error', e => console.error(e.message));
