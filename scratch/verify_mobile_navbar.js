const fs = require('fs');
const http = require('http');

const files = [
  'about.html',
  'blog-details.html',
  'blog.html',
  'contact.html',
  'faq.html',
  'home-2.html',
  'index.html',
  'order.html',
  'pricing.html',
  'privacy-policy.html',
  'product-details.html',
  'products.html',
  'repair-upgrade.html',
  'service-details.html',
  'terms.html'
];

let allPassed = true;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasHiddenRtl = content.includes('rtl-toggle-btn') && content.includes('hidden sm:inline-flex');
  const hasHiddenTheme = content.includes('theme-toggle-btn') && content.includes('hidden sm:inline-flex');
  const hasDrawerControls = content.includes('Mobile Quick Controls: RTL & Dark/Light Mode');
  const hasDrawerRtl = content.includes('Mobile RTL Toggle');
  const hasDrawerTheme = content.includes('Mobile Dark/Light Theme Toggle');
  const hasMobileLogo = content.includes('max-w-[150px]');

  if (!hasHiddenRtl || !hasHiddenTheme || !hasDrawerControls || !hasDrawerRtl || !hasDrawerTheme || !hasMobileLogo) {
    console.error(`❌ ${file} failed checks:`, { hasHiddenRtl, hasHiddenTheme, hasDrawerControls, hasDrawerRtl, hasDrawerTheme, hasMobileLogo });
    allPassed = false;
  } else {
    console.log(`✅ ${file}: Passed mobile navbar structure checks`);
  }
});

// Check compiled style.css
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const hasCssMobileNone = css.includes('max-width:639px') && css.includes('display:none!important');
console.log('CSS max-width 639px display none check:', hasCssMobileNone ? 'PASSED' : 'FAILED');
if (!hasCssMobileNone) allPassed = false;

// Check HTTP server
const req = http.get('http://127.0.0.1:3000/index.html', res => {
  console.log(`HTTP /index.html Status: ${res.statusCode}`);
  http.get('http://127.0.0.1:3000/contact.html', res2 => {
    console.log(`HTTP /contact.html Status: ${res2.statusCode}`);
    http.get('http://127.0.0.1:3000/product-details.html', res3 => {
      console.log(`HTTP /product-details.html Status: ${res3.statusCode}`);
      if (allPassed && res.statusCode === 200 && res2.statusCode === 200 && res3.statusCode === 200) {
        console.log('\n🌟 ALL CHECKS PASSED WITH 100% SUCCESS!');
      } else {
        console.log('\n❌ SOME CHECKS FAILED');
      }
    });
  });
});
