const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('grid grid-cols-')) {
      const match = l.match(/grid grid-cols-[^"]+/);
      if (match) {
        console.log(`${f}:${idx+1} -> ${match[0]}`);
      }
    }
  });
});
