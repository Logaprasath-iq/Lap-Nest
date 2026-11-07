const http = require('http');

['index.html', 'blog.html', 'blog-details.html'].forEach(page => {
  http.get(`http://127.0.0.1:3000/${page}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`[${page}] HTTP ${res.statusCode}, v=3.2 in HTML: ${data.includes('style.css?v=3.2')}, nav present: ${data.includes('<nav')}`);
    });
  }).on('error', err => console.error(err.message));
});

// Also test that style.css serves the new rules
http.get('http://127.0.0.1:3000/assets/css/style.css?v=3.2', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    console.log('[style.css] HTTP', res.statusCode, 'size:', css.length);
    console.log('[style.css] Has display:flex!important for nav:', css.includes('#main-navbar nav{display:flex!important}'));
    console.log('[style.css] .hidden has !important:', css.includes('.hidden{display:none!important}'));
  });
}).on('error', err => console.error(err.message));
