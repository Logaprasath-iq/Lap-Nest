const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const results = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Look for border-t inside cards (equal-card, tilt-card, product-card, etc.)
    if (line.includes('border-t') && (line.includes('card') || line.includes('mt-auto') || line.includes('pt-4') || line.includes('pt-3'))) {
      results.push({
        file,
        lineNum: idx + 1,
        line: line.trim()
      });
    }
  });
}

console.log(JSON.stringify(results, null, 2));
