const fs = require('fs');
const html = fs.readFileSync('repair-upgrade.html', 'utf8');
console.log('Includes id="services-list":', html.includes('id="services-list"'));
console.log('Includes services-list:', html.includes('services-list'));

// Find all section ids in repair-upgrade.html
const ids = html.match(/id="[^"]+"/g);
console.log('All IDs:', ids);
