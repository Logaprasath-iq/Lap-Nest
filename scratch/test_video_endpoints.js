const http = require('http');

const testUrls = [
  '/',
  '/assets/videos/Gaming_laptop_floating_with_lights_d473e30e.mp4',
  '/assets/videos/hero-laptop.mp4',
  '/assets/images/hero/hero-laptop-floating.png'
];

testUrls.forEach(url => {
  http.get('http://127.0.0.1:3000' + url, res => {
    console.log(`[${res.statusCode}] ${url} (${res.headers['content-type']}, ${res.headers['content-length']} bytes)`);
  });
});
