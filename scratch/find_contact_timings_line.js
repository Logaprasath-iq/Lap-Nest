const fs = require('fs');

const contact = fs.readFileSync('contact.html', 'utf8');
const lines = contact.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Showroom & Lab Timings') || l.includes('Quick Emergency Assistance')) {
    console.log(`Around line ${i+1}`);
  }
});
