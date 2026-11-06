const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const match = html.match(/id="diagnostic-card-phase-1-2"[\s\S]*?id="diagnostic-card-phase-3-4"/);
if (match) {
  console.log('SUCCESS: Diagnostic Card 1 found:');
  console.log(match[0].slice(0, 1200));
} else {
  console.log('FAILED to find Card 1');
}
