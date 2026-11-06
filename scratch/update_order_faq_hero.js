const fs = require('fs');

const orderHero = `    <!-- UNIFIED HERO SECTION: ORDER DESK -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Order Desk</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>DIRECT ORDER & CLEANROOM SERVICE BOOKING</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Order Your Laptop or <br>
            <span class="gold-gradient-text">Book Cleanroom Repair.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Fill in your configuration details below for immediate processing. Free doorstep pickup & drop across Chennai, 100% data security guarantee, and transparent billing.
          </p>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">Express</p>
              <p class="text-[11px] text-[#9fb3be]">Doorstep Pickup</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">256-Bit</p>
              <p class="text-[11px] text-[#9fb3be]">SSL Secure Processing</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">Zero</p>
              <p class="text-[11px] text-[#9fb3be]">Advance Booking Fee</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/general/workspace.jpg" alt="LAPNEST Order Fulfillment" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Direct Dispatch & Service Desk
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Chennai Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

const faqHero = `    <!-- UNIFIED HERO SECTION: FAQ -->
    <section class="page-hero relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#0e181f] border-b border-[#233D4C]/60 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute left-10 top-20 w-80 h-80 bg-[#233D4C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Breadcrumb, Badge, H1, Description, Metrics -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left gsap-fade-up">
          <nav class="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#9fb3be] font-mono">
            <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#FD802E] font-semibold">Help & FAQ</span>
          </nav>

          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>CUSTOMER KNOWLEDGE BASE • HARDWARE ASSISTANCE</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Frequently Asked Questions & <br>
            <span class="gold-gradient-text">Hardware Care Answers.</span>
          </h1>

          <p class="text-sm sm:text-base text-[#9fb3be] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Everything you need to know regarding laptop purchases, rental terms, motherboard micro-soldering, data safety policies, and our 1-year replacement warranty.
          </p>

          <div class="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">24/7</p>
              <p class="text-[11px] text-[#9fb3be]">Online Resources</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-[#FD802E]">Direct Call</p>
              <p class="text-[11px] text-[#9fb3be]">Live Engineer Support</p>
            </div>
            <div class="p-3 rounded-xl bg-[#172731] border border-[#233D4C] text-center lg:text-left">
              <p class="text-lg font-black text-white">Verified</p>
              <p class="text-[11px] text-[#9fb3be]">Warranty Terms</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contextual Card Showcase with 3D Tilt -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[480px] rounded-2xl bg-[#172731] border border-[#233D4C] p-3 shadow-2xl tilt-card group hover:border-[#FD802E] transition-all">
            <div class="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <img src="assets/images/general/chennai-store.jpg" alt="LAPNEST Knowledge Base" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-[#172731]/90 border border-[#233D4C] rounded-lg px-3.5 py-2 text-white">
                <span class="font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                  Instant Help & Guidance
                </span>
                <span class="text-[#FD802E] font-semibold text-[11px]">Cleanroom Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

// Update order.html
let orderContent = fs.readFileSync('order.html', 'utf8');
const orderHeroRegex = /<section[^>]*class=\"[^\"]*(?:page-hero|hero|pt-32)[^\"]*\"[\s\S]*?<\/section>/i;
if (orderHeroRegex.test(orderContent)) {
  orderContent = orderContent.replace(orderHeroRegex, orderHero);
} else {
  const firstSec = /<section[\s\S]*?<\/section>/i;
  orderContent = orderContent.replace(firstSec, orderHero);
}
fs.writeFileSync('order.html', orderContent, 'utf8');
console.log('Updated order.html with unified hero');

// Update faq.html
let faqContent = fs.readFileSync('faq.html', 'utf8');
const faqHeroRegex = /<section[^>]*class=\"[^\"]*(?:page-hero|hero|pt-32)[^\"]*\"[\s\S]*?<\/section>/i;
if (faqHeroRegex.test(faqContent)) {
  faqContent = faqContent.replace(faqHeroRegex, faqHero);
} else {
  const firstSec = /<section[\s\S]*?<\/section>/i;
  faqContent = faqContent.replace(firstSec, faqHero);
}
fs.writeFileSync('faq.html', faqContent, 'utf8');
console.log('Updated faq.html with unified hero');
