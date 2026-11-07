const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

console.log('Includes id="rental-plans":', html.includes('id="rental-plans"'));
console.log('Includes rental-plans:', html.includes('rental-plans'));

// Find all section ids in pricing.html
const ids = html.match(/id="[^"]+"/g);
console.log('All IDs in pricing.html:', ids);

// Find where rentals are mentioned in sections
const sections = html.match(/<section[\s\S]*?>/g);
console.log('Sections:', sections);

const h2s = html.match(/<h2[\s\S]*?<\/h2>/g);
console.log('H2s:', h2s);
