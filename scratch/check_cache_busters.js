const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/style\.css\?v=([\d\.]+)/);
  if (m) console.log(`${f}: v=${m[1]}`);
});
