const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const forms = content.match(/<form[\s\S]*?<\/form>/gi) || [];
  if (forms.length > 0) {
    console.log(f, forms.length + ' form(s)');
  }
});
