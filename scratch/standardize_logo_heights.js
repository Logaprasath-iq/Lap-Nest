const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let html = fs.readFileSync(f, 'utf8');
  let original = html;

  // Header logo
  html = html.replace(/(<header[\s\S]*?<img[^>]*class=\")[^\"]*brand-logo-img[^\"]*(\"[^>]*>)/, (match, prefix, suffix) => {
    return `${prefix}brand-logo-img header-logo h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105${suffix}`;
  });

  // Footer logo
  html = html.replace(/(<footer[\s\S]*?<img[^>]*class=\")[^\"]*brand-logo-img[^\"]*(\"[^>]*>)/, (match, prefix, suffix) => {
    return `${prefix}brand-logo-img footer-logo h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105${suffix}`;
  });

  if (html !== original) {
    fs.writeFileSync(f, html);
    console.log(`Standardized logo heights in ${f}`);
  }
});
