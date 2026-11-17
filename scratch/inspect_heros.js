const fs = require('fs');

const files = ['index.html', 'about.html', 'products.html', 'pricing.html', 'repair-upgrade.html', 'contact.html', 'order.html', 'blog.html'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n==================== ${f} ====================`);
  
  // Search for hero CTA section
  const lines = content.split('\n');
  let inHero = false;
  for (let i = 0; i < Math.min(lines.length, 300); i++) {
    const line = lines[i];
    if (line.includes('id="hero"') || line.toLowerCase().includes('<!-- hero') || line.toLowerCase().includes('hero section')) {
      inHero = true;
    }
    if (inHero && (line.includes('href=') || line.includes('Diagnostic Inspection') || line.includes('Repair') || line.includes('button') || line.includes('btn-primary') || line.includes('bg-[#FD802E]'))) {
      console.log(`L${i+1}: ${line.trim()}`);
    }
    if (inHero && line.includes('</section>')) {
      break;
    }
  }
});
