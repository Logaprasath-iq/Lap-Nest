const http = require('http');

http.get('http://127.0.0.1:3000/blog.html', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Featured guide link works: ${data.includes('href="blog-details.html?id=ssd-benchmark"')}`);
    console.log(`Contains 5 Min Read: ${data.includes('5 Min Read')}`);
    console.log(`Contains 7 Min Read: ${data.includes('7 Min Read')}`);
    console.log(`Contains blog-nvme.jpg: ${data.includes('assets/images/blog/blog-nvme.jpg')}`);
  });
}).on('error', err => {
  console.error('HTTP Error:', err.message);
});
