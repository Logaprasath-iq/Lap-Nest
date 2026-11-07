const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

const checks = [
  'margin-bottom:1.25rem',
  '.equal-card-footer',
  'mb-5',
  'mt-8',
  'pt-6'
];

checks.forEach(str => {
  console.log(`Checking '${str}': ${css.includes(str) ? 'FOUND ✅' : 'NOT FOUND ❌'}`);
});
