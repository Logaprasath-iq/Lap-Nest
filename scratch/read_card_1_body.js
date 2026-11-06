const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('<div class="equal-card-body p-6">');
console.log(html.substring(idx, idx + 1000));
