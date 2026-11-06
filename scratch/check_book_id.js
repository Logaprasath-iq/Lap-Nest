const fs = require('fs');
const content = fs.readFileSync('repair-upgrade.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('Booking Form') || line.includes('Schedule Your Laptop Repair') || line.includes('id="book"')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
