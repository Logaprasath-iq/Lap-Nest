const fs = require('fs');

['assets/js/navbar.js', 'assets/js/main.js'].forEach(f => {
  const js = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  js.split('\n').forEach((l, i) => {
    if (l.includes('logo-') || l.includes('theme') || l.includes('light')) {
      if (l.includes('src') || l.includes('logo')) console.log(`${i}: ${l.trim()}`);
    }
  });
});
