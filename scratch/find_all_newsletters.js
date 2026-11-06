const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<section[^>]*id=["'][^"']*newsletter[^"']*["'][^>]*>/gi);
  if (matches) {
    console.log(`${f}:`, matches);
  }
  // also check for newsletter class or form
  if (content.includes('Ready to Upgrade') || content.includes('Stay Ahead of the Curve')) {
    console.log(`  -> has Ready to Upgrade in ${f}`);
  }
});
