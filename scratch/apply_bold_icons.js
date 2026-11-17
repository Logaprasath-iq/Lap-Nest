const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const sunTarget = '<svg class="sun-icon text-[#FD802E]" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>';

const moonTarget = '<svg class="moon-icon text-[#FD802E] hidden" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

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
