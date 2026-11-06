const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('rtl-toggle-btn')) {
    console.log(`Has rtl-toggle-btn: ${f}`);
  } else {
    console.log(`NO rtl-toggle-btn: ${f}`);
  }
});
