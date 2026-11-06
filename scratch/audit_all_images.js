const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const allImages = {};
files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  // Match <img src="..."
  const imgMatches = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
  imgMatches.forEach(tag => {
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    if (srcMatch) {
      const src = srcMatch[1];
      // Skip logo/svg/icons/flags
      if (src.includes('logo') || src.endsWith('.svg') || src.includes('favicon')) return;
      if (!allImages[src]) {
        allImages[src] = { exists: fs.existsSync(src), usedIn: [] };
      }
      allImages[src].usedIn.push({ file: f, alt: altMatch ? altMatch[1] : '' });
    }
  });
});

console.log('=== Image Audit across all HTML pages ===');
for (const [src, data] of Object.entries(allImages)) {
  console.log(`${src} (exists: ${data.exists}) used ${data.usedIn.length} times:`);
  data.usedIn.forEach(u => console.log(`   - in ${u.file}: [alt: "${u.alt}"]`));
}
