const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const greenHexes = ['#051F20', '#163832', '#235347', '#8EB69B', '#DAF1DE', '#d29f22'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const counts = {};
  greenHexes.forEach(hex => {
    const regex = new RegExp(hex, 'gi');
    const matches = content.match(regex);
    if (matches) counts[hex] = matches.length;
  });
  console.log(`${file}: ${Object.keys(counts).length ? JSON.stringify(counts) : 'Clean of green/old-gold'}`);
});
