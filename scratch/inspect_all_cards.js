const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find equal-card, tilt-card, product cards, or any cards with border-t
  const regex = /<article[\s\S]*?<\/article>|<div[^>]*class="[^"]*(?:equal-card|tilt-card|rounded-2xl|rounded-3xl|shadow-card)[^"]*"[\s\S]*?<\/div>/g;
  
  let match;
  let fileMatches = [];
  
  // Search for lines with border-t that follow text/p/div/ul
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('border-t') && (l.includes('border-[#233D4C]') || l.includes('border-slate') || l.includes('border-gray')) && !l.includes('<footer') && !l.includes('<section') && !l.includes('id="site-footer"')) {
      // Get previous 2 lines
      const prev = lines.slice(Math.max(0, i - 3), i).map(x => x.trim()).join(' | ');
      fileMatches.push({ lineNum: i + 1, borderLine: l.trim(), prev });
    }
  });

  if (fileMatches.length > 0) {
    console.log(`=== ${file} (${fileMatches.length} border-t lines) ===`);
    fileMatches.forEach(m => {
      console.log(`  Line ${m.lineNum}: [PREV]: ${m.prev}`);
      console.log(`    [BORDER]: ${m.borderLine}`);
    });
  }
}
