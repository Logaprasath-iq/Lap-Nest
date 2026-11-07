const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('id="main-navbar"')) {
    const rtl = content.match(/class="[^"]*rtl-toggle-btn[^"]*"/);
    const theme = content.match(/class="[^"]*theme-toggle-btn[^"]*"/);
    const order = content.match(/<a href="order\.html"[^>]*class="[^"]*hidden sm:inline-flex[^"]*"[^>]*>/);
    console.log(`${f}:`);
    console.log(`  RTL has sm:inline-flex: ${rtl ? rtl[0].includes('sm:inline-flex') : 'N/A'}`);
    console.log(`  Theme has sm:inline-flex: ${theme ? theme[0].includes('sm:inline-flex') : 'N/A'}`);
    console.log(`  Order has sm:inline-flex: ${order ? 'YES' : 'NO'}`);
  }
});
