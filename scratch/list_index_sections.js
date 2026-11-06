const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const sections = [];
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section')) {
    sections.push({ line: i + 1, text: l.trim() });
  }
});
console.log('Sections in index.html:');
sections.forEach(s => console.log(`Line ${s.line}: ${s.text}`));
