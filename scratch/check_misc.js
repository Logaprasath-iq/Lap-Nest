const fs = require('fs');

['404.html', 'coming-soon.html', 'maintenance.html', 'privacy-policy.html', 'terms.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`${f}: header=${content.includes('<header')}, footer=${content.includes('<footer')}`);
});
