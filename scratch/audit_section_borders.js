const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const sections = content.match(/<section[^>]*>/gi) || [];
  console.log(`=== ${f} (${sections.length} sections) ===`);
  sections.forEach((s, idx) => {
    const hasBorder = s.includes('border-t') || s.includes('border-b') || s.includes('border-y');
    const idMatch = s.match(/id="([^"]+)"/i);
    const id = idMatch ? '#' + idMatch[1] : 'sec-' + idx;
    console.log(`  ${hasBorder ? 'YES' : 'NO '} [${id}] ${s.substring(0, 95)}`);
  });
});
