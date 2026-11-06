const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

const checks = [
  '#newsletter',
  'newsletter-section',
  'footer-dark-lock',
  'site-footer'
];

checks.forEach(c => {
  const count = (css.match(new RegExp(c, 'g')) || []).length;
  console.log(`${c}: found ${count} times in style.css`);
});
