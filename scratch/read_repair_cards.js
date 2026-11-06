const fs = require('fs');
const html = fs.readFileSync('repair-upgrade.html', 'utf8');

const cards = html.match(/<div class="[^"]*(tilt-card|equal-card)[^"]*"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log(`Cards count: ${cards.length}`);
cards.slice(0, 4).forEach((c, i) => {
  console.log(`--- Card ${i+1} ---`);
  console.log(c.substring(0, 300));
});
