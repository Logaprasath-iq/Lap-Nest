const http = require('http');

function check(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (e) => resolve({ status: 'ERR', error: e.message }));
  });
}

(async () => {
  const c = await check('http://127.0.0.1:3000/contact.html');
  const i = await check('http://127.0.0.1:3000/index.html');
  
  console.log('contact.html status:', c.status);
  console.log('contact.html has lg:max-w-[170px]:', c.data.includes('lg:max-w-[170px]'));
  console.log('contact.html has text-xs xl:text-sm:', c.data.includes('text-xs xl:text-sm'));
  console.log('contact.html has v=4.4:', c.data.includes('style.css?v=4.4'));
  
  console.log('index.html status:', i.status);
  console.log('index.html has lg:max-w-[170px]:', i.data.includes('lg:max-w-[170px]'));
  console.log('index.html has text-xs xl:text-sm:', i.data.includes('text-xs xl:text-sm'));
  console.log('index.html has v=4.4:', i.data.includes('style.css?v=4.4'));
})();
