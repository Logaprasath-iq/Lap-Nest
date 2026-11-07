const http = require('http');

http.get('http://127.0.0.1:3000/blog.html', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Contains mb-5: ${data.includes('mb-5')}`);
    console.log(`Contains style.css?v=2.8: ${data.includes('style.css?v=2.8')}`);
  });
}).on('error', err => {
  console.error('Error fetching blog.html:', err.message);
});
