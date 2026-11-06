const http = require('http');
http.get('http://127.0.0.1:3000/assets/js/forms.js', res => {
  console.log('Status:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => console.log('Has setupInputsValidation:', d.includes('setupInputsValidation'), 'Length:', d.length));
});
