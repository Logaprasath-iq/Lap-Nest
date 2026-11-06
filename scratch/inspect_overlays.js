const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Category cards
const catIdx = html.indexOf('Explore By Category');
console.log('--- CATEGORY CARDS OVERLAY ---');
console.log(html.slice(catIdx, catIdx + 2000).match(/<div class="[^"]*gradient[^"]*">/g));

// Repair cards
const repIdx = html.indexOf('Repair & Upgrade Services');
console.log('--- REPAIR CARDS OVERLAY ---');
console.log(html.slice(repIdx, repIdx + 2500).match(/<div class="[^"]*gradient[^"]*">/g));

// Diagnostic cards
const diagIdx = html.indexOf('diagnostic-card-phase');
console.log('--- DIAGNOSTIC CARDS OVERLAY ---');
console.log(html.slice(diagIdx, diagIdx + 2500).match(/<div class="[^"]*gradient[^"]*">/g));
