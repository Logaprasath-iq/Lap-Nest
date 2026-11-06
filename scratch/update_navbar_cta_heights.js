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

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace rtl-toggle-btn class
  content = content.replace(
    /class="rtl-toggle-btn[^"]*"/,
    'class="rtl-toggle-btn h-10 px-3.5 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center justify-center gap-1.5 shrink-0"'
  );

  // Replace theme-toggle-btn class
  content = content.replace(
    /class="theme-toggle-btn[^"]*"/,
    'class="theme-toggle-btn w-10 h-10 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all inline-flex items-center justify-center shrink-0"'
  );

  // Replace order cta class
  content = content.replace(
    /class="hidden sm:inline-flex items-center gap-2 px-5 py-2\.5 rounded-xl text-xs font-bold bg-\[#FD802E\][^"]*"/,
    'class="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"'
  );

  // Replace mobile-menu-btn class
  content = content.replace(
    /id="mobile-menu-btn" type="button" class="[^"]*"/,
    'id="mobile-menu-btn" type="button" class="lg:hidden w-10 h-10 rounded-xl text-[#9fb3be] hover:text-white bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] inline-flex items-center justify-center shrink-0"'
  );

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated navbar buttons in ${f}`);
});
