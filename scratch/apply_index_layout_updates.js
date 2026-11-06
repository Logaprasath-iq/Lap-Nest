const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. STICKY DIAGNOSTIC SECTION: Replace single card with TWO balanced cards (Phase 1,2 & Phase 3,4)
const oldStickyGridPattern = /<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">[\s\S]*?<!-- Sticky Column Left: Interactive Pinned 3D Diagnostic Visual[\s\S]*?<\/div>[\s\S]*?<!-- Right Column: 4-Phase Diagnostic Timeline/;

const newStickyLeftGrid = `<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative">
          
          <!-- Column Left: 2 Hardware Diagnostic Lab Cards (lg:col-span-5) -->
          <div id="diagnostic-visual-col" class="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            <!-- Left Card 1: Phase 01 & 02 Certification Bench (Aligned with Steps 01 & 02) -->
            <div id="diagnostic-card-phase-1-2" class="equal-card rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#FD802E] flex flex-col justify-between">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-4 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 01 & 02 Lab Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">Cleanroom Bench A</span>
              </div>

              <!-- Central 3D Laptop Display with Creative Orbital 3D Rotation -->
              <div class="my-5 relative flex items-center justify-center min-h-[190px] sm:min-h-[210px] perspective-[1000px]">
                <div class="relative animate-laptop-creative-1 transition-transform duration-700 ease-out flex items-center justify-center w-full">
                  <img src="assets/images/hero/hero-laptop-floating.png" alt="Phase 01 & 02 Hardware Inspection" class="w-full max-w-[280px] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  
                  <!-- Target Pulse Point 1: Display -->
                  <div class="pulse-target absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 2: Motherboard Micro-Trace -->
                  <div class="pulse-target absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Telemetry Specs Box -->
              <div class="pt-4 border-t border-[#233D4C]/70 mt-auto">
                <div class="flex items-center justify-between text-xs font-mono mb-2">
                  <span class="text-[#9fb3be]">Active Inspection:</span>
                  <span class="text-white font-bold">Display Spectrum & Micro-Soldering</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-[#0e181f] h-2 rounded-full overflow-hidden p-0.5 border border-[#233D4C]">
                  <div class="h-full bg-gradient-to-r from-[#FD802E] to-[#ffaa6d] rounded-full w-1/2 transition-all duration-500"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-mono text-[#9fb3be] mt-1.5">
                  <span>Phase 01: 100% Calibrated</span>
                  <span class="text-[#FD802E] font-bold">Phase 02: In Progress</span>
                </div>
              </div>
            </div>

            <!-- Left Card 2: Phase 03 & 04 Certification Bench (Aligned with Steps 03 & 04) -->
            <div id="diagnostic-card-phase-3-4" class="equal-card rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#FD802E] flex flex-col justify-between">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-4 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 03 & 04 Lab Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">Thermal & Burn-In Bench B</span>
              </div>

              <!-- Central 3D Laptop Display with Creative Orbital 3D Rotation -->
              <div class="my-5 relative flex items-center justify-center min-h-[190px] sm:min-h-[210px] perspective-[1000px]">
                <div class="relative animate-laptop-creative-2 transition-transform duration-700 ease-out flex items-center justify-center w-full">
                  <img src="assets/images/hero/hero-laptop-floating.png" alt="Phase 03 & 04 Hardware Inspection" class="w-full max-w-[280px] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  
                  <!-- Target Pulse Point 3: Thermal Liquid Metal -->
                  <div class="pulse-target absolute top-8 left-1/3 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 4: Battery & Stress Burn-In -->
                  <div class="pulse-target absolute bottom-8 right-1/3 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Telemetry Specs Box -->
              <div class="pt-4 border-t border-[#233D4C]/70 mt-auto">
                <div class="flex items-center justify-between text-xs font-mono mb-2">
                  <span class="text-[#9fb3be]">Active Inspection:</span>
                  <span class="text-white font-bold">Thermal Overhaul & 4-Hr Burn-In</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-[#0e181f] h-2 rounded-full overflow-hidden p-0.5 border border-[#233D4C]">
                  <div class="h-full bg-gradient-to-r from-[#FD802E] to-[#ffaa6d] rounded-full w-full transition-all duration-500"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-mono text-[#9fb3be] mt-1.5">
                  <span>Phase 03: -14°C Thermal Drop</span>
                  <span class="text-[#FD802E] font-bold">Phase 04: 100% Certified</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: 4-Phase Diagnostic Timeline`;

if (oldStickyGridPattern.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldStickyGridPattern, newStickyLeftGrid);
  console.log('Successfully updated Sticky Diagnostics to 2 balanced left cards!');
} else {
  console.log('Sticky grid pattern did not match directly, trying string replacement...');
  const sStart = indexHtml.indexOf('<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">');
  const sRightCol = indexHtml.indexOf('<!-- Right Column: 4-Phase Diagnostic Timeline');
  if (sStart !== -1 && sRightCol !== -1) {
    indexHtml = indexHtml.substring(0, sStart) + newStickyLeftGrid + indexHtml.substring(sRightCol + '<!-- Right Column: 4-Phase Diagnostic Timeline'.length);
    console.log('Successfully replaced sticky left column via substring indexing!');
  } else {
    console.log('Failed to locate sticky grid indices:', sStart, sRightCol);
  }
}

// 2. CENTER SECTION HEADER: Best Sellers
const oldBestSellersHeader = `<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
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
        </div>`;

const newBestSellersHeader = `<div class="text-center max-w-2xl mx-auto mb-12 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Flagship Inventory</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Best-Selling Laptops</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Certified genuine laptops thoroughly tested through 45-point hardware lab diagnostics.</p>
          <div class="mt-4">
            <a href="products.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] transition-all">
              <span>View Full Inventory (24+ Models)</span>
              <svg class="w-3.5 h-3.5 rtl-flip text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>`;

if (indexHtml.includes(oldBestSellersHeader)) {
  indexHtml = indexHtml.replace(oldBestSellersHeader, newBestSellersHeader);
  console.log('Successfully centered Best Sellers header!');
}

// 3. CENTER SECTION HEADER: Flagship Showcase
const oldFlagshipHeader = `<div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12 gsap-fade-up">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>Flagship Masterpiece Gallery</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white">Engineered For Ultra Performance</h2>
        <p class="text-sm text-[#9fb3be] mt-2 max-w-2xl">Hand-picked tier-1 ultra-performance laptops certified by LAPNEST Cleanroom Engineers.</p>
      </div>`;

const newFlagshipHeader = `<div class="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12 gsap-fade-up">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>Flagship Masterpiece Gallery</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Engineered For Ultra Performance</h2>
        <p class="text-sm text-[#9fb3be] mt-2">Hand-picked tier-1 ultra-performance laptops certified by LAPNEST Cleanroom Engineers.</p>
      </div>`;

if (indexHtml.includes(oldFlagshipHeader)) {
  indexHtml = indexHtml.replace(oldFlagshipHeader, newFlagshipHeader);
  console.log('Successfully centered Flagship Showcase header!');
}

// 4. CENTER SECTION HEADER: Repair & Upgrade Services (Image 3)
const oldServicesHeader = `<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Precision Cleanroom Lab</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Repair & Upgrade Services</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Same-day hardware restoration powered by ESD-safe cleanroom equipment.</p>
          </div>
          <a href="repair-upgrade.html" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FD802E] hover:underline">
            <span>Explore All Services & Pricing</span>
            <svg class="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>`;

const newServicesHeader = `<div class="text-center max-w-2xl mx-auto mb-12 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Precision Cleanroom Lab</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Repair & Upgrade Services</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Same-day hardware restoration powered by ESD-safe cleanroom equipment.</p>
          <div class="mt-3">
            <a href="repair-upgrade.html" class="inline-flex items-center gap-2 text-xs font-bold text-[#FD802E] hover:underline">
              <span>Explore All Services & Pricing</span>
              <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>`;

if (indexHtml.includes(oldServicesHeader)) {
  indexHtml = indexHtml.replace(oldServicesHeader, newServicesHeader);
  console.log('Successfully centered Services header!');
}

// 5. CENTER SECTION HEADER & REMOVE PREV/NEXT BUTTONS: Testimonials (Image 4)
const oldTestimonialsHeader = `<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
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
        </div>`;

const newTestimonialsHeader = `<div class="text-center max-w-2xl mx-auto mb-12 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Verified Customer Stories</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">What Our Clients Say</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Real feedback from professionals, developers, and gamers across South India.</p>
        </div>`;

if (indexHtml.includes(oldTestimonialsHeader)) {
  indexHtml = indexHtml.replace(oldTestimonialsHeader, newTestimonialsHeader);
  console.log('Successfully centered Testimonials header and removed navigation buttons!');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html saved successfully.');
