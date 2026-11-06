const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Check Deals section
const dealsMatch = html.match(/<!-- SECTION: LATEST DEALS -->[\s\S]*?<\/section>/);
if (dealsMatch) {
  console.log('--- DEALS SECTION FOUND ---');
  const cards = dealsMatch[0].match(/<div class="[^"]*rounded-2xl[^"]*"[\s\S]*?<\/div>\s*<\/div>/g) || [];
  console.log(`Deals cards count: ${cards.length}`);
}

// Check Best Sellers section
const bestSellersMatch = html.match(/<!-- SECTION: BEST SELLER LAPTOPS -->[\s\S]*?<\/section>/);
if (bestSellersMatch) {
  console.log('--- BEST SELLERS FOUND ---');
  const titles = bestSellersMatch[0].match(/<h[34][^>]*>[\s\S]*?<\/h[34]>/g) || [];
  console.log('Best seller titles count:', titles.length);
}

// Check Why Choose Us
const whyMatch = html.match(/<!-- SECTION: WHY CHOOSE US -->[\s\S]*?<\/section>/);
if (whyMatch) {
  console.log('--- WHY CHOOSE US FOUND ---');
}
