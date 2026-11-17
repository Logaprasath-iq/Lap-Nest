const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const versions = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/style\.css\?v=([^"]+)/);
  versions.push(`${f}: ${m ? m[1] : 'none'}`);
});
console.log(versions.join('\n'));
