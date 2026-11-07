const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.js'));
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('#rental')) {
    console.log(`Found #rental in ${f}`);
  }
  if (c.includes('#rental-plans')) {
    console.log(`Found #rental-plans in ${f}`);
  }
});
