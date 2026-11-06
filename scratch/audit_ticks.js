const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const allTicks = (content.match(/✓/g) || []).length;
  const orangeSpans = (content.match(/<span[^>]*text-\[#FD802E\][^>]*>\s*✓\s*<\/span>/g) || []).length;
  const greenTicks = (content.match(/(text-green|text-emerald|#10b981|#22c55e)[^>]*>[^<]*✓/g) || []).length;
  
  if (allTicks > 0) {
    console.log(`${f}: Total ticks = ${allTicks}, Orange spans = ${orangeSpans}, Green/other ticks = ${greenTicks}`);
    if (allTicks !== orangeSpans) {
      console.log(`  WARNING: ${f} has ${allTicks - orangeSpans} non-standard ticks!`);
    }
  }
});
console.log('Tick audit complete.');
