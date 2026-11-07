const http = require('http');

http.get('http://127.0.0.1:3000/blog.html', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Contains knowledgebase-module: ${data.includes('knowledgebase-module')}`);
    console.log(`Contains glossary-module: ${data.includes('glossary-module')}`);
    console.log(`Contains divide-x: ${data.includes('divide-x')}`);
    console.log(`Contains style.css?v=2.9: ${data.includes('style.css?v=2.9')}`);
  });
}).on('error', err => {
  console.error('HTTP Error:', err.message);
});
