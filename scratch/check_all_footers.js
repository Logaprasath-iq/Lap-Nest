const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const footerMatch = html.match(/<footer[^>]*>/);
  if (footerMatch) {
    console.log(`${f.padEnd(20)}: ${footerMatch[0]}`);
  } else {
    console.log(`${f.padEnd(20)}: NO FOOTER`);
  }
});
