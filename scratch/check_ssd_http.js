const http = require('http');

http.get('http://127.0.0.1:3000/assets/images/services/ssd-upgrade.jpg', res => {
  console.log('Status:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  let totalBytes = 0;
  res.on('data', c => totalBytes += c.length);
  res.on('end', () => console.log('Total bytes received:', totalBytes));
}).on('error', err => {
  console.error('Error:', err.message);
});
