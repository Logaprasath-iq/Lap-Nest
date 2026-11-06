const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Check div open vs close tags
const openDivs = (indexHtml.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (indexHtml.match(/<\/div>/gi) || []).length;
console.log(`Open divs: ${openDivs}, Close divs: ${closeDivs}, Diff: ${openDivs - closeDivs}`);

// Check section open vs close tags
const openSec = (indexHtml.match(/<section(\s|>)/gi) || []).length;
const closeSec = (indexHtml.match(/<\/section>/gi) || []).length;
console.log(`Open sections: ${openSec}, Close sections: ${closeSec}, Diff: ${openSec - closeSec}`);
