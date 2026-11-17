const fs = require('fs');

const content = fs.readFileSync('home-2.html', 'utf8');
const lines = content.split('\n');

console.log('Total lines in home-2.html:', lines.length);

// Check sections
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('class="text-') || l.includes('text-white') || l.includes('h3') || l.includes('h2')) {
    if (l.includes('<section') || l.includes('h2') || l.includes('h3')) {
      console.log(`L${i+1}: ${l.trim()}`);
    }
  }
});
