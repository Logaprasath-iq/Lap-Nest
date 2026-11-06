const fs = require('fs');

const content = fs.readFileSync('404.html', 'utf8');
const idx = content.indexOf('<!-- WhatsApp (Official Green) -->');
console.log(content.slice(idx, idx + 800));
