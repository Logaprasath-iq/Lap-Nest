const fs = require('fs');
const glob = ['about.html', 'blog.html', 'contact.html', 'order.html', 'pricing.html', 'products.html', 'repair-upgrade.html', 'index.html', 'index-2.html'];

glob.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('●') && (l.includes('MISSION') || l.includes('text-[11px]') || l.includes('text-[10px]') || l.includes('HERITAGE') || l.includes('rounded-full border'))) {
      console.log(`${f}:${idx+1} -> ${l.trim()}`);
    }
  });
});
