const fs = require('fs');

['order.html', 'product-details.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if ((l.includes('text-green') || l.includes('text-emerald')) && (l.includes('check') || l.includes('svg') || l.includes('✓'))) {
      console.log(`${f}:${i+1}: ${l.trim()}`);
    }
  });
});
