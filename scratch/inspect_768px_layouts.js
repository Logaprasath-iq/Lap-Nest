const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((l, idx) => {
    // Check if hero grid is lg:grid-cols-12 without md behavior
    if (l.includes('grid-cols-12') && !l.includes('md:grid-cols-')) {
      // It's 1 column on mobile and md, then 12 columns on lg. That stacks cleanly!
    }
    // Check if there are elements with w-[800px] or similar
    const fixedW = l.match(/w-\[([0-9]+)px\]/);
    if (fixedW && parseInt(fixedW[1]) > 700) {
      console.log(`Wide fixed width in ${f}:${idx+1} -> ${l.trim()}`);
    }
  });
});
console.log('Finished checking wide elements.');
