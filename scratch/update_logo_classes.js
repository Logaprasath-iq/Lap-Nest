const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const target = 'class="brand-logo-img header-logo h-9 sm:h-11 md:h-12 w-auto max-w-[150px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"';
const replacement = 'class="brand-logo-img header-logo h-10 sm:h-11 md:h-12 w-auto max-w-[190px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"';

let updatedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
    console.log(`Updated logo in: ${f}`);
  }
});

console.log(`Successfully updated ${updatedCount} HTML files.`);
