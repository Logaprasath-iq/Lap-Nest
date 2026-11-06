const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('rtl-toggle-btn') || content.includes('theme-toggle-btn')) {
    console.log(`Has navbar buttons in: ${f}`);
  }
});
