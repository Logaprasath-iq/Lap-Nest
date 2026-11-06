const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Showroom & Lab Timings')) {
    console.log('Found Showroom & Lab Timings in:', f);
  }
});
