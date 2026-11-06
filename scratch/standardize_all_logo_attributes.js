const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  // 1. Mobile drawer logo: ensure h-11 sm:h-12 and data attributes
  html = html.replace(/<img([^>]*src="[^"]*logo[^"]*"[^>]*)class="brand-logo-img h-12 sm:h-14 w-auto"([^>]*)>/g, (m, p1, p2) => {
    changed = true;
    return `<img src="assets/images/logo/logo-dark.svg" data-dark="assets/images/logo/logo-dark.svg" data-light="assets/images/logo/logo-light.svg" alt="LAPNEST – BUY • SELL • REPAIR • RENT" class="brand-logo-img mobile-logo h-11 sm:h-12 w-auto">`;
  });

  // 2. Footer logo: ensure data-dark and data-light
  html = html.replace(/<img src="assets\/images\/logo\/logo-dark\.svg" alt="LAPNEST – BUY • SELL • REPAIR • RENT" class="brand-logo-img footer-logo/g, () => {
    changed = true;
    return `<img src="assets/images/logo/logo-dark.svg" data-dark="assets/images/logo/logo-dark.svg" data-light="assets/images/logo/logo-light.svg" alt="LAPNEST – BUY • SELL • REPAIR • RENT" class="brand-logo-img footer-logo`;
  });

  if (changed) {
    fs.writeFileSync(f, html);
    console.log(`Standardized logo attributes in ${f}`);
  }
});
