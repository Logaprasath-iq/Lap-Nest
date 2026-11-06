const fs = require('fs');
const html = fs.readFileSync('repair-upgrade.html', 'utf8');

const idx = html.indexOf('<!-- Service 1: Screen Replacement');
console.log(html.substring(idx, idx + 1500));
