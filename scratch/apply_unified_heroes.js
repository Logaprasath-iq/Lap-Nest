const fs = require('fs');

// 1. Unified Hero Section definitions for the 6 inner pages
const heroes = {
  'about.html': `    <!-- UNIFIED HERO SECTION: ABOUT US -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">About Us</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>ESTABLISHED 2018 • CHENNAI OMR TECH CORRIDOR</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Pioneering Certified <br>
            <span class="gold-gradient-text">Laptop Solutions in Chennai.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Founded with a vision to bring ISO-standard cleanroom diagnostic repairs, genuine OEM hardware, and fair laptop commerce to South India. Over 25,000 systems serviced with 99% logic board revival rates.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="#company-story" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Explore Our Story
            </a>
            <a href="#team-section" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              Meet The Technicians
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">25,000+</p>
              <p class="text-[11px] text-[#9fb3be]">Machines Restored</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">12+ Master</p>
              <p class="text-[11px] text-[#9fb3be]">Cleanroom Engineers</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">ISO 9001</p>
              <p class="text-[11px] text-[#9fb3be]">Certified Facility</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/general/showroom.jpg" alt="LAPNEST Flagship Showroom" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  LAPNEST Flagship Showroom
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">OMR Sholinganallur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  'pricing.html': `    <!-- UNIFIED HERO SECTION: PRICING & TARIFFS -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Pricing & Rentals</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>TRANSPARENT TARIFFS • NO HIDDEN CHARGES</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Clear, Upfront Pricing for <br>
            <span class="gold-gradient-text">Sales, Rentals & Care.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Honest, upfront hardware pricing. Compare component upgrade costs, explore monthly laptop rental agreements, and view fixed repair estimates with complete warranty backing.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="#rental-plans" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Explore Rental Plans
            </a>
            <a href="#repair-pricing" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              View Repair Tariffs
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">₹0 Fee</p>
              <p class="text-[11px] text-[#9fb3be]">Comprehensive Diagnostic</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">₹1,999/mo</p>
              <p class="text-[11px] text-[#9fb3be]">Monthly Rentals From</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">100%</p>
              <p class="text-[11px] text-[#9fb3be]">Written Warranty</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/general/deals-rental.jpg" alt="Transparent Hardware Pricing" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Fixed Quotation Guarantee
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Zero Surprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  'products.html': `    <!-- UNIFIED HERO SECTION: PRODUCTS CATALOG -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Products Catalog</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>CERTIFIED MULTI-BRAND HARDWARE INVENTORY</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Discover Precision Laptops for <br>
            <span class="gold-gradient-text">Creators & Gamers.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Curated performance inventory from Dell, HP, Lenovo ThinkPad, ASUS ROG, Acer Nitro, and Apple. Every machine is rigorously benchmarked, calibrated, and ready for immediate deployment.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="#product-grid" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Browse 24+ Models
            </a>
            <a href="#brand-filters" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              Filter By Brand
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">45-Point</p>
              <p class="text-[11px] text-[#9fb3be]">Hardware QA Check</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">Same-Day</p>
              <p class="text-[11px] text-[#9fb3be]">Dispatch in Chennai</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">100% OEM</p>
              <p class="text-[11px] text-[#9fb3be]">Genuine Components</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/products/asus-rog.jpg" alt="High-Performance Laptops" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Gaming & Workstations Fleet
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">RTX 40-Series Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  'blog.html': `    <!-- UNIFIED HERO SECTION: TECH BLOG -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Tech Blog</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>ENGINEERING LAB JOURNAL • ARCHITECTURE & DEEP DIVES</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Hardware Architecture, Thermal <br>
            <span class="gold-gradient-text">Guides & Benchmarks.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            In-depth technical guides written by chip-level repair technicians. From PCIe Gen4 NVMe thermal throttling to BGA reballing case studies and enterprise hardware procurement tips.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="#featured-article" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Read Latest Deep-Dive
            </a>
            <a href="#article-categories" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              Browse Topics
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">50+</p>
              <p class="text-[11px] text-[#9fb3be]">Published Guides</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">Real Data</p>
              <p class="text-[11px] text-[#9fb3be]">Lab Thermal Benchmarks</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">100%</p>
              <p class="text-[11px] text-[#9fb3be]">Engineer Authored</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/blog/blog-nvme.jpg" alt="Hardware Engineering Journal" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Cleanroom Hardware Journal
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Edition 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  'contact.html': `    <!-- UNIFIED HERO SECTION: CONTACT & STOREFRONT -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Contact & Location</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>FLAGSHIP STORE & CLEANROOM LAB • CHENNAI OMR</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Visit Our Chennai Hub or <br>
            <span class="gold-gradient-text">Speak to an Engineer.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Located conveniently on the Rajiv Gandhi Salai IT corridor in Sholinganallur. Walk in for instant hardware diagnostics, rental fleet handovers, or speak directly with our senior technicians.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Get Driving Directions
            </a>
            <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              WhatsApp Desk
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">09:30 - 20:30</p>
              <p class="text-[11px] text-[#9fb3be]">Mon - Sat Hours</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">Express</p>
              <p class="text-[11px] text-[#9fb3be]">Live Diagnostic Counter</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">Free</p>
              <p class="text-[11px] text-[#9fb3be]">Customer Parking</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/general/chennai-store.jpg" alt="LAPNEST Tech Plaza Chennai" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Tech Plaza Flagship Store
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Sholinganallur OMR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  'repair-upgrade.html': `    <!-- UNIFIED HERO SECTION: REPAIR & UPGRADE -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Actions, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Repair & Upgrade</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>ESD-SAFE CLEANROOM LAB • CHIP-LEVEL RESTORATION</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Cleanroom Precision Diagnostics & <br>
            <span class="gold-gradient-text">Rapid Hardware Upgrades.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            South India's premier multi-brand repair lab. From micro-soldering liquid-damaged motherboards to 90-minute NVMe SSD and RAM expansions with 100% data preservation guarantee.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a href="order.html?service=diagnostic" class="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all">
              Book Diagnostic Slot
            </a>
            <a href="#services-list" class="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all">
              View Repair Rates
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">99%</p>
              <p class="text-[11px] text-[#9fb3be]">Logic Board Revival Rate</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">Same-Day</p>
              <p class="text-[11px] text-[#9fb3be]">Screen & Battery Swap</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">Class 100</p>
              <p class="text-[11px] text-[#9fb3be]">Cleanroom Standards</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/services/screen-repair.jpg" alt="Laptop Cleanroom Repair" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Cleanroom Logic Lab
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Same-Day Express</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`
};

// 2. Updated clean right controls for all pages
const cleanRightControls = `      <!-- Right Controls: RTL Toggle, Theme Toggle, Order CTA -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        
        <!-- RTL/LTR Toggle with Clean Arrow -->
        <button type="button" class="rtl-toggle-btn px-3 py-2 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all flex items-center gap-1.5" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          <span class="dir-badge text-[11px] tracking-wider">RTL</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button type="button" class="theme-toggle-btn p-2.5 rounded-xl text-[#9fb3be] hover:text-[#FD802E] bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all flex items-center justify-center" title="Toggle Dark/Light Mode" aria-label="Toggle Dark/Light Mode">
          <svg class="sun-icon w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
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
      </div>`;

// 3. Balanced Footer
const balancedFooter = `  <!-- FOOTER (BALANCED 4-COLUMN LAYOUT MATCHING REFERENCE DESIGN) -->
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

// All root HTML files
const allFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Update Right Controls in Header
  const rightControlsRegex = /<!-- Right Controls[\s\S]*?<!-- Mobile Hamburger Toggle -->[\s\S]*?<\/div>/i;
  if (rightControlsRegex.test(content)) {
    content = content.replace(rightControlsRegex, cleanRightControls);
  }

  // Update Footer
  const footerRegex = /<footer[\s\S]*?<\/footer>/i;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, balancedFooter);
  }

  // Replace hero section if one of the 6 targeted pages
  if (heroes[file]) {
    // Find first <section class="...hero..." ...> or first <section ...> after <main>
    const heroRegex = /<section[^>]*class=\"[^\"]*(?:page-hero|hero|pt-32)[^\"]*\"[\s\S]*?<\/section>/i;
    if (heroRegex.test(content)) {
      content = content.replace(heroRegex, heroes[file]);
      console.log(`Replaced hero section in ${file}`);
    } else {
      // Try replacing first section in main
      const firstSectionRegex = /<section[\s\S]*?<\/section>/i;
      content = content.replace(firstSectionRegex, heroes[file]);
      console.log(`Replaced first section in ${file} with unified hero`);
    }
  }

  // Replace any lingering dark green from previous themes
  content = content.replace(/#0B2B26/gi, '#0e181f');
  content = content.replace(/#051F20/gi, '#0e181f');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed ${file} (${content.length} bytes)`);
});
