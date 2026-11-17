const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Ensure moon icon has stroke-width="2.25" and class w-[22px] h-[22px] xl:w-6 xl:h-6
  const moonRegex = /<svg class="moon-icon [^"]*" fill="none" stroke="currentColor"(?: stroke-width="[^"]*")? viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"(?: stroke-width="[^"]*")? d="M21\.752 15\.002A9\.72 9\.72 0 0 1 18 15\.75c-5\.385 0-9\.75-4\.365-9\.75-9\.75 0-1\.33\.266-2\.597\.748-3\.752A9\.753 9\.753 0 0 0 3 11\.25C3 16\.635 7\.365 21 12\.75 21a9\.753 9\.753 0 0 0 9\.002-5\.998Z"><\/path><\/svg>/g;

  const targetSvg = '<svg class="moon-icon w-[22px] h-[22px] xl:w-6 xl:h-6 text-[#FD802E] hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg>';

  if (moonRegex.test(content)) {
    content = content.replace(moonRegex, targetSvg);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
    console.log('Updated ' + f);
  }
});

console.log('Total files updated: ' + updatedCount);
