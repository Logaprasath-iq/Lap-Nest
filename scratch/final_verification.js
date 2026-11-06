const fs = require('fs');

const pages = [
  'index.html', 'about.html', 'pricing.html', 'products.html',
  'blog.html', 'contact.html', 'repair-upgrade.html', 'order.html',
  'faq.html', 'home-2.html', 'product-details.html', 'service-details.html',
  'blog-details.html', 'privacy-policy.html', 'terms.html', '404.html'
];

let allPass = true;

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const hasCart = content.includes('title="Orders & Cart"');
  const hasDoubleRtl = content.includes('⇄ RTL') || content.includes('⇄ LTR');
  const hasGreen = /#(?:051F20|163832|235347|8EB69B|DAF1DE|0B2B26)/i.test(content);
  const hasOldGold = /#(?:d29f22|e5b034)/i.test(content);
  const hasFooter = content.includes('Official Channels') && content.includes('CHENNAI OUTPOST');
  
  if (hasCart || hasDoubleRtl || hasGreen || hasOldGold || !hasFooter) {
    allPass = false;
    console.error(`[FAIL] ${p}: cart=${hasCart}, doubleRtl=${hasDoubleRtl}, green=${hasGreen}, oldGold=${hasOldGold}, footer=${hasFooter}`);
  } else {
    console.log(`[PASS] ${p}`);
  }
});

// Check hero animation in index.html
const indexHtml = fs.readFileSync('index.html', 'utf8');
const hasFloatRotate = indexHtml.includes('animate-float-rotate');
const hasBigLaptop = indexHtml.includes('max-w-[640px]') || indexHtml.includes('max-w-[680px]');
console.log(`index.html: hasFloatRotate=${hasFloatRotate}, hasBigLaptop=${hasBigLaptop}`);

// Check favicon and logos
const logoDark = fs.readFileSync('assets/images/logo/logo-dark.svg', 'utf8');
const hasSwoosh = logoDark.includes('#FD802E') && logoDark.includes('orange-glow');
console.log(`logo-dark.svg: hasSwoosh=${hasSwoosh}`);

console.log('Verification result:', allPass && hasFloatRotate && hasBigLaptop && hasSwoosh ? 'ALL CHECKS PASSED!' : 'ISSUES FOUND');
