const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== AUDITING 768px NAVBAR & RESPONSIVE LAYOUTS ===\n');

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');

  // Check navbar right controls
  let hasNavbar = content.includes('id="main-navbar"');
  if (hasNavbar) {
    let rtlMatch = content.match(/class="[^"]*rtl-toggle-btn[^"]*"/);
    let themeMatch = content.match(/class="[^"]*theme-toggle-btn[^"]*"/);
    let orderMatch = content.match(/<a href="order\.html"[^>]*class="[^"]*"[^>]*>/);
    
    // Check if sm:inline-flex is present
    let hasSm = (rtlMatch && rtlMatch[0].includes('sm:inline-flex')) ||
                (themeMatch && themeMatch[0].includes('sm:inline-flex')) ||
                (orderMatch && orderMatch[0].includes('sm:inline-flex'));
    if (hasSm) {
      console.log(`[Navbar 768px issue] in ${f}: Controls currently show at 768px (sm:inline-flex)`);
    }
  }

  // Check for any potential overflow-x issues at 768px
  lines.forEach((l, idx) => {
    // Check if table without overflow wrapper
    if (l.includes('<table') && !content.slice(Math.max(0, content.indexOf(l) - 300), content.indexOf(l)).includes('overflow-x-auto')) {
      console.log(`[Potential Table Overflow] ${f}:${idx+1}`);
    }
  });
});
