const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Update nav element gaps
  if (content.includes('class="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-7"')) {
    content = content.replace(
      'class="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-7"',
      'class="hidden lg:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8"'
    );
    changed = true;
  }

  // 2. Update navbar container gap if present
  if (content.includes('lg:gap-3.5 xl:gap-6 2xl:gap-8')) {
    content = content.replace(
      'lg:gap-3.5 xl:gap-6 2xl:gap-8',
      'lg:gap-4 xl:gap-6 2xl:gap-8'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Updated navbar spacing in ${count} files.`);
