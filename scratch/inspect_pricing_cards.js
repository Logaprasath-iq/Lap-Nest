const fs = require('fs');

const pricingHtml = fs.readFileSync('pricing.html', 'utf8');

// Find rental plans or tiers
const rIdx = pricingHtml.indexOf('id="rental-plans"');
if (rIdx !== -1) {
  console.log(pricingHtml.substring(rIdx, rIdx + 2000));
} else {
  // search for "Starter" or "Plan"
  const planIdx = pricingHtml.indexOf('Starter');
  console.log(pricingHtml.substring(planIdx - 200, planIdx + 1500));
}
