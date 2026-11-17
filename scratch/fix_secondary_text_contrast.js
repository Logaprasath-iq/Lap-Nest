const fs = require('fs');

// 1. Update assets/css/input.css
let css = fs.readFileSync('assets/css/input.css', 'utf8');

const oldSubtleBlock = `/* Subtle & Secondary Text in Light Mode */
html.light .text-\\[\\#9fb3be\\]:not(footer):not(footer *):not(.footer-dark-lock *),
html.light .text-\\[\\#DAF1DE\\],
html.light .text-\\[\\#b5b5b5\\],
html.light .text-gray-400:not(footer *):not(.footer-dark-lock *),
html.light .text-gray-300:not(footer *):not(.footer-dark-lock *),
.light .text-\\[\\#9fb3be\\]:not(footer):not(footer *):not(.footer-dark-lock *),
.light .text-\\[\\#DAF1DE\\],
.light .text-\\[\\#b5b5b5\\],
.light .text-gray-400:not(footer *):not(.footer-dark-lock *),
.light .text-gray-300:not(footer *):not(.footer-dark-lock *) {
  color: #475569 !important;
}`;

const newSubtleBlock = `/* Subtle & Secondary Text in Light Mode */
html.light .text-\\[\\#9fb3be\\]:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/95:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/90:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/85:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/80:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/75:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/70:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#9fb3be\\]\\/60:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light [class*="text-[#9fb3be]"]:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
html.light .text-\\[\\#DAF1DE\\],
html.light .text-\\[\\#b5b5b5\\],
html.light .text-gray-400:not(footer *):not(.footer-dark-lock *),
html.light .text-gray-300:not(footer *):not(.footer-dark-lock *),
.light .text-\\[\\#9fb3be\\]:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/95:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/90:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/85:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/80:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/75:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/70:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#9fb3be\\]\\/60:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light [class*="text-[#9fb3be]"]:not(footer):not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *),
.light .text-\\[\\#DAF1DE\\],
.light .text-\\[\\#b5b5b5\\],
.light .text-gray-400:not(footer *):not(.footer-dark-lock *),
.light .text-gray-300:not(footer *):not(.footer-dark-lock *) {
  color: #475569 !important;
}

/* Service Details Main Description in Light Mode */
html.light #service-main-desc,
.light #service-main-desc {
  color: #334155 !important;
}`;

if (css.includes(oldSubtleBlock)) {
  css = css.replace(oldSubtleBlock, newSubtleBlock);
  console.log('Updated subtle text block in input.css');
} else {
  console.error('oldSubtleBlock not found in input.css');
}

fs.writeFileSync('assets/css/input.css', css, 'utf8');

// 2. Update service-details.html
let sHtml = fs.readFileSync('service-details.html', 'utf8');
sHtml = sHtml.replace(
  'id="service-main-desc" class="text-xs sm:text-sm text-[#9fb3be]/90 leading-relaxed"',
  'id="service-main-desc" class="text-xs sm:text-sm text-[#334155] dark:text-[#9fb3be] leading-relaxed"'
);
fs.writeFileSync('service-details.html', sHtml, 'utf8');
console.log('Updated service-details.html');

// 3. Update faq.html
let faqHtml = fs.readFileSync('faq.html', 'utf8');
faqHtml = faqHtml.replace(
  'class="text-xs sm:text-sm text-[#9fb3be]/90 max-w-xl leading-relaxed"',
  'class="text-xs sm:text-sm text-[#334155] dark:text-[#9fb3be] max-w-xl leading-relaxed"'
);
fs.writeFileSync('faq.html', faqHtml, 'utf8');
console.log('Updated faq.html');

// 4. Update privacy-policy.html
let privHtml = fs.readFileSync('privacy-policy.html', 'utf8');
privHtml = privHtml.replace(
  'class="text-xs text-[#9fb3be]/80"',
  'class="text-xs text-[#475569] dark:text-[#9fb3be]"'
);
fs.writeFileSync('privacy-policy.html', privHtml, 'utf8');
console.log('Updated privacy-policy.html');

// 5. Update terms.html
let termsHtml = fs.readFileSync('terms.html', 'utf8');
termsHtml = termsHtml.replace(
  'class="text-xs text-[#9fb3be]/80"',
  'class="text-xs text-[#475569] dark:text-[#9fb3be]"'
);
fs.writeFileSync('terms.html', termsHtml, 'utf8');
console.log('Updated terms.html');

// 6. Update product-details.html
let prodHtml = fs.readFileSync('product-details.html', 'utf8');
prodHtml = prodHtml.replace(
  'class="text-xs text-[#9fb3be]/80 flex items-center gap-1.5 pt-1"',
  'class="text-xs text-[#475569] dark:text-[#9fb3be] flex items-center gap-1.5 pt-1"'
);
fs.writeFileSync('product-details.html', prodHtml, 'utf8');
console.log('Updated product-details.html');
