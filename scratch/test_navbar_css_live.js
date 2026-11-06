const http = require('http');

http.get('http://127.0.0.1:3000/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Has 40px rule for navbar buttons:', css.includes('40px'));
    console.log('Has rtl-toggle-btn in style.css:', css.includes('rtl-toggle-btn'));
  });
});
