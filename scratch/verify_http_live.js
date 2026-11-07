const http = require('http');

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

(async () => {
  const p = await checkUrl('http://127.0.0.1:3000/products.html');
  console.log('products.html status:', p.status);
  const idx = await checkUrl('http://127.0.0.1:3000/index.html');
  console.log('index.html status:', idx.status);
  console.log('index.html has divide-x:', idx.data.includes('divide-x divide-[#233D4C]'));
  console.log('index.html has border-t footer:', idx.data.includes('equal-card-footer mt-auto pt-4 border-t border-[#233D4C]'));
})();
