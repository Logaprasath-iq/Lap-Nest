const fs = require('fs');

const content = fs.readFileSync('assets/js/blog-details.js', 'utf8');

// Find all articles defined in articles object
const matches = content.match(/'[a-z0-9-]+':\s*\{/g);
console.log('Defined articles in blog-details.js:', matches);
