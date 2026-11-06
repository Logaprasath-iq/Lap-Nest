const fs = require('fs');

const navbarHtml = `  <!-- STICKY NAVBAR (FULL-WIDTH BRAND HEADER) -->
  <header id="main-navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 bg-[#0e181f]/90 backdrop-blur-md border-b border-[#233D4C]/60">
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-3 group focus:outline-none">
        <img src="assets/images/logo/logo-dark.svg" 
             data-dark="assets/images/logo/logo-dark.svg" 
             data-light="assets/images/logo/logo-light.svg" 
             alt="LAPNEST – BUY • SELL • REPAIR • RENT" 
             class="brand-logo-img header-logo h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105">
      </a>

      <!-- Desktop Center Navigation Menu (Old Nav Layout - Clean Text Links) -->
      <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
        
        <!-- Home Dropdown -->
        <div class="relative group">
          <button class="nav-link-item flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#FD802E] transition-colors focus:outline-none py-2">
            <span>Home</span>
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="dropdown-menu absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#172731] border border-[#233D4C] shadow-2xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
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

        <a href="about.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">About</a>
        <a href="products.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">Products</a>
        <a href="pricing.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">Pricing</a>
        <a href="repair-upgrade.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">Repair & Upgrade</a>
        <a href="blog.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">Blog</a>
        <a href="contact.html" class="nav-link-item text-sm font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors py-2">Contact</a>
      </nav>

      <!-- Right Controls: Shopping Bag, RTL with Arrow Symbol, Theme Toggle, Order Button -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        
        <!-- Shopping Bag / Cart Indicator -->
        <a href="order.html" class="p-2.5 rounded-xl bg-[#172731] border border-[#233D4C] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all relative flex items-center justify-center" title="Orders & Cart" aria-label="Cart">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FD802E] text-[#0e181f] text-[9px] font-black flex items-center justify-center">1</span>
        </a>

        <!-- RTL/LTR Toggle with Left and Right Arrow Symbol -->
        <button type="button" class="rtl-toggle-btn px-3 py-2 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all flex items-center gap-1.5" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          <span class="dir-badge text-[11px] tracking-wider">⇄ RTL</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button type="button" class="theme-toggle-btn p-2.5 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all flex items-center justify-center" title="Toggle Dark/Light Mode" aria-label="Toggle Dark/Light Mode">
          <!-- Sun Icon (shown in dark mode) -->
          <svg class="sun-icon w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <!-- Moon Icon (shown in light mode) -->
          <svg class="moon-icon w-4 h-4 text-[#FD802E] hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        <!-- Dedicated Order CTA -->
        <a href="order.html" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-0.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span>Order Now</span>
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button id="mobile-menu-btn" type="button" class="lg:hidden p-2.5 rounded-xl text-[#9fb3be] hover:text-white bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]" aria-label="Open Mobile Menu">
          <svg class="w-5 h-5 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer Backdrop & Menu -->
  <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300"></div>
  <div id="mobile-drawer" class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0e181f] border-l border-[#233D4C] z-50 transform translate-x-full transition-transform duration-300 flex flex-col p-6 overflow-y-auto">
    <div class="flex items-center justify-between pb-6 border-b border-[#233D4C]">
      <img src="assets/images/logo/logo-dark.svg" alt="LAPNEST" class="brand-logo-img h-9 w-auto">
      <button id="close-mobile-menu" class="p-2 text-[#9fb3be] hover:text-white" aria-label="Close menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <nav class="flex-1 py-6 space-y-2">
      <!-- Mobile Home Accordion -->
      <div>
        <button class="mobile-dropdown-trigger w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#172731]">
          <span>Home</span>
          <svg class="dropdown-arrow w-4 h-4 text-[#FD802E] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div class="hidden pl-4 py-1 space-y-1">
          <a href="index.html" class="block py-2 px-3 text-sm text-[#FD802E] font-semibold hover:bg-[#172731] rounded-md">• Home 1 (Store)</a>
          <a href="home-2.html" class="block py-2 px-3 text-sm text-[#9fb3be] hover:text-white hover:bg-[#172731] rounded-md">• Home 2 (Editorial)</a>
        </div>
      </div>

      <a href="about.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">About Us</a>
      <a href="products.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">Products Catalog</a>
      <a href="pricing.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">Pricing & Rentals</a>
      <a href="repair-upgrade.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">Repair & Upgrade</a>
      <a href="blog.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">Tech Blog</a>
      <a href="contact.html" class="block py-2.5 px-3 text-white font-medium hover:bg-[#172731] rounded-lg">Contact & Location</a>
    </nav>

    <div class="pt-6 border-t border-[#233D4C] space-y-3">
      <a href="order.html" class="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-sm shadow-lg shadow-[#FD802E]/25">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        Place Order
      </a>
      <p class="text-center text-xs text-[#9fb3be] font-bold tracking-wider">BUY • SELL • REPAIR • RENT</p>
    </div>
  </div>`;

const footerHtml = `  <!-- FOOTER (4-COLUMN EDITORIAL TECH FOOTER MATCHING HOOKPOINT REFERENCE) -->
  <footer class="bg-[#0e181f] border-t border-[#233D4C]/60 pt-16 pb-12 text-[#9fb3be]">
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      <!-- 4 Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
        
        <!-- Column 1: Brand Info & Socials (lg:col-span-4) -->
        <div class="lg:col-span-4 space-y-4">
          <a href="index.html" class="inline-block">
            <img src="assets/images/logo/logo-dark.svg" alt="LAPNEST" class="brand-logo-img h-10 w-auto">
          </a>
          <p class="text-xs font-bold uppercase tracking-wider text-[#FD802E]">BUY • SELL • REPAIR • RENT</p>
          <p class="text-xs leading-relaxed text-[#9fb3be] max-w-sm">
            India's dedicated premier laptop sales, certified refurbishing, corporate rentals, and cleanroom motherboard repair facility. Serving thousands of creators, gamers, and enterprises.
          </p>

          <!-- 4 Circular Social Icon Pills with Colored Borders (WhatsApp, Insta, X, FB) -->
          <div class="flex items-center gap-3 pt-2">
            <!-- WhatsApp (Green) -->
            <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-[#172731] border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm" 
               title="WhatsApp Support" aria-label="WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>

            <!-- Instagram (Pink/Magenta) -->
            <a href="https://instagram.com/lapnestofficial" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-[#172731] border border-[#E4405F]/40 text-[#E4405F] hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm" 
               title="Instagram" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            <!-- X (Twitter) (White / Charcoal) -->
            <a href="https://x.com/lapnestofficial" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-[#172731] border border-gray-500/40 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all hover:scale-110 shadow-sm" 
               title="X (Twitter)" aria-label="X Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            <!-- Facebook (Blue) -->
            <a href="https://facebook.com/lapnestofficial" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-[#172731] border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm" 
               title="Facebook" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        <!-- Column 2: CATALOG & STORE (lg:col-span-2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CATALOG & STORE</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="index.html" class="hover:text-[#FD802E] transition-colors">Home 1 (Cinematic)</a></li>
            <li><a href="home-2.html" class="hover:text-[#FD802E] transition-colors">Home 2 (Equipment Showcase)</a></li>
            <li><a href="products.html" class="hover:text-[#FD802E] transition-colors">All Laptop Models</a></li>
            <li><a href="products.html?cat=gaming" class="hover:text-[#FD802E] transition-colors">Gaming & Workstations</a></li>
            <li><a href="products.html?cat=refurbished" class="hover:text-[#FD802E] transition-colors">Refurbished ThinkPads</a></li>
            <li><a href="pricing.html#rentals" class="hover:text-[#FD802E] transition-colors">Monthly Rental Fleet</a></li>
          </ul>
        </div>

        <!-- Column 3: CUSTOMER SUPPORT (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CUSTOMER SUPPORT</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="order.html" class="text-[#FD802E] font-bold hover:underline transition-colors flex items-center gap-1.5">
              <span>Your Cart & Orders</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#FD802E]/20 text-[#FD802E]">Track</span>
            </a></li>
            <li><a href="about.html" class="hover:text-[#FD802E] transition-colors">About Our Brand & Heritage</a></li>
            <li><a href="faq.html" class="hover:text-[#FD802E] transition-colors">Equipment & Pricing FAQs</a></li>
            <li><a href="repair-upgrade.html" class="hover:text-[#FD802E] transition-colors">Cleanroom Diagnostic Lab</a></li>
            <li><a href="blog.html" class="hover:text-[#FD802E] transition-colors">Hardware Buyer Guides</a></li>
            <li><a href="contact.html" class="hover:text-[#FD802E] transition-colors">Contact Storefront & Dispatch</a></li>
          </ul>
        </div>

        <!-- Column 4: CHENNAI OUTPOST (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CHENNAI OUTPOST</h4>
          <div class="space-y-2 text-xs leading-relaxed text-[#9fb3be]">
            <p class="font-bold text-white">LAPNEST Tech Plaza — Chennai</p>
            <p>42 Rajiv Gandhi Salai (OMR), Sholinganallur</p>
            <p>Chennai, Tamil Nadu 600119, India</p>
            <p class="pt-2"><span class="text-white font-medium">Hours:</span> Mon – Sat: 09:30 AM – 08:30 PM</p>
            <p><span class="text-white font-medium">Phone:</span> +91 98400 12345</p>
            <p><span class="text-white font-medium">WhatsApp:</span> +91 98400 12345</p>
            <p><span class="text-white font-medium">Email:</span> <a href="mailto:support@lapnest.in" class="hover:text-[#FD802E]">support@lapnest.in</a></p>
          </div>
        </div>

      </div>

      <!-- Horizontal Divider Line Matching Reference -->
      <div class="w-full border-t border-[#233D4C]/60 my-6"></div>

      <!-- Centered Copyright Matching HookPoint Reference Single Line -->
      <div class="text-center py-2">
        <p class="text-xs text-[#9fb3be] tracking-wide">
          © 2026 LAPNEST — Laptop Sales, Rentals & Cleanroom Lab. All Rights Reserved.
        </p>
      </div>

    </div>
  </footer>`;

// Color replacements map
const colorReplacements = [
  // Green earbud hexes
  { from: /#051F20/gi, to: '#0e181f' },
  { from: /#163832/gi, to: '#172731' },
  { from: /#235347/gi, to: '#233D4C' },
  { from: /#8EB69B/gi, to: '#FD802E' },
  { from: /#DAF1DE/gi, to: '#9fb3be' },
  { from: /shadow-sage-sm/gi, to: 'shadow-pumpkin-sm' },
  { from: /shadow-sage-md/gi, to: 'shadow-pumpkin-md' },
  { from: /shadow-sage-lg/gi, to: 'shadow-pumpkin-lg' },
  
  // Old gold hexes
  { from: /#d29f22/gi, to: '#FD802E' },
  { from: /#e5b034/gi, to: '#ff9248' },
  { from: /#ffd56b/gi, to: '#ffd0aa' },
  { from: /#19171b/gi, to: '#0e181f' },
  { from: /#252628/gi, to: '#172731' },
  { from: /#353639/gi, to: '#233D4C' },
  { from: /#121013/gi, to: '#0e181f' },
  { from: /#1f1d22/gi, to: '#111e26' },
  { from: /#b5b5b5/gi, to: '#9fb3be' }
];

const targetFiles = [
  'about.html', 'products.html', 'product-details.html', 'pricing.html',
  'repair-upgrade.html', 'service-details.html', 'order.html',
  'blog.html', 'blog-details.html', 'contact.html', 'faq.html',
  'privacy-policy.html', 'terms.html', '404.html', 'coming-soon.html',
  'maintenance.html', 'home-2.html'
];

targetFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace Header & Mobile Drawer
  const headerDrawerRegex = /<header[\s\S]*?(?:<\/div>\s*<\/div>\s*(?:<!--\s*GLOBAL SEARCH[\s\S]*?<\/div>\s*<\/div>)?)/i;
  // If standard match found:
  if (content.includes('<header id="main-navbar"')) {
    // Replace from <header id="main-navbar" up to mobile-drawer closing
    const headerRegex = /<header id="main-navbar"[\s\S]*?<\/header>(?:\s*<!-- Mobile Drawer[\s\S]*?<\/div>\s*<\/div>)?/i;
    content = content.replace(headerRegex, navbarHtml);
  }

  // Replace Footer
  if (content.includes('<footer')) {
    const footerRegex = /<footer[\s\S]*?<\/footer>/i;
    content = content.replace(footerRegex, footerHtml);
  }

  // Replace all color hexes
  colorReplacements.forEach(cr => {
    content = content.replace(cr.from, cr.to);
  });

  // Ensure body background is #0e181f
  content = content.replace(/bg-\[#19171b\]/g, 'bg-[#0e181f]');
  content = content.replace(/selection:bg-\[#d29f22\]/g, 'selection:bg-[#FD802E]');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} (${content.length} bytes)`);
});

// Update dashboard/index.html
if (fs.existsSync('dashboard/index.html')) {
  let dash = fs.readFileSync('dashboard/index.html', 'utf8');
  colorReplacements.forEach(cr => {
    dash = dash.replace(cr.from, cr.to);
  });
  dash = dash.replace(/bg-\[#19171b\]/g, 'bg-[#0e181f]');
  dash = dash.replace(/selection:bg-\[#d29f22\]/g, 'selection:bg-[#FD802E]');
  fs.writeFileSync('dashboard/index.html', dash, 'utf8');
  console.log('Updated dashboard/index.html');
}
