const fs = require('fs');

const pricingHtml = fs.readFileSync('pricing.html', 'utf8');

// Find pricing tiers
const pIdx = pricingHtml.indexOf('₹');
if (pIdx !== -1) {
  console.log(pricingHtml.substring(pIdx - 300, pIdx + 1200));
}
