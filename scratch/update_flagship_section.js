const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the Horizontal Showcase with the 3-card Flagship Masterpiece Gallery (no scroll-to-glide indicator, only 3 cards)
const oldSectionRegex = /<!-- SECTION: HORIZONTAL SCROLL PRODUCT SHOWCASE[\s\S]*?<!-- SECTION 4: WHY CHOOSE LAPNEST/;

const newSection = `<!-- SECTION: FLAGSHIP MASTERPIECE GALLERY (3 CURATED FLAGSHIP CARDS) -->
    <section id="flagship-showcase-section" class="relative bg-[#0e181f] py-20 lg:py-24 border-t border-[#233D4C] overflow-hidden">
      <!-- Section Header (Scroll to Glide removed as requested) -->
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12 gsap-fade-up">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>Flagship Masterpiece Gallery</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white">Engineered For Ultra Performance</h2>
        <p class="text-sm text-[#9fb3be] mt-2 max-w-2xl">Hand-picked tier-1 ultra-performance laptops certified by LAPNEST Cleanroom Engineers.</p>
      </div>

      <!-- 3 Flagship Cards Grid (Equal Heights, Perfectly Aligned) -->
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 equal-card-grid">
          
          <!-- Flagship Card 1: Apple MacBook Pro M3 Max -->
          <div class="equal-card rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#FD802E] text-white uppercase tracking-wider text-[11px]">Space Black</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">01 / 03</span>
              </div>
              <div class="relative h-48 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/apple-macbook.jpg" alt="Apple MacBook Pro M3 Max" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">Liquid Retina XDR</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">Apple MacBook Pro 16″</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4 min-h-[36px] flex items-center">Apple M3 Max (16-Core CPU, 40-Core GPU) • 48GB Unified RAM • 1TB SSD</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4 min-h-[58px]">
                <div><span class="text-white font-bold block">120Hz ProMotion</span>Color Reference</div>
                <div><span class="text-white font-bold block">22 Hr Battery</span>MagSafe 3 Fast</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between mt-auto">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹3,49,900</span>
              </div>
              <a href="order.html?product=apple-macbook" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 2: ASUS ROG Strix SCAR 18 -->
          <div class="equal-card rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider text-[11px]">Extreme Gaming</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">02 / 03</span>
              </div>
              <div class="relative h-48 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/asus-rog.jpg" alt="ASUS ROG Strix SCAR 18" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">RTX 4090 16GB (175W)</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">ASUS ROG Strix SCAR 18</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4 min-h-[36px] flex items-center">Intel Core i9-14900HX • 64GB DDR5 5600MHz • 2TB PCIe 4.0 RAID 0</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4 min-h-[58px]">
                <div><span class="text-white font-bold block">18″ 2.5K 240Hz</span>Mini-LED HDR 1100</div>
                <div><span class="text-white font-bold block">Tri-Fan Tech</span>Liquid Metal Conduct</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between mt-auto">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹3,79,990</span>
              </div>
              <a href="order.html?product=asus-rog" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

          <!-- Flagship Card 3: Lenovo ThinkPad X1 Carbon Gen 11 -->
          <div class="equal-card rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card group">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="px-3 py-1 rounded-full font-bold bg-[#FD802E] text-white uppercase tracking-wider text-[11px]">Enterprise Titan</span>
                <span class="font-mono text-[#9fb3be] text-[11px]">03 / 03</span>
              </div>
              <div class="relative h-48 sm:h-52 rounded-2xl bg-[#0e181f] p-4 flex items-center justify-center overflow-hidden mb-5">
                <img src="assets/images/products/lenovo-thinkpad.jpg" alt="Lenovo ThinkPad X1 Carbon" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">1.12 kg Carbon Fiber</span>
              </div>
              <h3 class="text-xl font-black text-white group-hover:text-[#FD802E] transition-colors">ThinkPad X1 Carbon Gen 11</h3>
              <p class="text-xs text-[#9fb3be] mt-1 mb-4 min-h-[36px] flex items-center">Intel Core i7-1365U vPro • 32GB LPDDR5 • 1TB Performance SSD</p>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#9fb3be] bg-[#0e181f]/60 p-3 rounded-xl border border-[#233D4C]/40 mb-4 min-h-[58px]">
                <div><span class="text-white font-bold block">2.8K OLED Display</span>100% DCI-P3 Anti-Glare</div>
                <div><span class="text-white font-bold block">MIL-STD-810H</span>Military Tested Frame</div>
              </div>
            </div>
            <div class="pt-4 border-t border-[#233D4C]/60 flex items-center justify-between mt-auto">
              <div>
                <span class="text-xs text-[#9fb3be] block">Direct Showroom Price</span>
                <span class="text-2xl font-black text-white">₹1,94,990</span>
              </div>
              <a href="order.html?product=lenovo-thinkpad" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">Order Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 4: WHY CHOOSE LAPNEST`;

html = html.replace(oldSectionRegex, newSection);
fs.writeFileSync('index.html', html);
console.log('Successfully updated Flagship section to 3 cards and removed scroll-to-glide indicator!');
