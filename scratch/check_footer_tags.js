const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const footerMatch = content.match(/<footer[^>]*>/i);
  if (footerMatch) {
    console.log(`${f}: ${footerMatch[0]}`);
  }
});
