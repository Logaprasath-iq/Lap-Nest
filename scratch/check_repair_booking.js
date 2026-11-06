const fs = require('fs');

const repair = fs.readFileSync('repair-upgrade.html', 'utf8');
const lines = repair.split('\n');
lines.forEach((l, i) => {
  if (l.includes('repair-booking-form') || l.includes('Book Hardware Service') || l.includes('Book Cleanroom')) {
    console.log(`L${i+1}: ${l}`);
  }
});
