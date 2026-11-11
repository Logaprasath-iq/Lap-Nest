const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<button type="button" class="rtl-toggle-btn[\s\S]*?<\/button>/g;
  const matches = content.match(regex);
  if (matches) {
    console.log(`=== ${f} (${matches.length}) ===`);
    matches.forEach((m, i) => console.log(`[Button ${i + 1}]:\n${m}\n`));
  }
});
