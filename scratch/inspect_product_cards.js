const fs = require('fs');

const html = fs.readFileSync('products.html', 'utf8');

// Find product grid
const gridMatch = html.match(/<div id="products-grid"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (gridMatch) {
  const cards = gridMatch[0].match(/<div class="product-card[^"]*"[\s\S]*?<\/div>\s*<\/div>/g) || [];
  console.log(`Product cards count: ${cards.length}`);
  cards.slice(0, 3).forEach((c, i) => {
    console.log(`--- Card ${i+1} ---`);
    console.log(c.substring(0, 350));
  });
} else {
  console.log('No products-grid found');
}
