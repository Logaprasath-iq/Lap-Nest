const http = require('http');

http.get('http://127.0.0.1:3000/index.html', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('index.html Status:', res.statusCode);
    const hasH10RTL = html.includes('rtl-toggle-btn h-10');
    const hasH10Theme = html.includes('theme-toggle-btn w-10 h-10');
    const hasH10Order = html.includes('h-10 px-5 rounded-xl');
    console.log('RTL button has h-10:', hasH10RTL);
    console.log('Theme button has w-10 h-10:', hasH10Theme);
    console.log('Order CTA button has h-10:', hasH10Order);
  });
});
