const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const sample = fs.readFileSync('index.html', 'utf8').match(/<!-- Column 4: CHENNAI OUTPOST[\s\S]*?<\/div>\s*<\/div>/)[0];

let matched = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes(sample)) matched++;
  else console.log('Mismatch in', f);
});
console.log('Matched in:', matched, '/', files.length);
