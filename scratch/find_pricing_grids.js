const fs = require('fs');

const pricingHtml = fs.readFileSync('pricing.html', 'utf8');

const regex = /<div class="grid [^"]*">/g;
let match;
while ((match = regex.exec(pricingHtml)) !== null) {
  console.log(`Grid found at ${match.index}: ${match[0]}`);
  console.log(pricingHtml.substring(match.index, match.index + 300));
}
