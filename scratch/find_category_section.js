const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Explore By Category') || content.includes('Find precision-engineered machines')) {
    console.log(`Found in: ${f}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('Explore By Category') || line.includes('Gaming Laptops') || line.includes('Business Laptops')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
