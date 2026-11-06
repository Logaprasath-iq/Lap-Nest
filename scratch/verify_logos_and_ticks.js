const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Header logo check
const hIdx = indexHtml.indexOf('<header');
const hEnd = indexHtml.indexOf('</header>', hIdx);
const header = indexHtml.substring(hIdx, hEnd);
console.log('--- Header logo markup in index.html ---');
const logoMatches = header.match(/<img[^>]*logo[^>]*>/gi);
console.log(logoMatches);

// Check if logo-light.svg and logo-dark.svg exist
console.log('logo-light.svg exists:', fs.existsSync('assets/images/logo/logo-light.svg'));
console.log('logo-dark.svg exists:', fs.existsSync('assets/images/logo/logo-dark.svg'));

if (fs.existsSync('assets/images/logo/logo-light.svg')) {
  const lightSvg = fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8');
  console.log('logo-light.svg first 300 chars:');
  console.log(lightSvg.substring(0, 300));
}
