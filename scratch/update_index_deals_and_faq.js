const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace Section 6 grid content
const oldSection6Regex = /<!-- SECTION 6: LATEST DEALS \(4 PROMOTIONAL BANNERS\) -->[\s\S]*?<!-- SECTION 7\.5: ENTERPRISE SLA/;

const newSection6 = `<!-- SECTION 6: LATEST DEALS (4 PROMOTIONAL BANNERS) -->
    <section id="latest-deals" class="py-20 lg:py-24 bg-[#111e26] border-t border-[#233D4C]/40">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Limited Time Promos</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Latest Deals & Special Offers</h2>
          <p class="text-sm text-[#9fb3be] mt-3">High-value bundles, exclusive student discounts, and enterprise refurbished offers.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Banner 1: Gaming Laptop Deals -->
          <div class="rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col sm:flex-row items-stretch tilt-card">
            <!-- Words Left Side -->
            <div class="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FD802E] text-white uppercase tracking-wider inline-block">Heavy Discount</span>
                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors leading-snug">Gaming Laptop Flash Sale</h3>
                <p class="text-xs text-[#9fb3be] leading-relaxed">Save up to ₹25,000 on RTX 40-Series laptops. Includes bundled high-DPI gaming mouse, cooling pad, and Steam gift voucher.</p>
              </div>
              <div class="pt-2">
                <a href="products.html?cat=gaming" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white transition-all shadow-md shadow-[#FD802E]/25">
                  <span>Claim Gaming Offer</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <!-- Image Right Side -->
            <div class="w-full sm:w-2/5 min-h-[180px] sm:min-h-full relative overflow-hidden bg-[#0e181f]">
              <img src="assets/images/general/deals-gaming.jpg" alt="Gaming Laptop Deals" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>

          <!-- Banner 2: Student Laptop Deals -->
          <div class="rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col sm:flex-row items-stretch tilt-card">
            <!-- Words Left Side -->
            <div class="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider inline-block">Campus Special</span>
                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors leading-snug">Student Extra 15% Rebate</h3>
                <p class="text-xs text-[#9fb3be] leading-relaxed">Present your active college ID for an extra 15% instant rebate on any Dell, HP, or Lenovo laptop plus free backpack and warranty extension.</p>
              </div>
              <div class="pt-2">
                <a href="products.html?cat=student" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white transition-all shadow-md shadow-[#FD802E]/25">
                  <span>View Student Laptops</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <!-- Image Right Side -->
            <div class="w-full sm:w-2/5 min-h-[180px] sm:min-h-full relative overflow-hidden bg-[#0e181f]">
              <img src="assets/images/general/deals-student.jpg" alt="Student Laptop Deals" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>

          <!-- Banner 3: Refurbished Laptops -->
          <div class="rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col sm:flex-row items-stretch tilt-card">
            <!-- Words Left Side -->
            <div class="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FD802E] text-white uppercase tracking-wider inline-block">Certified Grade-A</span>
                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors leading-snug">Refurbished ThinkPads from ₹18,999</h3>
                <p class="text-xs text-[#9fb3be] leading-relaxed">Ex-corporate Lenovo ThinkPads restored to immaculate Grade-A condition. 100% health batteries, new NVMe SSDs, and 1-year replacement warranty.</p>
              </div>
              <div class="pt-2">
                <a href="products.html?cat=refurbished" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white transition-all shadow-md shadow-[#FD802E]/25">
                  <span>Browse Refurbished</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <!-- Image Right Side -->
            <div class="w-full sm:w-2/5 min-h-[180px] sm:min-h-full relative overflow-hidden bg-[#0e181f]">
              <img src="assets/images/general/deals-refurbished.jpg" alt="Refurbished ThinkPads" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>

          <!-- Banner 4: Laptop Rentals -->
          <div class="rounded-2xl bg-[#172731] border border-[#233D4C] overflow-hidden group hover:border-[#FD802E] transition-all flex flex-col sm:flex-row items-stretch tilt-card">
            <!-- Words Left Side -->
            <div class="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#233D4C] text-[#FD802E] uppercase tracking-wider inline-block">Flexible Fleet</span>
                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-[#FD802E] transition-colors leading-snug">Corporate Rentals from ₹1,999/mo</h3>
                <p class="text-xs text-[#9fb3be] leading-relaxed">Equip your software team, hackathon, or temporary project with high-performance laptops. Zero deposit for registered IT firms in Chennai.</p>
              </div>
              <div class="pt-2">
                <a href="pricing.html#rentals" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white transition-all shadow-md shadow-[#FD802E]/25">
                  <span>View Rental Plans</span>
                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <!-- Image Right Side -->
            <div class="w-full sm:w-2/5 min-h-[180px] sm:min-h-full relative overflow-hidden bg-[#0e181f]">
              <img src="assets/images/general/deals-rental.jpg" alt="Laptop Rentals" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 7.5: ENTERPRISE SLA`;

html = html.replace(oldSection6Regex, newSection6);

// Now update the FAQ Accordion in index.html
const oldFaqRegex = /<!-- FAQ ACCORDION SUB-BLOCK \(NON-IMAGE\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*<!-- SECTION 7: TESTIMONIALS/;

const newFaq = `<!-- FAQ ACCORDION SUB-BLOCK (INTERACTIVE CLICK-TO-DROPDOWN) -->
        <div class="mt-20 pt-16 border-t border-[#233D4C] max-w-3xl mx-auto">
          <div class="text-center mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Common Technical Questions</span>
            <h3 class="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Questions</h3>
            <p class="text-xs text-[#9fb3be] mt-2">Click any question below to view our transparent policies, warranty terms, and service procedures.</p>
          </div>

          <div class="faq-group space-y-4">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>How does the LAPNEST corporate laptop rental program operate?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                We provide short-term and multi-year leases for high-spec laptops (Dell Latitude, ThinkPad, MacBook Pro, ROG) to businesses with zero capital lock-in. Rental fees are 100% tax-deductible operational expenses. Every unit includes full hardware maintenance, free hot-swap replacement within 2 hours in Chennai, and automated OS deployment.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>What is component-level repair versus motherboard replacement?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Brand service centers often quote ₹35,000 to replace an entire logic board when only a single ₹150 power management IC (PWM) or ceramic capacitor has failed. At LAPNEST, our ISO cleanroom engineers isolate the exact faulty micro-component under thermal cameras and replace only that component, saving you 60% to 75% while preserving your original motherboard and data.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Do you supply 100% genuine OEM replacement parts?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. We source verified OEM screens, battery packs, cooling fans, and logic boards directly from Tier-1 component manufacturers (LG Display, BOE, Samsung, Dynabook, Simplo). Every replacement part carries our official 1-year replacement warranty.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>How is my private data safeguarded while my laptop is in the lab?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                We enforce a strict Zero-Data-Access policy. For hardware repairs that do not involve OS configuration, you are encouraged to remove your SSD before hand-off or let our technician place tamper-evident seals over your drive bay and camera. Our technicians test motherboard power rails using external test SSDs.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 7: TESTIMONIALS`;

html = html.replace(oldFaqRegex, newFaq);

fs.writeFileSync('index.html', html);
console.log('Successfully updated Section 6 Deals and FAQ Accordion in index.html!');
