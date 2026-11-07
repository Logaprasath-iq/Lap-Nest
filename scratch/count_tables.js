const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const tableMatches = html.match(/<table[\s\S]*?<\/table>/g);
console.log('Total tables in pricing.html:', tableMatches ? tableMatches.length : 0);
