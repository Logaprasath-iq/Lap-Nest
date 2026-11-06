const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Horizontal Scroll Showcase Section
const horizontalShowcaseHTML = `
    <!-- SECTION: HORIZONTAL SCROLL PRODUCT SHOWCASE (GSAP PINNED TRACK) -->
    <section id="horizontal-showcase-section" class="relative bg-[#0e181f] py-20 lg:py-24 border-t border-[#233D4C] overflow-hidden">
      <!-- Section Header -->
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gsap-fade-up">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>Flagship Masterpiece Gallery</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white">Engineered For Ultra Performance</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Scroll vertically to glide through South India's finest performance laptops.</p>
        </div>
        <div class="hidden md:flex items-center gap-3 text-xs text-[#9fb3be]">
          <span class="inline-block w-8 h-[2px] bg-[#FD802E]"></span>
          <span>Scroll to Glide</span>
          <svg class="w-4 h-4 text-[#FD802E] animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
      </div>

      <!-- Horizontal Track Viewport Wrapper -->
      <div id="horizontal-viewport" class="w-full overflow-hidden px-4 sm:px-6 lg:px-12">
        <div id="horizontal-track" class="flex gap-6 sm:gap-8 items-stretch will-change-transform pb-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none">
          
          <!-- Flagship Card 1: Apple MacBook Pro M3 Max -->
          <div class="horizontal-card min-w-[310px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl snap-center group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#FD802E] text-white uppercase tracking-wider text-[11px]">Space Black</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">01 / 05</span>
              </div>
              <div class="relative h-44 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/apple-macbook.jpg" alt="Apple MacBook Pro M3 Max" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">Liquid Retina XDR</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">Apple MacBook Pro 16″</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4">Apple M3 Max (16-Core CPU, 40-Core GPU) • 48GB Unified RAM • 1TB SSD</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4">
                <div><span class="text-white font-bold block">120Hz ProMotion</span>Color Reference</div>
                <div><span class="text-white font-bold block">22 Hr Battery</span>MagSafe 3 Fast</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹3,49,900</span>
              </div>
              <a href="order.html?product=apple-macbook" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 2: ASUS ROG Strix SCAR 18 -->
          <div class="horizontal-card min-w-[310px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl snap-center group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider text-[11px]">Extreme Gaming</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">02 / 05</span>
              </div>
              <div class="relative h-44 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/asus-rog.jpg" alt="ASUS ROG Strix SCAR 18" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">RTX 4090 16GB (175W)</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">ASUS ROG Strix SCAR 18</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4">Intel Core i9-14900HX • 64GB DDR5 5600MHz • 2TB PCIe 4.0 RAID 0</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4">
                <div><span class="text-white font-bold block">18″ 2.5K 240Hz</span>Mini-LED HDR 1100</div>
                <div><span class="text-white font-bold block">Tri-Fan Tech</span>Liquid Metal Conduct</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹3,79,990</span>
              </div>
              <a href="order.html?product=asus-rog" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 3: Lenovo ThinkPad X1 Carbon Gen 11 -->
          <div class="horizontal-card min-w-[310px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl snap-center group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#FD802E] text-white uppercase tracking-wider text-[11px]">Enterprise Titan</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">03 / 05</span>
              </div>
              <div class="relative h-44 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/lenovo-thinkpad.jpg" alt="Lenovo ThinkPad X1 Carbon" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">1.12 kg Carbon Fiber</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">ThinkPad X1 Carbon Gen 11</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4">Intel Core i7-1365U vPro • 32GB LPDDR5 • 1TB Performance SSD</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4">
                <div><span class="text-white font-bold block">2.8K OLED Display</span>100% DCI-P3 Anti-Glare</div>
                <div><span class="text-white font-bold block">MIL-STD-810H</span>Military Tested Frame</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹1,94,990</span>
              </div>
              <a href="order.html?product=lenovo-thinkpad" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 4: Dell XPS 16 OLED InfinityEdge -->
          <div class="horizontal-card min-w-[310px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl snap-center group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider text-[11px]">Designer Workstation</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">04 / 05</span>
              </div>
              <div class="relative h-44 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/dell-inspiron.jpg" alt="Dell XPS 16 OLED" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">4K+ OLED Touch</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">Dell XPS 16 (9640)</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4">Intel Core Ultra 9 185H • 32GB LPDDR5X • NVIDIA RTX 4070 8GB</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4">
                <div><span class="text-white font-bold block">CNC Aluminum</span>Seamless Glass Touchpad</div>
                <div><span class="text-white font-bold block">Dual Thunderbolt 4</span>Express Charge 130W</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹2,89,990</span>
              </div>
              <a href="order.html?product=dell-inspiron" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 5: Acer Nitro V 15 Extreme -->
          <div class="horizontal-card min-w-[310px] sm:min-w-[380px] lg:min-w-[420px] rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl snap-center group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#FD802E] text-white uppercase tracking-wider text-[11px]">Esports Value</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">05 / 05</span>
              </div>
              <div class="relative h-44 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/acer-nitro.jpg" alt="Acer Nitro V 15" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">165Hz FHD IPS</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">Acer Nitro V 15 Esports</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4">AMD Ryzen 7 7735HS • 16GB DDR5 • RTX 4060 8GB GDDR6</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4">
                <div><span class="text-white font-bold block">Dual-Exhaust Air</span>Nitrosense Fan Control</div>
                <div><span class="text-white font-bold block">Wi-Fi 6E + Killer</span>Sub-3ms Ping Latency</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹89,990</span>
              </div>
              <a href="order.html?product=acer-nitro" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
`;

// 2. Sticky Scroll Diagnostics Section
const stickyDiagnosticsHTML = `
    <!-- SECTION: STICKY SCROLL CLEANROOM DIAGNOSTICS & HARDWARE ARCHITECTURE -->
    <section id="sticky-diagnostic-section" class="py-20 lg:py-28 bg-[#111e26] border-t border-[#233D4C] relative overflow-hidden">
      <!-- Ambient Backing Elements -->
      <div class="absolute -left-20 top-1/3 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>Proprietary Lab Bench Protocols</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">4-Phase Hardware Certification</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Watch our precision engineering process unfold as you scroll down.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          <!-- Sticky Column Left: Interactive Pinned 3D Diagnostic Visual (lg:col-span-5) -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <div id="sticky-visual-card" class="rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-5 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span id="sticky-phase-badge" class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 01 Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">ISO Cleanroom Lab</span>
              </div>

              <!-- Central 3D Laptop Display with Animated Component Targets -->
              <div class="my-6 sm:my-8 relative flex items-center justify-center min-h-[200px] sm:min-h-[240px]">
                <img id="sticky-laptop-img" src="assets/images/hero/hero-laptop-floating.png" alt="Diagnostic Inspection" class="w-full max-w-[320px] object-contain transition-all duration-700 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                
                <!-- Target Pulse Point 1: Display -->
                <div id="pulse-point-1" class="pulse-target absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 2: Motherboard -->
                <div id="pulse-point-2" class="pulse-target absolute top-24 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 3: Thermal Liquid Metal -->
                <div id="pulse-point-3" class="pulse-target absolute bottom-12 left-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 4: Battery -->
                <div id="pulse-point-4" class="pulse-target absolute bottom-8 right-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
              </div>

              <!-- Bottom Telemetry Specs Box -->
              <div class="pt-4 border-t border-[#233D4C]/70">
                <div class="flex items-center justify-between text-xs font-mono">
                  <span class="text-[#9fb3be]">Active Inspection:</span>
                  <span id="sticky-target-name" class="text-white font-bold">Display Panel Spectrum Calibration</span>
                </div>
                <div class="w-full bg-[#0e181f] h-2 rounded-full mt-2.5 overflow-hidden border border-[#233D4C]">
                  <div id="sticky-progress-fill" class="h-full bg-gradient-to-r from-[#FD802E] to-[#ff9248] w-1/4 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scrolling Column Right: 4 Detailed Stage Cards (lg:col-span-7) -->
          <div class="lg:col-span-7 space-y-8 sm:space-y-10 py-2">
            
            <!-- Step 1 Card -->
            <div class="sticky-step-card p-6 sm:p-8 rounded-3xl bg-[#172731] border border-[#233D4C] transition-all duration-500 hover:border-[#FD802E]/50" data-step="1" data-title="Display Panel Spectrum Calibration" data-progress="25%">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-2xl sm:text-3xl font-black text-[#FD802E]">01</span>
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0e181f] text-[#9fb3be] border border-[#233D4C]">Optical Spectrometry</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Display & Screen Panel Calibration</h3>
              <p class="text-xs sm:text-sm text-[#9fb3be] leading-relaxed mb-4">
                Every display panel is audited using X-Rite spectrophotometers to verify 100% sRGB and DCI-P3 gamut accuracy. We inspect for dead sub-pixels, backlight bleed uniformity, and high-frequency PWM flicker.
              </p>
              <div class="flex flex-wrap gap-2 text-[11px] text-[#FD802E] font-mono">
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Delta-E &lt; 1.5</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Zero Sub-Pixel Bleed</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ High Refresh Verified</span>
              </div>
            </div>

            <!-- Step 2 Card -->
            <div class="sticky-step-card p-6 sm:p-8 rounded-3xl bg-[#172731] border border-[#233D4C] transition-all duration-500 hover:border-[#FD802E]/50" data-step="2" data-title="Motherboard Logic Power Rail Diagnostics" data-progress="50%">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-2xl sm:text-3xl font-black text-[#FD802E]">02</span>
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0e181f] text-[#9fb3be] border border-[#233D4C]">Chip-Level Micro-Soldering</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Motherboard & Power Rail Integrity</h3>
              <p class="text-xs sm:text-sm text-[#9fb3be] leading-relaxed mb-4">
                Our ESD-safe cleanroom uses FLIR thermal imaging to trace micro-shortages across 3.3V and 5V standby rails. Faulty MOSFETs, blown capacitors, and charging ICs are replaced with OEM specification silicon.
              </p>
              <div class="flex flex-wrap gap-2 text-[11px] text-[#FD802E] font-mono">
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ FLIR Thermal Profiling</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Weller Soldering Precision</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ 180-Day Guarantee</span>
              </div>
            </div>

            <!-- Step 3 Card -->
            <div class="sticky-step-card p-6 sm:p-8 rounded-3xl bg-[#172731] border border-[#233D4C] transition-all duration-500 hover:border-[#FD802E]/50" data-step="3" data-title="Thermal Heatsink & Liquid Metal Overhaul" data-progress="75%">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-2xl sm:text-3xl font-black text-[#FD802E]">03</span>
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0e181f] text-[#9fb3be] border border-[#233D4C]">Thermal Dynamics</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Liquid Metal & Heatsink Overhaul</h3>
              <p class="text-xs sm:text-sm text-[#9fb3be] leading-relaxed mb-4">
                Degraded factory paste is ultrasonically stripped. We apply Arctic MX-6 high-viscosity paste or Thermal Grizzly Conductonaut liquid metal, reducing peak processor temperatures by up to 14°C under sustained multi-threaded loads.
              </p>
              <div class="flex flex-wrap gap-2 text-[11px] text-[#FD802E] font-mono">
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ -14°C Temp Drop</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Ultra-Quiet Maglev Fans</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Zero Thermal Throttling</span>
              </div>
            </div>

            <!-- Step 4 Card -->
            <div class="sticky-step-card p-6 sm:p-8 rounded-3xl bg-[#172731] border border-[#233D4C] transition-all duration-500 hover:border-[#FD802E]/50" data-step="4" data-title="Battery Health & 45-Point Lab Burn-In" data-progress="100%">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-2xl sm:text-3xl font-black text-[#FD802E]">04</span>
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0e181f] text-[#9fb3be] border border-[#233D4C]">Burn-In Certification</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Battery Cycles & Full-System Burn-In</h3>
              <p class="text-xs sm:text-sm text-[#9fb3be] leading-relaxed mb-4">
                Each machine undergoes 4 hours of AIDA64, Cinebench R24, and FurMark burn-in testing. Battery health must clear >90% design capacity, and PCIe NVMe drives must sustain sequential read speeds with 100% SMART health.
              </p>
              <div class="flex flex-wrap gap-2 text-[11px] text-[#FD802E] font-mono">
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ &gt;90% Battery Health</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ 100% SMART SSD Health</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#0e181f] border border-[#233D4C]">✓ Certified Lapnest Seal</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
`;

// Insert Horizontal Showcase right after Section 3 (best-sellers)
const insertAfterBestSellersTarget = '</section>\n\n    <!-- SECTION 4: WHY CHOOSE LAPNEST';
if (html.includes(insertAfterBestSellersTarget)) {
  html = html.replace(insertAfterBestSellersTarget, '</section>\n' + horizontalShowcaseHTML + '\n    <!-- SECTION 4: WHY CHOOSE LAPNEST');
  console.log('Successfully inserted Horizontal Showcase into index.html');
} else {
  console.error('Could not find best-sellers section end');
}

// Insert Sticky Diagnostics right after repair-services section
const insertAfterRepairServicesTarget = '<!-- SECTION 6: LATEST DEALS -->';
// Let's find latest deals in index.html
const dealsIdx = html.indexOf('<section id="latest-deals"');
if (dealsIdx !== -1) {
  html = html.substring(0, dealsIdx) + stickyDiagnosticsHTML + '\n\n    ' + html.substring(dealsIdx);
  console.log('Successfully inserted Sticky Diagnostics into index.html');
} else {
  console.error('Could not find latest-deals section');
}

fs.writeFileSync('index.html', html);
console.log('Updated index.html with new showcase sections!');
