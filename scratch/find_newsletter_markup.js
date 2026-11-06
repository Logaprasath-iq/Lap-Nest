const fs = require('fs');

const idx = fs.readFileSync('index.html', 'utf8');
const lines = idx.split('\n');
lines.forEach((l, i) => {
  if (l.includes('STAY AHEAD') || l.includes('newsletter') || l.includes('Ready to Upgrade')) {
    console.log(`L${i+1}: ${l}`);
  }
});
