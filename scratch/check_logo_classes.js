const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.slice(0, 5).forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const headerLogoMatch = html.match(/<header[\s\S]*?<img[^>]*class=\"([^\"]*)\"[^>]*>/);
  if (headerLogoMatch) console.log('Header logo class:', headerLogoMatch[1]);
  const footerLogoMatch = html.match(/<footer[\s\S]*?<img[^>]*class=\"([^\"]*)\"[^>]*>/);
  if (footerLogoMatch) console.log('Footer logo class:', footerLogoMatch[1]);
});
