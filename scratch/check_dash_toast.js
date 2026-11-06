const fs = require('fs');

const djs = fs.readFileSync('assets/js/dashboard.js', 'utf8');
const lines = djs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('showToast') || l.includes('toast')) {
    console.log(`L${i+1}: ${l}`);
  }
});
