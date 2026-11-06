const http = require('http');

['index.html', 'order.html', 'contact.html', 'repair-upgrade.html'].forEach(page => {
  http.get('http://127.0.0.1:3000/' + page, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`${page}: Status ${res.statusCode}, Size ${data.length} bytes, has forms.js: ${data.includes('forms.js')}`);
    });
  }).on('error', err => {
    console.error(`${page} Error:`, err.message);
  });
});
