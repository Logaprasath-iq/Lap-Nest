const http = require('http');

const urls = [
  'http://127.0.0.1:3000/about.html',
  'http://127.0.0.1:3000/pricing.html',
  'http://127.0.0.1:3000/repair-upgrade.html',
  'http://127.0.0.1:3000/assets/images/lab/lab-01-esd.jpg',
  'http://127.0.0.1:3000/assets/images/lab/lab-02-flir.jpg',
  'http://127.0.0.1:3000/assets/images/lab/lab-03-soldering.jpg',
  'http://127.0.0.1:3000/assets/images/lab/lab-04-bga.jpg',
  'http://127.0.0.1:3000/assets/images/lab/lab-05-oscilloscope.jpg',
  'http://127.0.0.1:3000/assets/images/lab/lab-06-ultrasonic.jpg'
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
