const fs = require('fs');
['blog.html', 'coming-soon.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const forms = content.match(/<form[\s\S]*?<\/form>/gi) || [];
  console.log(`=== ${f} ===`);
  forms.forEach((form, i) => console.log(`Form ${i+1}:\n`, form));
});
