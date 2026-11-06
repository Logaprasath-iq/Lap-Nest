const fs = require('fs');

const pages = ['repair-upgrade.html', 'pricing.html', 'blog.html', 'about.html', 'index.html'];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n=== ${p} <h2> tags ===`);
  const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    // find surrounding div
    const start = Math.max(0, m.index - 300);
    const snippet = html.substring(start, m.index);
    const isCentered = snippet.includes('text-center') || snippet.includes('mx-auto');
    console.log(`- "${m[1].trim().replace(/\s+/g, ' ')}" -> Centered: ${isCentered}`);
  }
});
