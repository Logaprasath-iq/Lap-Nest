const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldPattern = /<!-- Column 4: CHENNAI OUTPOST[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('CHENNAI OUTPOST')) {
    const match = content.match(/<!-- Column 4: CHENNAI OUTPOST[\s\S]*?<\/div>\s*<\/div>/);
    console.log(`${f}: matched length:`, match ? match[0].length : 'NO MATCH');
  }
});
