const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Gaming Laptop Flash Sale') || content.includes('Refurbished ThinkPads from')) {
    console.log(`Found in: ${f}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('Gaming Laptop Flash Sale') || line.includes('Student Extra 15%') || line.includes('Refurbished ThinkPads from') || line.includes('Corporate Rentals from')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
