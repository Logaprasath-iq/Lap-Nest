const fs = require('fs');

['pricing.html', 'contact.html', 'repair-upgrade.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const match = content.match(/<div class=\"[^\"]*grid grid-cols-1 md:grid-cols-3[^\"]*\">[\s\S]*?<\/div>\s*<\/div>/);
  if (match) console.log(match[0].slice(0, 500));
});
