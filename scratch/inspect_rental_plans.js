const fs = require('fs');

const pricingHtml = fs.readFileSync('pricing.html', 'utf8');
console.log(pricingHtml.substring(22737, 28000));
