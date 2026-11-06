const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Check for checkmark paths: d="M5 13l4 4L19 7" or similar
  const matches = content.match(/<svg[^>]*>[\s\S]*?(M5 13l4 4L19 7|M4.5 12.75l6 6 9-13.5|M9 12.75L11.25 15 15 9.75)[\s\S]*?<\/svg>/gi) || [];
  matches.forEach(svg => {
    if (svg.includes('text-green') || svg.includes('text-emerald') || svg.includes('stroke-green') || svg.includes('#10b981') || svg.includes('#22c55e')) {
      console.log(`${f}: has green SVG check:`, svg.substring(0, 100));
    }
  });
});
console.log('SVG check audit complete.');
