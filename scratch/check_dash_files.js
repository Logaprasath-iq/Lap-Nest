const fs = require('fs');
const path = require('path');

const dashDir = 'dashboard';
if (fs.existsSync(dashDir)) {
  const files = fs.readdirSync(dashDir).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const full = path.join(dashDir, f);
    const content = fs.readFileSync(full, 'utf8');
    const has25 = content.includes('252628');
    const has35 = content.includes('353639');
    console.log(`${f}: has #252628? ${has25}, has #353639? ${has35}`);
  });
}
