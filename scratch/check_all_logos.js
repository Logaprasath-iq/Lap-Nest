const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const logoImgs = content.match(/<img[^>]*logo[^>]*>/gi) || [];
  console.log(`=== ${file} (${logoImgs.length} logos) ===`);
  logoImgs.forEach(tag => console.log('  ', tag.replace(/\s+/g, ' ')));
});
