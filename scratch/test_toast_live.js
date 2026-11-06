const http = require('http');

http.get('http://127.0.0.1:3000/assets/js/forms.js', (res) => {
  let js = '';
  res.on('data', c => js += c);
  res.on('end', () => {
    console.log('forms.js Status:', res.statusCode);
    console.log('Has toast-item:', js.includes('toast-item'));
    console.log('Has toast-success:', js.includes('toast-success'));
  });
});

http.get('http://127.0.0.1:3000/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', c => css += c);
  res.on('end', () => {
    console.log('style.css Status:', res.statusCode);
    console.log('Has toast-item in style.css:', css.includes('toast-item'));
    console.log('Has light mode toast rule:', css.includes('.toast-item.toast-success'));
  });
});
