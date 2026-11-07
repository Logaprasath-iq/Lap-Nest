const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log(`Checking ${htmlFiles.length} HTML files for card separation lines...`);

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('border-t') && (line.includes('border-[#233D4C]') || line.includes('border-[#') || line.includes('card-footer') || line.includes('equal-card-footer'))) {
      matches.push({ lineNum: i + 1, text: line.trim() });
    }
  }

  if (matches.length > 0) {
    console.log(`\n--- ${file} (${matches.length} matches) ---`);
    matches.forEach(m => console.log(`  L${m.lineNum}: ${m.text.substring(0, 100)}`));
  }
}
