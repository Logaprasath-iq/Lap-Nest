const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  let inNav = false;
  lines.forEach((l, idx) => {
    if (l.includes('<header id="main-navbar"')) inNav = true;
    if (inNav && l.includes('</header>')) inNav = false;
    if (inNav && l.includes('sm:inline-flex')) {
      console.log(`${f}:${idx+1} -> ${l.trim()}`);
    }
  });
});
