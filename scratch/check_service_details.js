const fs = require('fs');
const html = fs.readFileSync('service-details.html', 'utf8');

const match = html.match(/Common Failure Symptoms[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log('Match in service-details.html:', match ? match[0].slice(0, 500) : 'none');
