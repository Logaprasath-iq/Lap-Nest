const https = require('https');
const fs = require('fs');

const icons = [
  { name: 'apple', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg' },
  { name: 'dell', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dell.svg' },
  { name: 'lenovo', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lenovo.svg' },
  { name: 'hp', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hp.svg' },
  { name: 'asus', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/asus.svg' },
  { name: 'acer', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/acer.svg' },
];

icons.forEach(icon => {
  https.get(icon.url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`${icon.name}: HTTP ${res.statusCode} (length: ${data.length})`);
      if (res.statusCode === 200) {
        console.log(`${icon.name} snippet: ${data.slice(0, 120)}...`);
      }
    });
  }).on('error', err => {
    console.error(`${icon.name} error:`, err.message);
  });
});
