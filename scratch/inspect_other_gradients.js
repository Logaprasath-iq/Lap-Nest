const fs = require('fs');

const files = ['service-details.html', 'faq.html', 'blog-details.html', 'home-2.html', 'terms.html', 'privacy-policy.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('bg-gradient-to-')) {
      console.log(`${f} L${i+1}: ${l.trim().slice(0, 100)}`);
    }
  });
});
