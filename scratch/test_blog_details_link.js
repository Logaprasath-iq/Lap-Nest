const http = require('http');

http.get('http://127.0.0.1:3000/blog-details.html?id=ssd-benchmark', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Title exists: ${data.includes('NVMe Gen4')}`);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
