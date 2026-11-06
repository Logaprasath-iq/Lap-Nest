const http = require('http');

const urls = [
  'http://127.0.0.1:3000/index.html',
  'http://127.0.0.1:3000/products.html',
  'http://127.0.0.1:3000/about.html',
  'http://127.0.0.1:3000/repair-upgrade.html',
  'http://127.0.0.1:3000/service-details.html?service=battery',
  'http://127.0.0.1:3000/service-details.html?service=screen',
  'http://127.0.0.1:3000/assets/images/clients/client-1.jpg',
  'http://127.0.0.1:3000/assets/images/clients/client-2.jpg',
  'http://127.0.0.1:3000/assets/images/clients/client-3.jpg',
  'http://127.0.0.1:3000/assets/images/products/dell-inspiron.jpg',
  'http://127.0.0.1:3000/assets/images/products/hp-pavilion.jpg',
  'http://127.0.0.1:3000/assets/images/products/lenovo-thinkpad.jpg',
  'http://127.0.0.1:3000/assets/images/products/asus-rog.jpg',
  'http://127.0.0.1:3000/assets/images/products/acer-nitro.jpg',
  'http://127.0.0.1:3000/assets/images/products/apple-macbook.jpg',
  'http://127.0.0.1:3000/assets/images/products/macbook-air.jpg',
  'http://127.0.0.1:3000/assets/images/products/dell-latitude.jpg',
  'http://127.0.0.1:3000/assets/images/products/thinkpad-t480.jpg',
  'http://127.0.0.1:3000/assets/images/products/accessory-mouse.jpg',
  'http://127.0.0.1:3000/assets/images/products/accessory-keyboard.jpg',
  'http://127.0.0.1:3000/assets/images/products/accessory-stand.jpg',
  'http://127.0.0.1:3000/assets/images/general/cleanroom.jpg',
  'http://127.0.0.1:3000/assets/images/general/category-gaming.jpg',
  'http://127.0.0.1:3000/assets/images/general/category-accessories.jpg',
  'http://127.0.0.1:3000/assets/images/general/deals-gaming.jpg',
  'http://127.0.0.1:3000/assets/images/general/deals-rental.jpg'
];

async function checkAll() {
  for (const url of urls) {
    await new Promise((resolve) => {
      http.get(url, (res) => {
        console.log(`${res.statusCode === 200 ? '✅' : '❌'} ${url} -> Status ${res.statusCode}`);
        resolve();
      }).on('error', (e) => {
        console.log(`❌ ${url} -> Error: ${e.message}`);
        resolve();
      });
    });
  }
}

checkAll();
