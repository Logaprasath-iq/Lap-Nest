const fs = require('fs');

const h2 = fs.readFileSync('home-2.html', 'utf8');
const lines = h2.split('\n');
lines.forEach((l, i) => {
  if (l.includes('newsletter') || l.includes('Upgrade Your Tech') || l.includes('Stay Ahead')) {
    console.log(`L${i+1}: ${l}`);
  }
});
