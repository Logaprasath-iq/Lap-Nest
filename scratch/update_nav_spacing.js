const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf8');
const oldHeader = indexContent.match(/<header id="main-navbar"[\s\S]*?<\/header>/)[0];

const newHeader = `<header id="main-navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 bg-[#0e181f]/90 backdrop-blur-md border-b border-[#233D4C]/60">
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-3 group focus:outline-none shrink-0">
        <img src="assets/images/logo/logo-dark.svg" 
             data-dark="assets/images/logo/logo-dark.svg" 
             data-light="assets/images/logo/logo-light.svg" 
             alt="LAPNEST – BUY • SELL • REPAIR • RENT" 
             class="brand-logo-img header-logo h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105">
      </a>

      <!-- Desktop Center Navigation Menu (Old Nav Layout - Clean Text Links) -->
      <nav class="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
        
        <!-- Home Dropdown -->
        <div class="relative group dropdown-container">
          <button type="button" class="dropdown-btn nav-link-item flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#FD802E] transition-colors focus:outline-none py-2 whitespace-nowrap" aria-expanded="false" aria-haspopup="true">
            <span>Home</span>
            <svg class="dropdown-arrow-icon w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="dropdown-menu-wrapper absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 z-50">
            <div class="rounded-xl bg-[#172731] border border-[#233D4C] shadow-2xl p-2">
              <a href="index.html" class="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg text-white hover:bg-[#233D4C] hover:text-[#FD802E] transition-colors">
                <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                Home 1 – Flagship Store
              </a>
              <a href="home-2.html" class="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg text-[#9fb3be] hover:bg-[#233D4C] hover:text-[#FD802E] transition-colors">
                <span class="w-2 h-2 rounded-full bg-[#233D4C]"></span>
                Home 2 – Editorial Tech
              </a>
            </div>
          </div>
        </div>

        <a href="about.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">About</a>
        <a href="products.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">Products</a>
        <a href="pricing.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">Pricing</a>
        <a href="repair-upgrade.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">Repair & Upgrade</a>
        <a href="blog.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">Blog</a>
        <a href="contact.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2 whitespace-nowrap">Contact</a>
      </nav>

      <!-- Right Controls: RTL Toggle, Theme Toggle, Order CTA -->
      <div class="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
        
        <!-- RTL/LTR Toggle with Clean Arrow -->
        <button type="button" class="rtl-toggle-btn h-10 px-3 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center justify-center gap-1.5 shrink-0" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          <span class="dir-badge text-[11px] tracking-wider">RTL</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button type="button" class="theme-toggle-btn w-10 h-10 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all inline-flex items-center justify-center shrink-0" title="Toggle Dark/Light Mode" aria-label="Toggle Dark/Light Mode">
          <svg class="sun-icon w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg class="moon-icon w-4 h-4 text-[#FD802E] hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        <!-- Dedicated Order CTA -->
        <a href="order.html" class="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-4 xl:px-5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span>Order Now</span>
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button id="mobile-menu-btn" type="button" class="lg:hidden w-10 h-10 rounded-xl text-[#9fb3be] hover:text-white bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] inline-flex items-center justify-center shrink-0" aria-label="Open Mobile Menu">
          <svg class="w-5 h-5 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

    </div>
  </header>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes(oldHeader)) {
    const updated = content.replace(oldHeader, newHeader);
    fs.writeFileSync(f, updated, 'utf8');
    count++;
    console.log(`Updated header in: ${f}`);
  } else {
    console.log(`No match in: ${f}`);
  }
});
console.log(`Done! Updated ${count} of ${files.length} HTML files.`);
