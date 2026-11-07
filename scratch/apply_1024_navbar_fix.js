const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('id="main-navbar"')) {
    let original = content;

    // 1. Container gap & padding
    content = content.replace(
      'px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between gap-4 lg:gap-6 xl:gap-8',
      'px-4 sm:px-6 lg:px-4 xl:px-8 flex items-center justify-between gap-3 lg:gap-3.5 xl:gap-6 2xl:gap-8'
    );

    // 2. Brand Logo: max-w on lg
    content = content.replace(
      'class="brand-logo-img header-logo h-10 sm:h-11 md:h-12 w-auto max-w-[190px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"',
      'class="brand-logo-img header-logo h-10 sm:h-11 lg:h-9 xl:h-11 w-auto max-w-[190px] sm:max-w-none lg:max-w-[170px] xl:max-w-none transition-transform duration-300 group-hover:scale-105"'
    );

    // 3. Desktop Navigation Menu: gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-7
    content = content.replace(
      '<nav class="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">',
      '<nav class="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-7">'
    );

    // 4. Nav link items: text-xs xl:text-sm
    content = content.replace(
      'class="dropdown-btn nav-link-item flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#FD802E] transition-colors focus:outline-none py-2 whitespace-nowrap"',
      'class="dropdown-btn nav-link-item flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-white hover:text-[#FD802E] transition-colors focus:outline-none py-2 whitespace-nowrap"'
    );

    // Replace text-sm font-semibold text-[#9fb3be] with text-xs xl:text-sm font-semibold text-[#9fb3be] inside nav
    content = content.replace(
      /<nav class="hidden lg:flex[\s\S]*?<\/nav>/,
      (match) => {
        return match.replace(/class="nav-link-item text-sm font-semibold/g, 'class="nav-link-item text-xs xl:text-sm font-semibold');
      }
    );

    // 5. Right controls container: gap-1.5 lg:gap-2 xl:gap-3
    content = content.replace(
      'class="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0"',
      'class="flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0"'
    );

    // 6. RTL button: h-9 xl:h-10 px-2.5 xl:px-3 text-[11px] xl:text-xs
    content = content.replace(
      'class="rtl-toggle-btn h-10 px-3 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all hidden lg:inline-flex items-center justify-center gap-1.5 shrink-0"',
      'class="rtl-toggle-btn h-9 xl:h-10 px-2.5 xl:px-3 rounded-xl text-[11px] xl:text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all hidden lg:inline-flex items-center justify-center gap-1.5 shrink-0"'
    );

    // 7. Theme toggle: w-9 h-9 xl:w-10 xl:h-10
    content = content.replace(
      'class="theme-toggle-btn w-10 h-10 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all hidden lg:inline-flex items-center justify-center shrink-0"',
      'class="theme-toggle-btn w-9 h-9 xl:w-10 xl:h-10 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all hidden lg:inline-flex items-center justify-center shrink-0"'
    );

    // 8. Order Now button: h-9 xl:h-10 px-3.5 xl:px-5 gap-1.5 xl:gap-2
    content = content.replace(
      'class="hidden lg:inline-flex items-center justify-center gap-2 h-10 px-4 xl:px-5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"',
      'class="hidden lg:inline-flex items-center justify-center gap-1.5 xl:gap-2 h-9 xl:h-10 px-3.5 xl:px-5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"'
    );

    if (content !== original) {
      fs.writeFileSync(f, content, 'utf8');
      updated++;
      console.log(`Updated 1024px navbar in: ${f}`);
    } else {
      console.log(`NO changes in: ${f}`);
    }
  }
});

console.log(`\nSuccessfully applied 1024px navbar fix to ${updated} files.`);
