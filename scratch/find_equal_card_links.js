const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<div[^>]*class="[^"]*equal-card-footer[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const footerContent = m[1];
    const aMatches = footerContent.match(/<a[^>]*>[\s\S]*?<\/a>/g);
    if (aMatches) {
      aMatches.forEach(a => console.log(f + ': ' + a.trim().replace(/\n\s*/g, ' ')));
    }
  }
});
