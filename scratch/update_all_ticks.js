const fs = require('fs');

const files = ['pricing.html', 'products.html', 'index.html', 'home-2.html', 'repair-upgrade.html', 'about.html', 'blog.html'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let html = fs.readFileSync(f, 'utf8');
  let original = html;

  // Replace occurrences like:
  // <li class="flex items-center gap-2">✓ text</li>
  // <li>✓ text</li>
  // <li class="...">✓ text</li>
  html = html.replace(/<li([^>]*)>\s*✓\s*/g, '<li$1><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> ');

  // Also replace any isolated ✓ not inside a text-[#FD802E] span
  // Look for any remaining raw ✓
  const lines = html.split('\n');
  const newLines = lines.map(line => {
    if (line.includes('✓') && !line.includes('text-[#FD802E]')) {
      return line.replace(/✓/g, '<span class="text-[#FD802E] font-bold">✓</span>');
    }
    return line;
  });
  html = newLines.join('\n');

  if (html !== original) {
    fs.writeFileSync(f, html);
    console.log(`Updated orange ticks in ${f}`);
  }
});
