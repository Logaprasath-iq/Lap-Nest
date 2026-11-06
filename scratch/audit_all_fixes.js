const fs = require('fs');

const pages = [
  'index.html',
  'home-2.html',
  'about.html',
  'products.html',
  'product-details.html',
  'pricing.html',
  'repair-upgrade.html',
  'service-details.html',
  'order.html',
  'blog.html',
  'blog-details.html',
  'contact.html',
  'faq.html',
  'privacy-policy.html',
  'terms.html',
  '404.html',
  'coming-soon.html',
  'maintenance.html'
];

let issues = 0;

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');

  // 1. Check dropdown wrapper
  if (!c.includes('dropdown-container') && !['404.html', 'coming-soon.html', 'maintenance.html'].includes(p)) {
    console.error(`[FAIL] ${p}: missing dropdown-container class`);
    issues++;
  }

  // 2. Check WhatsApp handset path in footer
  if (c.includes('https://wa.me/919840012345')) {
    if (!c.includes('12.04 2C6.58 2 2.13')) {
      console.error(`[FAIL] ${p}: missing authentic WhatsApp handset path`);
      issues++;
    }
  }

  // 3. Check logo reference
  if (!c.includes('assets/images/logo/logo-dark.svg')) {
    console.error(`[FAIL] ${p}: missing logo-dark.svg`);
    issues++;
  }
});

// Check inner page separations
const innerSeparationPages = ['about.html', 'pricing.html', 'blog.html', 'repair-upgrade.html', 'products.html', 'contact.html', 'order.html'];
innerSeparationPages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  if (!c.includes('ELEGANT SECTION SEPARATION DIVIDER') && !c.includes('SECTION SEPARATION DIVIDER')) {
    console.error(`[FAIL] ${p}: missing section separation divider`);
    issues++;
  }
});

// Check logo-dark.svg
const logoDark = fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8');
if (!logoDark.includes('LAPNEST') || !logoDark.includes('BUY') || !logoDark.includes('SELL') || !logoDark.includes('REPAIR') || !logoDark.includes('RENT')) {
  console.error('[FAIL] logo-dark.svg: missing wordmark or tagline');
  issues++;
}

// Check navbar.js
const navJs = fs.readFileSync('assets/js/navbar.js', 'utf8');
if (!navJs.includes('dropdown-container') || !navJs.includes('is-open')) {
  console.error('[FAIL] navbar.js: missing dropdown toggle handlers');
  issues++;
}

// Check input.css & style.css
const styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
if (!styleCss.includes('dropdown-container') || !styleCss.includes('dropdown-menu-wrapper')) {
  console.error('[FAIL] style.css: missing dropdown CSS compiled');
  issues++;
}

if (issues === 0) {
  console.log('ALL AUDITS PASSED WITH ZERO ISSUES! EVERYTHING IS 100% IN PLACE.');
} else {
  console.log(`Audits finished with ${issues} issue(s).`);
}
