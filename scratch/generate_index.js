const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LAPNEST – Premium Laptop Sales, Rentals, Repair & Upgrades</title>
  <meta name="description" content="LAPNEST is South India's premier laptop showroom and ISO-standard cleanroom repair facility. Buy, sell, rent, repair and upgrade Dell, ThinkPad, MacBook, ROG, and HP laptops.">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  
  <!-- Preconnect Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Compiled Tailwind & Custom CSS -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="bg-[#0e181f] text-white selection:bg-[#FD802E] selection:text-white antialiased overflow-x-hidden min-h-screen flex flex-col">

  <!-- Interactive Scroll Progress Bar -->
  <div id="scroll-progress"></div>

  <!-- STICKY NAVBAR (FULL-WIDTH BRAND HEADER) -->
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
  </div>

  <!-- MAIN CONTENT -->
  <main class="flex-grow">

    <!-- SECTION 1: HERO SECTION (CINEMATIC TECH STAGE WITH BIG FLOATING LAPTOP & STRICT PADDING CHECK) -->
    <section id="hero-section" class="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0 bg-[#0e181f]">
      
      <!-- Interactive Canvas Micro-Particles -->
      <canvas id="hero-particles" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

      <!-- Ambient Glow Spheres (Contained in hero bounds) -->
      <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#233D4C]/35 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Hero Content Container (STRICT LEFT & RIGHT PADDING GUARANTEE) -->
      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Hero Column: Typography, Badges, CTAs, Trust Counters (lg:col-span-6) -->
        <div class="lg:col-span-6 space-y-6 text-center lg:text-left gsap-fade-up">
          
          <!-- Pill Trust Tag -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] shadow-sm backdrop-blur-md">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD802E] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#FD802E]"></span>
            </span>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#9fb3be]">
              LAPNEST • <span class="text-[#FD802E]">BUY • SELL • REPAIR • RENT</span>
            </span>
          </div>

          <!-- Bold Heading (Section 5 Requirement) -->
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Discover Your <br>
              <span class="gold-gradient-text">Next-Level Performance.</span>
            </h1>
          </div>

          <!-- Description (Section 5 Requirement) -->
          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Explore premium laptops, powerful gaming machines and professional computing solutions. Buy, sell, rent and repair with LAPNEST.
          </p>

          <!-- Animated CTA Buttons (Section 5 Requirement) -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="products.html" 
               class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>Explore Laptops</span>
              <svg class="w-4 h-4 rtl-flip text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <a href="repair-upgrade.html" 
               class="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
              <svg class="w-4 h-4 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              <span>Book a Service</span>
            </a>
          </div>

          <!-- Trust Badges & Counters -->
          <div class="pt-6 grid grid-cols-3 gap-4 border-t border-[#233D4C]/60 max-w-lg mx-auto lg:mx-0">
            <div>
              <p class="text-xl sm:text-2xl font-black text-white counter-val" data-target="25000" data-suffix="+">25,000+</p>
              <p class="text-xs text-[#9fb3be] mt-0.5">Laptops Handled</p>
            </div>
            <div>
              <p class="text-xl sm:text-2xl font-black text-[#FD802E] counter-val" data-target="99" data-suffix="%">99%</p>
              <p class="text-xs text-[#9fb3be] mt-0.5">Repair Success</p>
            </div>
            <div>
              <p class="text-xl sm:text-2xl font-black text-white counter-val" data-target="49" data-suffix="★">4.9★</p>
              <p class="text-xs text-[#9fb3be] mt-0.5">Customer Rating</p>
            </div>
          </div>

        </div>

        <!-- Right Hero Column: BIG FLOATING LAPTOP (STRICTLY CONTAINED WITHIN PADDING) -->
        <div class="lg:col-span-6 flex justify-center items-center relative py-4 lg:py-8">
          
          <!-- Concentric Ambient Glow Center Backdrop (Centered inside column, non-overflowing) -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FD802E]/20 via-[#233D4C]/40 to-transparent blur-2xl"></div>
          </div>

          <!-- Big Floating Laptop Container (Capped width with responsive max-width to strictly stay inside container padding) -->
          <div id="hero-floating-container" class="relative z-10 w-full max-w-[480px] lg:max-w-[530px] flex items-center justify-center">
            
            <!-- High-Res Floating Laptop with Transparent Background & Gentle Float Physics -->
            <img src="assets/images/hero/hero-laptop-floating.png" 
                 alt="LAPNEST High-Performance Floating Laptop" 
                 class="w-full max-w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] animate-float-slow select-none transform hover:scale-105 transition-transform duration-500">

            <!-- Floating Trust Pill in Bottom Corner -->
            <a href="products.html" class="absolute -bottom-2 right-2 sm:bottom-2 sm:right-4 z-20 px-4 py-2 rounded-xl bg-[#172731]/95 border border-[#233D4C] backdrop-blur-md shadow-xl flex items-center gap-3 text-white group hover:border-[#FD802E] transition-all">
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

      <!-- Subtle Animated Scroll-Down Indicator -->
      <a href="#featured-categories" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors group">
        <span>Scroll to Explore</span>
        <div class="w-5 h-8 rounded-full border-2 border-[#233D4C] group-hover:border-[#FD802E] flex justify-center p-1 transition-colors">
          <div class="w-1.5 h-2 bg-[#FD802E] rounded-full animate-bounce"></div>
        </div>
      </a>

    </section>

    <!-- SECTION 2: FEATURED CATEGORIES (5 IMAGE-BASED EQUAL HEIGHT CARDS) -->
    <section id="featured-categories" class="py-20 lg:py-24 bg-[#111e26] border-t border-[#233D4C]/40">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <!-- Section Heading -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Curated Catalog</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Explore By Category</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Find precision-engineered machines for every computing workload.</p>
          </div>
          <a href="products.html" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FD802E] hover:underline">
            <span>View All Categories</span>
            <svg class="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

        <!-- 5 Category Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 equal-card-grid">
          
          <!-- Category 1: Gaming Laptops -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/general/category-gaming.jpg" alt="Gaming Laptops" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FD802E] text-white">High FPS</span>
            </div>
            <div class="equal-card-body p-5">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Gaming Laptops</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">GeForce RTX 40-Series power with 165Hz+ high refresh displays for elite gamers.</p>
              <div class="equal-card-footer">
                <a href="products.html?cat=gaming" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#233D4C] group-hover:bg-[#FD802E] text-white flex items-center justify-center gap-2 transition-colors">
                  <span>Explore Gaming</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Category 2: Business Laptops -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/general/category-business.jpg" alt="Business Laptops" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-[#FD802E]">Enterprise</span>
            </div>
            <div class="equal-card-body p-5">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Business Laptops</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Mil-spec durability, TPM 2.0 security, and all-day battery life for corporate leaders.</p>
              <div class="equal-card-footer">
                <a href="products.html?cat=business" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#233D4C] group-hover:bg-[#FD802E] text-white flex items-center justify-center gap-2 transition-colors">
                  <span>Explore Business</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Category 3: Student Laptops -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/general/category-student.jpg" alt="Student Laptops" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FD802E] text-white">Student Deals</span>
            </div>
            <div class="equal-card-body p-5">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Student Laptops</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Lightweight laptops with reliable fast SSD storage for coding, coursework, and college.</p>
              <div class="equal-card-footer">
                <a href="products.html?cat=student" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#233D4C] group-hover:bg-[#FD802E] text-white flex items-center justify-center gap-2 transition-colors">
                  <span>Explore Student</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Category 4: Professional Laptops -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/general/category-pro.jpg" alt="Professional Workstations" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-[#FD802E]">Creator 4K</span>
            </div>
            <div class="equal-card-body p-5">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Professional Workstations</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Color-accurate displays and ECC RAM support for 3D renderers, video editors, and engineers.</p>
              <div class="equal-card-footer">
                <a href="products.html?cat=professional" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#233D4C] group-hover:bg-[#FD802E] text-white flex items-center justify-center gap-2 transition-colors">
                  <span>Explore Creator</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Category 5: Laptop Accessories -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/general/category-accessories.jpg" alt="Laptop Accessories" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-white">Genuine OEM</span>
            </div>
            <div class="equal-card-body p-5">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Laptop Accessories</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Original USB-C GaN adapters, mechanical keyboards, ergonomic stands, and sleeves.</p>
              <div class="equal-card-footer">
                <a href="products.html?cat=accessories" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#233D4C] group-hover:bg-[#FD802E] text-white flex items-center justify-center gap-2 transition-colors">
                  <span>Explore Gear</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 3: BEST-SELLING PRODUCTS (6 PREVIEW LAPTOP CARDS WITH INR PRICING) -->
    <section id="best-sellers" class="py-20 lg:py-24 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <!-- Section Heading -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Flagship Inventory</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Best-Selling Laptops</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Certified genuine laptops thoroughly tested through 45-point hardware lab diagnostics.</p>
          </div>
          <div class="mt-4 md:mt-0 flex items-center gap-3">
            <a href="products.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] transition-all">
              <span>View Full Inventory (24+ Models)</span>
              <svg class="w-4 h-4 rtl-flip text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        <!-- 6 Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 equal-card-grid">
          
          <!-- Product 1: Dell Inspiron -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/dell-inspiron.jpg" alt="Dell Inspiron 15" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">12% OFF</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 4.8
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">Dell</span>
                <span>Inspiron 15 3530</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">Dell Inspiron 15 Slim</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">Core i5</span>13th Gen</div>
                <div><span class="block text-white font-semibold">16GB</span>DDR4</div>
                <div><span class="block text-white font-semibold">512GB</span>NVMe SSD</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹58,990</span>
                <span class="text-xs text-gray-400 line-through">₹66,990</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">Free Bag + Mouse</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=1" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=dell-inspiron" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product 2: HP Pavilion -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/hp-pavilion.jpg" alt="HP Pavilion 14" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">15% OFF</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 4.7
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">HP</span>
                <span>Pavilion Plus 14</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">HP Pavilion 14 OLED</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">Ryzen 7</span>7840U</div>
                <div><span class="block text-white font-semibold">16GB</span>LPDDR5</div>
                <div><span class="block text-white font-semibold">1TB</span>PCIe Gen4</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹72,490</span>
                <span class="text-xs text-gray-400 line-through">₹84,990</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">OLED 2.8K</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=2" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=hp-pavilion" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product 3: Lenovo ThinkPad -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/lenovo-thinkpad.jpg" alt="Lenovo ThinkPad E14" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">BEST VALUE</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 4.9
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">Lenovo</span>
                <span>ThinkPad E14 Gen 5</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">Lenovo ThinkPad Pro</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">Core i7</span>1355U</div>
                <div><span class="block text-white font-semibold">24GB</span>Dual Ch.</div>
                <div><span class="block text-white font-semibold">1TB</span>NVMe M.2</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹79,990</span>
                <span class="text-xs text-gray-400 line-through">₹92,000</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">3-Yr Onsite</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=3" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=lenovo-thinkpad" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product 4: ASUS ROG Strix -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/asus-rog.jpg" alt="ASUS ROG Strix G16" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">GAMING RIG</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 5.0
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">ASUS</span>
                <span>ROG Strix G16 (2024)</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">ASUS ROG Strix G16</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">i9-13980HX</span>24-Core</div>
                <div><span class="block text-white font-semibold">RTX 4070</span>8GB VRAM</div>
                <div><span class="block text-white font-semibold">32GB</span>DDR5 5600</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹1,54,990</span>
                <span class="text-xs text-gray-400 line-through">₹1,74,990</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">240Hz Nebula</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=4" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=asus-rog" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product 5: Acer Nitro Series -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/acer-nitro.jpg" alt="Acer Nitro V 15" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">HOT DEAL</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 4.8
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">Acer</span>
                <span>Nitro V 15 ANV15</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">Acer Nitro V 15</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">Core i5</span>13420H</div>
                <div><span class="block text-white font-semibold">RTX 4050</span>6GB GDDR6</div>
                <div><span class="block text-white font-semibold">16GB</span>DDR5</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹73,990</span>
                <span class="text-xs text-gray-400 line-through">₹86,990</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">144Hz IPS</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=5" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=acer-nitro" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product 6: Apple MacBook Series -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-60 bg-[#111e26] p-6 flex items-center justify-center overflow-hidden">
              <img src="assets/images/products/apple-macbook.jpg" alt="Apple MacBook Air M2" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white">PREMIUM</span>
              <span class="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-[#FD802E] bg-[#172731]/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                ★ 4.9
              </span>
            </div>
            <div class="equal-card-body p-6">
              <div class="flex items-center justify-between text-xs text-[#9fb3be]">
                <span class="font-bold uppercase tracking-wider text-[#FD802E]">Apple</span>
                <span>MacBook Air 13-inch</span>
              </div>
              <h3 class="text-lg font-bold text-white mt-2 group-hover:text-[#FD802E] transition-colors">Apple MacBook Air M2</h3>
              <div class="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#0e181f]/60 text-[11px] text-[#9fb3be] border border-[#233D4C]/40">
                <div><span class="block text-white font-semibold">Apple M2</span>8-Core CPU</div>
                <div><span class="block text-white font-semibold">16GB</span>Unified</div>
                <div><span class="block text-white font-semibold">512GB</span>Fast SSD</div>
              </div>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-2xl font-black text-white">₹1,07,990</span>
                <span class="text-xs text-gray-400 line-through">₹1,19,900</span>
                <span class="text-[11px] text-[#FD802E] font-semibold ml-auto">18 Hr Battery</span>
              </div>
              <div class="equal-card-footer grid grid-cols-2 gap-3">
                <a href="product-details.html?id=6" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#233D4C] hover:bg-[#111e26] text-white text-center transition-colors">View Details</a>
                <a href="order.html?product=apple-macbook" class="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white text-center transition-colors shadow-sm">Order Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 4: WHY CHOOSE LAPNEST (6 FEATURE CARDS WITH MODERN ICONS & HOVER EFFECTS) -->
    <section id="why-choose-us" class="py-20 lg:py-24 bg-[#111e26] border-t border-[#233D4C]/40">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">The LAPNEST Standard</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Why Customers Choose Us</h2>
          <p class="text-sm text-[#9fb3be] mt-3">We engineer total confidence into every laptop transaction with unmatched technical precision.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature 1: Genuine Products -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">100% Genuine Products</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Direct manufacturer partnerships and sealed retail warranties. Every component is verifiable and authentic OEM grade.</p>
          </div>

          <!-- Feature 2: Expert Technicians -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Expert Certified Technicians</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Master technicians specialized in micro-soldering, BGA rework, trace repairs, and high-frequency motherboard architecture.</p>
          </div>

          <!-- Feature 3: Affordable Pricing -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Affordable Transparent Pricing</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Strict zero hidden charge policy. Free comprehensive diagnosis before repair, student discounts, and low-cost monthly rentals.</p>
          </div>

          <!-- Feature 4: Fast Service -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Fast Turnaround Service</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Same-day express screen and battery replacements. 90-minute RAM/SSD upgrades with full clone and zero data loss guarantee.</p>
          </div>

          <!-- Feature 5: Warranty Support -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Robust Warranty Support</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Up to 12 months comprehensive warranty on serviced components and certified refurbished inventory, backed by quick replacement.</p>
          </div>

          <!-- Feature 6: Customer Satisfaction -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div class="w-14 h-14 rounded-2xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center text-[#FD802E] group-hover:scale-110 group-hover:bg-[#FD802E] group-hover:text-white transition-all duration-300 mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Customer First Satisfaction</h3>
            <p class="text-xs text-[#9fb3be] mt-3 leading-relaxed">Trusted by 25,000+ happy laptop users across Chennai. Rated 4.9★ across Google Reviews with dedicated customer care lines.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 5: REPAIR & UPGRADE SERVICES (6 CARDS WITH IMAGES & LEARN MORE LINKS) -->
    <section id="repair-services" class="py-20 lg:py-24 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Precision Cleanroom Lab</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Repair & Upgrade Services</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Same-day hardware restoration powered by ESD-safe cleanroom equipment.</p>
          </div>
          <a href="repair-upgrade.html" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FD802E] hover:underline">
            <span>Explore All Services & Pricing</span>
            <svg class="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 equal-card-grid">
          
          <!-- Service 1: Screen Replacement -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/screen-repair.jpg" alt="Screen Replacement" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FD802E] text-white">Same-Day</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Screen & Panel Replacement</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Fix cracked displays, flickering backlights, vertical lines, and color distortions with genuine FHD, OLED, and 144Hz IPS panels.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹2,499</span>
                <a href="service-details.html?service=screen" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Service 2: Battery Replacement -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/battery-replace.jpg" alt="Battery Replacement" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-[#FD802E]">OEM Grade</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Battery Replacement</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Resolve battery drain, swelling, and charge failure with high-capacity Grade-A OEM lithium cells with 1-year warranty.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹1,899</span>
                <a href="service-details.html?service=battery" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Service 3: RAM Upgrade -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/ram-upgrade.jpg" alt="RAM Upgrade" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FD802E] text-white">45-Min Express</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">RAM Memory Upgrades</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Boost multitasking and eliminate stutter with dual-channel high-speed DDR4 (3200MHz) and DDR5 (5600MHz) expansions.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹1,499</span>
                <a href="service-details.html?service=ram" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Service 4: SSD Upgrade -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/ssd-upgrade.jpg" alt="SSD Upgrade" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-[#FD802E]">Gen4 NVMe</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">NVMe SSD Storage Expansion</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Multiply system boot speeds by 10x with blazing-fast PCIe Gen4 NVMe drives (500GB / 1TB / 2TB) with complete OS cloning.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹1,999</span>
                <a href="service-details.html?service=ssd" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Service 5: Keyboard Repair -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/keyboard-repair.jpg" alt="Keyboard Repair" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FD802E] text-white">RGB & Backlit</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Keyboard & Trackpad Repair</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Fix liquid-spill damaged keys, unresponsive trackpads, and malfunctioning backlights with genuine factory-fitted keyboards.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹1,299</span>
                <a href="service-details.html?service=keyboard" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Service 6: Motherboard Repair -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all duration-300 tilt-card">
            <div class="relative h-48 overflow-hidden">
              <img src="assets/images/services/motherboard-repair.jpg" alt="Motherboard Repair" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-[#172731] via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#233D4C] text-[#FD802E]">Micro-BGA Lab</span>
            </div>
            <div class="equal-card-body p-6">
              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors">Logic Board & Chip Repair</h3>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">Revive dead laptops with specialized short-circuit hunting, power IC replacement, BIOS re-programming, and GPU reballing.</p>
              <div class="equal-card-footer flex items-center justify-between">
                <span class="text-xs text-[#FD802E] font-semibold">From ₹2,999</span>
                <a href="service-details.html?service=motherboard" class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors">
                  <span>Learn More</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 6: LATEST DEALS (4 PROMOTIONAL BANNERS) -->
    <section id="latest-deals" class="py-20 lg:py-24 bg-[#111e26] border-t border-[#233D4C]/40">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Limited Time Promos</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Latest Deals & Special Offers</h2>
          <p class="text-sm text-[#9fb3be] mt-3">High-value bundles, exclusive student discounts, and enterprise refurbished offers.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Banner 1: Gaming Laptop Deals -->
          <div class="relative rounded-2xl bg-[#172731] border border-[#233D4C] p-8 overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col justify-between min-h-[260px] tilt-card">
            <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
              <img src="assets/images/general/deals-gaming.jpg" alt="Gaming Deals" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-r from-[#172731] via-[#172731]/80 to-transparent"></div>
            </div>
            <div class="relative z-10 space-y-3 max-w-md">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white uppercase tracking-wider inline-block">Heavy Discount</span>
              <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors">Gaming Laptop Flash Sale</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Save up to ₹25,000 on RTX 40-Series laptops. Includes bundled high-DPI gaming mouse, cooling pad, and Steam gift card voucher.</p>
            </div>
            <div class="relative z-10 pt-6">
              <a href="products.html?cat=gaming" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#233D4C] hover:bg-[#FD802E] text-white transition-colors">
                <span>Claim Gaming Offer</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Banner 2: Student Laptop Deals -->
          <div class="relative rounded-2xl bg-[#172731] border border-[#233D4C] p-8 overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col justify-between min-h-[260px] tilt-card">
            <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
              <img src="assets/images/general/deals-student.jpg" alt="Student Deals" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-r from-[#172731] via-[#172731]/80 to-transparent"></div>
            </div>
            <div class="relative z-10 space-y-3 max-w-md">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider inline-block">Campus Special</span>
              <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors">Student Extra 15% Rebate</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Present your active college ID for an extra 15% instant rebate on any Dell, HP, or Lenovo laptop plus free backpack and warranty extension.</p>
            </div>
            <div class="relative z-10 pt-6">
              <a href="products.html?cat=student" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#233D4C] hover:bg-[#FD802E] text-white transition-colors">
                <span>View Student Laptops</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Banner 3: Refurbished Laptops -->
          <div class="relative rounded-2xl bg-[#172731] border border-[#233D4C] p-8 overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col justify-between min-h-[260px] tilt-card">
            <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
              <img src="assets/images/general/deals-refurbished.jpg" alt="Refurbished ThinkPads" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-r from-[#172731] via-[#172731]/80 to-transparent"></div>
            </div>
            <div class="relative z-10 space-y-3 max-w-md">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#FD802E] text-white uppercase tracking-wider inline-block">Certified Grade-A</span>
              <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors">Refurbished ThinkPads from ₹18,999</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Ex-corporate Lenovo ThinkPads restored to immaculate Grade-A condition. 100% health batteries, new SSDs, and 1-year replacement warranty.</p>
            </div>
            <div class="relative z-10 pt-6">
              <a href="products.html?cat=refurbished" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#233D4C] hover:bg-[#FD802E] text-white transition-colors">
                <span>Browse Refurbished</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Banner 4: Laptop Rentals -->
          <div class="relative rounded-2xl bg-[#172731] border border-[#233D4C] p-8 overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col justify-between min-h-[260px] tilt-card">
            <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
              <img src="assets/images/general/deals-rental.jpg" alt="Laptop Rentals" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-r from-[#172731] via-[#172731]/80 to-transparent"></div>
            </div>
            <div class="relative z-10 space-y-3 max-w-md">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider inline-block">Flexible Fleet</span>
              <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors">Corporate Rentals from ₹1,999/mo</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Equip your software team, hackathon, or temporary project with high-performance laptops. Zero deposit for registered IT firms in Chennai.</p>
            </div>
            <div class="relative z-10 pt-6">
              <a href="pricing.html#rentals" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#233D4C] hover:bg-[#FD802E] text-white transition-colors">
                <span>View Rental Plans</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 7: TESTIMONIALS (INTERACTIVE REVIEWS WITH AVATARS & STAR RATINGS) -->
    <section id="testimonials" class="py-20 lg:py-24 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Verified Customer Stories</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">What Our Clients Say</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Real feedback from professionals, developers, and gamers across South India.</p>
          </div>
          <div class="mt-4 md:mt-0 flex items-center gap-2">
            <button id="prev-testimonial" class="p-2.5 rounded-xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] text-white transition-colors" aria-label="Previous Review">
              <svg class="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button id="next-testimonial" class="p-2.5 rounded-xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] text-white transition-colors" aria-label="Next Review">
              <svg class="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Testimonial 1 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "My MacBook Pro logic board suffered a severe coffee spill. Other service centers told me it was completely dead and demanded ₹48,000 for replacement. LAPNEST cleanroom technicians fixed the micro-trace short circuits within 36 hours for ₹7,500! Absolutely miraculous service."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#FD802E]/20 border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                AK
              </div>
              <div>
                <p class="text-sm font-bold text-white">Anand Krishnan</p>
                <p class="text-[11px] text-[#FD802E]">Full Stack Architect, OMR Chennai</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "We rented 25 high-end Dell Latitude laptops for our AI boot-camp in Sholinganallur. Every machine was pre-configured with Ubuntu, 32GB RAM, and pristine screens. Zero downtime, immediate technical support, and completely hassle-free paperwork."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#233D4C] border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                PR
              </div>
              <div>
                <p class="text-sm font-bold text-white">Pooja Ramanathan</p>
                <p class="text-[11px] text-[#FD802E]">Operations VP, TechSprint AI</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "Bought a refurbished ThinkPad T14 for my college coding projects. The laptop looks practically brand new with over 96% battery health and a 1-year warranty. Delivered same day in Chennai with free laptop sleeve. Couldn't be happier!"
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#FD802E]/20 border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                VS
              </div>
              <div>
                <p class="text-sm font-bold text-white">Vignesh Sundaram</p>
                <p class="text-[11px] text-[#FD802E]">CS Student, Anna University</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 8: NEWSLETTER AND CTA ("READY TO UPGRADE YOUR TECHNOLOGY?") -->
    <section id="newsletter" class="py-20 bg-gradient-to-b from-[#111e26] to-[#0e181f] border-t border-[#233D4C]/50 relative overflow-hidden">
      
      <!-- Background Ambient Glow -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div class="w-96 h-96 rounded-full bg-[#FD802E]/10 blur-3xl"></div>
      </div>

      <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 gsap-fade-up">
        
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FD802E]/15 border border-[#FD802E]/30 text-[#FD802E]">
          Stay Ahead of the Curve
        </span>

        <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ready to Upgrade Your Technology?
        </h2>

        <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto leading-relaxed">
          Join 15,000+ tech professionals who receive our weekly hardware benchmark reports, seasonal inventory drops, and exclusive service discounts.
        </p>

        <!-- Newsletter Subscription Form -->
        <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4" onsubmit="event.preventDefault(); alert('Thank you for subscribing to LAPNEST updates!');">
          <input type="email" required placeholder="Enter your email address..." 
                 class="flex-1 bg-[#172731] border border-[#233D4C] focus:border-[#FD802E] text-white px-5 py-3.5 rounded-xl focus:outline-none text-sm transition-colors">
          <button type="submit" 
                  class="px-7 py-3.5 rounded-xl font-bold text-sm bg-[#FD802E] hover:bg-[#ff9248] text-white transition-all shadow-lg shadow-[#FD802E]/25">
            Subscribe
          </button>
        </form>

        <p class="text-xs text-[#9fb3be] pt-2">
          Strict no-spam policy. Unsubscribe anytime with 1-click.
        </p>

        <!-- Direct Contact Callout -->
        <div class="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9fb3be] border-t border-[#233D4C]/40 max-w-lg mx-auto">
          <span>Need immediate advice?</span>
          <a href="contact.html" class="text-white hover:text-[#FD802E] font-semibold underline">Contact Tech Support</a>
          <span>•</span>
          <a href="order.html" class="text-[#FD802E] font-bold hover:underline">Instant Order Desk ↗</a>
        </div>

      </div>
    </section>

  </main>

  <!-- FOOTER (4-COLUMN EDITORIAL TECH FOOTER MATCHING HOOKPOINT REFERENCE) -->
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
  </footer>

  <!-- Scripts -->
  <script src="assets/js/theme.js"></script>
  <script src="assets/js/rtl.js"></script>
  <script src="assets/js/navbar.js"></script>
  <script src="assets/js/three-d.js"></script>
  <script src="assets/js/animations.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
`;

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully wrote index.html, size:', indexHtml.length);
