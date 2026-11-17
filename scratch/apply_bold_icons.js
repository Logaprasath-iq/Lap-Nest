const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const sunTarget = '<svg class="sun-icon w-6 h-6 xl:w-[26px] xl:h-[26px] text-[#FD802E]" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>';

const moonTarget = '<svg class="moon-icon w-[26px] h-[26px] xl:w-7 xl:h-7 text-[#FD802E] hidden" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg>';

let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace sun icon
  const sunRegex = /<svg class="sun-icon[^"]*"[\s\S]*?<\/svg>/g;
  if (sunRegex.test(content)) {
    content = content.replace(sunRegex, sunTarget);
    changed = true;
  }

  // Replace moon icon
  const moonRegex = /<svg class="moon-icon[^"]*"[\s\S]*?<\/svg>/g;
  if (moonRegex.test(content)) {
    content = content.replace(moonRegex, moonTarget);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
    console.log('Updated ' + f);
  }
});

console.log('Total files updated: ' + updatedCount);
