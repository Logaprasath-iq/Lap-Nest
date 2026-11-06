const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('More Than a Computer Store') || content.includes('Technical Sanctuary')) {
    console.log(`Found in: ${f}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('Technical Sanctuary') || line.includes('INTRODUCTION')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
