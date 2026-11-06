const fs = require('fs');

function inspectCards(filename) {
  console.log(`\n=================== ${filename} ===================`);
  const html = fs.readFileSync(filename, 'utf8');
  // Check for card grids
  const cardMatches = html.match(/<div class="[^"]*rounded-[^"]*(bg-\[#172731\]|bg-\[#252628\]|bg-\[#111e26\]|border)[^"]*"/g) || [];
  console.log(`Found ${cardMatches.length} card elements`);
  
  // Check for equal-card / flex-col
  const hasEqualCard = html.includes('equal-card');
  const hasEqualCardGrid = html.includes('equal-card-grid');
  console.log(`equal-card: ${hasEqualCard}, equal-card-grid: ${hasEqualCardGrid}`);
}

['pricing.html', 'repair-upgrade.html', 'about.html', 'blog.html'].forEach(inspectCards);
