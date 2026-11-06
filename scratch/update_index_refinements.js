const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove Cart Button and clean RTL button in Header
const oldRightControls = `      <!-- Right Controls: Shopping Bag, RTL with Arrow Symbol, Theme Toggle, Order Button -->
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
        </button>`;

const newRightControls = `      <!-- Right Controls: RTL Toggle, Theme Toggle, Order CTA -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        
        <!-- RTL/LTR Toggle with Clean Arrow -->
        <button type="button" class="rtl-toggle-btn px-3 py-2 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all flex items-center gap-1.5" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          <span class="dir-badge text-[11px] tracking-wider">RTL</span>
        </button>`;

if (html.includes(oldRightControls)) {
  html = html.replace(oldRightControls, newRightControls);
  console.log('Replaced right controls in index.html');
} else {
  console.log('Right controls pattern not matched directly, checking regex...');
  const rightControlsRegex = /<!-- Right Controls[\s\S]*?<!-- Dark\/Light Theme Toggle -->/;
  html = html.replace(rightControlsRegex, newRightControls + '\n\n        <!-- Dark/Light Theme Toggle -->');
}

// 2. Big floating & rotating laptop hero container in index.html
const oldHeroRightCol = /<!-- Right Hero Column: BIG FLOATING LAPTOP[\s\S]*?<!-- Subtle Animated Scroll-Down Indicator -->/i;
const newHeroRightCol = `<!-- Right Hero Column: BIG FLOATING & ROTATING LAPTOP -->
        <div class="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-10">
          
          <!-- Concentric Ambient Glow Center Backdrop -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-tr from-[#FD802E]/25 via-[#233D4C]/45 to-transparent blur-3xl"></div>
          </div>

          <!-- Big Floating & Rotating Laptop Container -->
          <div id="hero-floating-container" class="relative z-10 w-full max-w-[560px] lg:max-w-[640px] xl:max-w-[680px] flex items-center justify-center perspective-1500">
            
            <!-- Big High-Res Floating & 3D Rotating Laptop -->
            <img src="assets/images/hero/hero-laptop-floating.png" 
                 alt="LAPNEST High-Performance Floating Laptop" 
                 class="w-full max-w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] animate-float-rotate select-none transition-transform duration-500 hover:scale-105">

            <!-- Floating Trust Pill in Bottom Corner -->
            <a href="products.html" class="absolute -bottom-2 right-2 sm:bottom-2 sm:right-4 z-20 px-4 py-2 rounded-xl bg-[#172731]/95 border border-[#233D4C] backdrop-blur-md shadow-2xl flex items-center gap-3 text-white group hover:border-[#FD802E] transition-all">
              <div class="text-left">
                <p class="text-xs font-black text-white">4.9 / 5 RATING</p>
                <p class="text-[10px] text-[#FD802E]">14,000+ Restored Machines</p>
              </div>
              <span class="w-7 h-7 rounded-lg bg-[#233D4C] flex items-center justify-center text-[#FD802E] group-hover:bg-[#FD802E] group-hover:text-white transition-colors font-bold text-xs">
                ↗
              </span>
            </a>

          </div>

        </div>

      </div>

      <!-- Subtle Animated Scroll-Down Indicator -->`;

html = html.replace(oldHeroRightCol, newHeroRightCol);

// 3. Balanced Equal-Height Footer
const oldFooterRegex = /<footer class="bg-\[#0e181f\][\s\S]*?<\/footer>/i;
const newFooter = `  <!-- FOOTER (BALANCED 4-COLUMN LAYOUT MATCHING REFERENCE DESIGN) -->
  <footer class="bg-[#0e181f] border-t border-[#233D4C]/60 pt-16 pb-12 text-[#9fb3be]">
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      <!-- 4 Columns Grid with Equal Vertical Balance -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 items-start">
        
        <!-- Column 1: Brand Info & Socials (lg:col-span-4) -->
        <div class="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
          <div>
            <a href="index.html" class="inline-block mb-3">
              <img src="assets/images/logo/logo-dark.svg" alt="LAPNEST" class="brand-logo-img h-10 w-auto">
            </a>
            <p class="text-xs leading-relaxed text-[#9fb3be] pr-4">
              India's dedicated premier laptop sales, certified refurbishing, corporate rentals, and cleanroom motherboard repair facility. Serving creators, gamers, and enterprises across South India.
            </p>
          </div>

          <!-- 4 Circular Social Icon Pills with Colored Borders (WhatsApp, Insta, X, FB) -->
          <div class="pt-2">
            <p class="text-[11px] font-bold text-white uppercase tracking-wider mb-2.5">Official Channels</p>
            <div class="flex items-center gap-3">
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
        </div>

        <!-- Column 2: CATALOG & STORE (lg:col-span-2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CATALOG & STORE</h4>
          <ul class="space-y-2.5 text-xs">
            <li><a href="index.html" class="hover:text-[#FD802E] transition-colors">Home 1 (Cinematic Store)</a></li>
            <li><a href="home-2.html" class="hover:text-[#FD802E] transition-colors">Home 2 (Editorial Tech)</a></li>
            <li><a href="products.html" class="hover:text-[#FD802E] transition-colors">All Laptop Models</a></li>
            <li><a href="products.html?cat=gaming" class="hover:text-[#FD802E] transition-colors">Gaming & Workstations</a></li>
            <li><a href="products.html?cat=refurbished" class="hover:text-[#FD802E] transition-colors">Refurbished ThinkPads</a></li>
            <li><a href="pricing.html#rentals" class="hover:text-[#FD802E] transition-colors">Monthly Rental Fleet</a></li>
            <li><a href="products.html?cat=accessories" class="hover:text-[#FD802E] transition-colors">Original OEM Accessories</a></li>
          </ul>
        </div>

        <!-- Column 3: CUSTOMER SUPPORT (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CUSTOMER SUPPORT</h4>
          <ul class="space-y-2.5 text-xs">
            <li><a href="order.html" class="text-[#FD802E] font-bold hover:underline transition-colors flex items-center gap-1.5">
              <span>Your Cart & Orders</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#FD802E]/20 text-[#FD802E]">Track</span>
            </a></li>
            <li><a href="about.html" class="hover:text-[#FD802E] transition-colors">About Our Brand & Heritage</a></li>
            <li><a href="faq.html" class="hover:text-[#FD802E] transition-colors">Equipment & Pricing FAQs</a></li>
            <li><a href="repair-upgrade.html" class="hover:text-[#FD802E] transition-colors">Cleanroom Diagnostic Lab</a></li>
            <li><a href="blog.html" class="hover:text-[#FD802E] transition-colors">Hardware Buyer Guides</a></li>
            <li><a href="pricing.html" class="hover:text-[#FD802E] transition-colors">Service & Rental Tariffs</a></li>
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
            <p class="pt-1.5"><span class="text-white font-medium">Hours:</span> Mon – Sat: 09:30 AM – 08:30 PM</p>
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

html = html.replace(oldFooterRegex, newFooter);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with new right controls, big floating/rotating laptop, and balanced footer!');
