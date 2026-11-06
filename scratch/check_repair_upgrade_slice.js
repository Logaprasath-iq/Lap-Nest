const fs = require('fs');
const content = fs.readFileSync('repair-upgrade.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(425, 455).join('\n'));
