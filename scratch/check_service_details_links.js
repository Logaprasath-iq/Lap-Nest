const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('service-details.html')) {
    console.log(`=== ${f} ===`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('service-details.html')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
