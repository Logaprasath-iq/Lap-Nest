const http = require('http');

http.get('http://127.0.0.1:3000/assets/images/general/cleanroom.jpg', res => {
  let size = 0;
  res.on('data', c => size += c.length);
  res.on('end', () => {
    console.log(`✅ cleanroom.jpg: Status ${res.statusCode}, Content-Type: ${res.headers['content-type']}, Size: ${size} bytes`);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
