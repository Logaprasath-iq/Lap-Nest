const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
  const closeDivs = (html.match(/<\/div>/gi) || []).length;
  const diff = openDivs - closeDivs;
  if (diff !== 0) {
    console.log(`❌ ${f.padEnd(22)}: Open divs = ${openDivs}, Close divs = ${closeDivs}, Diff = ${diff}`);
  } else {
    console.log(`✅ ${f.padEnd(22)}: Perfectly balanced (${openDivs} divs)`);
  }
});
