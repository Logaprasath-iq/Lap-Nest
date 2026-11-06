const fs = require('fs');

console.log('--- contact.html lines 125-140 ---');
const contactLines = fs.readFileSync('contact.html', 'utf8').split('\n');
console.log(contactLines.slice(124, 140).map((l, i) => `${i + 125}: ${l}`).join('\n'));

console.log('\n--- order.html lines 125-140 ---');
const orderLines = fs.readFileSync('order.html', 'utf8').split('\n');
console.log(orderLines.slice(124, 140).map((l, i) => `${i + 125}: ${l}`).join('\n'));
