const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/<!--\s*ELEGANT SECTION SEPARATION DIVIDER\s*-->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g)];
  if (matches.length > 0) {
    console.log(`\n=== ${f} (${matches.length} dividers) ===`);
    matches.forEach(m => {
      const textMatch = m[0].match(/<span>(.*?)<\/span>/);
      const text = textMatch ? textMatch[1] : 'unknown';
      console.log(`Badge text: "${text}"`);
    });
  }
});
