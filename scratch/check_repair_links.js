const fs = require('fs');
const content = fs.readFileSync('repair-upgrade.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('Service Details') || line.includes('service-details.html') || line.includes('Display & Screen Panel') || line.includes('Battery Health') || line.includes('Motherboard Chip')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
