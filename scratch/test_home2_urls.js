const http = require('http');

const urls = [
  'http://127.0.0.1:3000/index.html',
  'http://127.0.0.1:3000/home-2.html',
  'http://127.0.0.1:3000/assets/images/brands/apple.svg',
  'http://127.0.0.1:3000/assets/images/brands/dell.svg',
  'http://127.0.0.1:3000/assets/images/brands/lenovo.svg',
  'http://127.0.0.1:3000/assets/images/brands/hp.svg',
  'http://127.0.0.1:3000/assets/images/brands/asus.svg',
  'http://127.0.0.1:3000/assets/images/brands/acer.svg'
];

let pending = urls.length;

urls.forEach(url => {
  http.get(url, res => {
    console.log(`${url} -> HTTP ${res.statusCode} (${res.headers['content-type']})`);
    res.resume();
    if (--pending === 0) console.log('All URLs verified!');
  }).on('error', err => {
    console.error(`Error fetching ${url}:`, err.message);
    if (--pending === 0) console.log('Done with errors.');
  });
});
