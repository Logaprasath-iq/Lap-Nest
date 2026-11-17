const fs = require('fs');

const content = fs.readFileSync('home-2.html', 'utf8');

// Let's check all sections in home-2.html
const sectionRegex = /<!--\s*SECTION\s*\d+:[\s\S]*?<\/section>/g;
let match;
let count = 0;
while ((match = sectionRegex.exec(content)) !== null) {
  count++;
  const sectionText = match[0];
  const title = sectionText.split('\n')[0];
  console.log(`\n=== [Section ${count}] ${title} ===`);
  
  // Check for any text-white inside dark background containers or vice-versa
  const lines = sectionText.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('text-white') || l.includes('bg-[')) {
      if (l.includes('<h1') || l.includes('<h2') || l.includes('<h3') || l.includes('<p') || l.includes('<span')) {
        // console.log(`  L${idx+1}: ${l.trim().slice(0, 100)}`);
      }
    }
  });
}
console.log(`Found ${count} sections in home-2.html.`);
