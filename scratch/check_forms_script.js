const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasFormsJs = content.includes('forms.js');
  console.log(`${f}: ${hasFormsJs ? 'HAS forms.js' : 'NO forms.js'}`);
});
