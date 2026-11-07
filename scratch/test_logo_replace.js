const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const target = 'class="brand-logo-img header-logo h-9 sm:h-11 md:h-12 w-auto max-w-[150px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"';
const replacement = 'class="brand-logo-img header-logo h-10 sm:h-11 md:h-12 w-auto max-w-[190px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"';

let count = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes(target)) {
    count++;
    console.log(`Found in: ${f}`);
  }
});
console.log(`Total files with exact target string: ${count}`);
