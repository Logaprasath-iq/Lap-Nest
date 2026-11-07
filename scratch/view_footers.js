const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('equal-card-footer')) {
    console.log(`L${idx+1}:`);
    for (let i = idx; i <= idx + 8 && i < lines.length; i++) {
      console.log(`  ${lines[i]}`);
    }
  }
});
