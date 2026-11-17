const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldPath = 'd="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"';
const newPath = 'd="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"';

let updatedFiles = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace old moon path
  if (content.includes(oldPath)) {
    content = content.replaceAll(oldPath, newPath);
    changed = true;
  }

  // Ensure consistent class w-5 h-5 xl:w-[22px] xl:h-[22px]
  if (content.includes('moon-icon w-[22px] h-[22px] xl:w-6 xl:h-6')) {
    content = content.replaceAll('moon-icon w-[22px] h-[22px] xl:w-6 xl:h-6', 'moon-icon w-5 h-5 xl:w-[22px] xl:h-[22px]');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updatedFiles++;
    console.log('Updated ' + f);
  }
});

console.log('Total files updated: ' + updatedFiles);
