const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('equal-card')) {
    const lines = content.split('\n');
    const matches = [];
    lines.forEach((l, i) => {
      if (l.includes('equal-card') || l.includes('card-footer') || (l.includes('border-t') && l.includes('pt-'))) {
        matches.push(`L${i+1}: ${l.trim()}`);
      }
    });
    console.log(`\n=== ${file} (${matches.length} matches) ===`);
    matches.slice(0, 15).forEach(m => console.log('  ' + m));
    if (matches.length > 15) console.log(`  ... and ${matches.length - 15} more`);
  }
});
