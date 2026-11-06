const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('span class="text-2xl font-black text-white">₹58,990</span>');
console.log(html.substring(idx, idx + 800));
