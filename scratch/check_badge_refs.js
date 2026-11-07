const fs = require('fs');
const files = fs.readdirSync('assets/js').filter(f => f.endsWith('.js'));
files.forEach(f => {
  const c = fs.readFileSync('assets/js/' + f, 'utf8');
  if (c.includes('products-count-badge')) {
    console.log(`Found in assets/js/${f}`);
  }
});
