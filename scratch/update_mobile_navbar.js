const fs = require('fs');

const files = [
  'about.html',
  'blog-details.html',
  'blog.html',
  'contact.html',
  'faq.html',
  'home-2.html',
  'index.html',
  'order.html',
  'pricing.html',
  'privacy-policy.html',
  'product-details.html',
  'products.html',
  'repair-upgrade.html',
  'service-details.html',
  'terms.html'
];

let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Hide RTL button on < sm in header
  content = content.replace(
    /(<button type="button" class="rtl-toggle-btn [^"]*?)inline-flex([^"]*?" title="Toggle RTL \/ LTR")/g,
    (match, p1, p2) => {
      if (p1.includes('hidden sm:inline-flex')) return match;
      return `${p1}hidden sm:inline-flex${p2}`;
    }
  );

  // 2. Hide Theme toggle button on < sm in header
  content = content.replace(
    /(<button type="button" class="theme-toggle-btn [^"]*?)inline-flex([^"]*?" title="Toggle Dark\/Light Mode")/g,
    (match, p1, p2) => {
      if (p1.includes('hidden sm:inline-flex')) return match;
      return `${p1}hidden sm:inline-flex${p2}`;
    }
  );

  // 3. Ensure header logo fits sleekly on 360px mobile
  content = content.replace(
    /class="brand-logo-img header-logo h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"/g,
    'class="brand-logo-img header-logo h-9 sm:h-11 md:h-12 w-auto max-w-[150px] sm:max-w-none transition-transform duration-300 group-hover:scale-105"'
  );

  // 4. Add RTL & Theme toggle inside mobile-drawer if not already present
  const drawerFooterRegex = /(<div class="pt-6 border-t border-\[#233D4C\] space-y-3">\s*)(<a href="order\.html")/g;
  if (!content.includes('<!-- Mobile Quick Controls: RTL & Dark/Light Mode -->')) {
    const controlsHtml = `      <!-- Mobile Quick Controls: RTL & Dark/Light Mode -->
      <div class="grid grid-cols-2 gap-2.5">
        <!-- Mobile RTL Toggle -->
        <button type="button" class="rtl-toggle-btn h-11 px-3 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center justify-center gap-2" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          <span class="dir-badge text-xs tracking-wider">RTL</span>
        </button>

        <!-- Mobile Dark/Light Theme Toggle -->
        <button type="button" class="theme-toggle-btn h-11 px-3 rounded-xl text-xs font-bold text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all inline-flex items-center justify-center gap-2" title="Toggle Dark/Light Mode" aria-label="Toggle Dark/Light Mode">
          <svg class="sun-icon w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg class="moon-icon w-4 h-4 text-[#FD802E] hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <span class="text-xs">Theme</span>
        </button>
      </div>\n\n      `;
    content = content.replace(drawerFooterRegex, `$1${controlsHtml}$2`);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${file}`);
  } else {
    console.log(`No change for ${file}`);
  }
});

console.log(`Total updated files: ${updatedCount}/${files.length}`);
