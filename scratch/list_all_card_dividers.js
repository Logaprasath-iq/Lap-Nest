const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const cardMatches = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Check if line has border-t AND is part of a card or preceding an element with border-t
    if (line.includes('border-t') && (
      line.includes('card-footer') ||
      line.includes('equal-card') ||
      line.includes('pt-') ||
      line.includes('mt-')
    )) {
      // Exclude main layout items
      if (
        !line.includes('site-footer') &&
        !line.includes('<footer') &&
        !line.includes('<section') &&
        !line.includes('<header') &&
        !line.includes('mobile-menu') &&
        !line.includes('space-y-3') && // mobile nav divider
        !line.includes('my-6"></div>') // footer copyright divider
      ) {
        // Grab preceding 3 lines to see what is above this border
        const prevLines = lines.slice(Math.max(0, idx - 3), idx).map(l => l.trim()).join(' ');
        cardMatches.push({
          file,
          lineNum: idx + 1,
          lineText: line.trim(),
          prev: prevLines
        });
      }
    }
  });
});

console.log(`Found ${cardMatches.length} candidate card divider lines:\n`);
cardMatches.forEach(m => {
  console.log(`[${m.file} L${m.lineNum}]`);
  console.log(`  Border element: ${m.lineText}`);
  console.log(`  Preceding text/element: ${m.prev.substring(0, 150)}\n`);
});
