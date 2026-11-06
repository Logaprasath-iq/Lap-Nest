const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('CHENNAI OUTPOST') || content.includes('support@lapnest.in')) {
    console.log(`Has footer contacts in: ${f}`);
  }
});
