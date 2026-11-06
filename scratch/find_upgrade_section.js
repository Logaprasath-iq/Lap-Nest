const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('30-Minute In-Store RAM & SSD Upgrades') || content.includes('RAM & SSD Upgrades')) {
    console.log('Found in:', f);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('RAM & SSD Upgrades') || line.includes('Bit-for-Bit Disk Cloning')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
