const http = require('http');

http.get('http://127.0.0.1:3000/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode, 'CSS length:', css.length);
    console.log('Has #newsletter rule in light:', css.includes('#newsletter'));
    console.log('Has newsletter-section:', css.includes('newsletter-section'));
  });
});
