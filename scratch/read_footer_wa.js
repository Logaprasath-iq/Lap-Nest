const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
const startIdx = lines.findIndex(l => l.includes('WhatsApp:'));
console.log(lines.slice(startIdx - 5, startIdx + 3).join('\n'));
