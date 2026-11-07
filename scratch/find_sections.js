const fs = require('fs');
const html = fs.readFileSync('repair-upgrade.html', 'utf8');

const sections = html.match(/<section[\s\S]*?>/g);
console.log('Sections:', sections);

const h2s = html.match(/<h2[\s\S]*?<\/h2>/g);
console.log('H2s:', h2s);
