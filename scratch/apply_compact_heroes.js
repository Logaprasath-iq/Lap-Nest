const fs = require('fs');

function makeCompactHero(pageName, tagline, heading, desc, leftPill, imgUrl, imgPill, linkText, linkUrl) {
  return `    <!-- COMPACT ENCLOSED HERO SECTION (MATCHING PRODUCT PAGE STYLE) -->
    <section class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <!-- Enclosed Compact Card Container -->
        <div class="rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-8 lg:p-9 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          
          <!-- Subtle Ambient Glow inside Card -->
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Left Content (lg:col-span-7) -->
          <div class="lg:col-span-7 space-y-3 z-10">
            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-xs text-[#9fb3be] font-mono">
              <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
              <span>/</span>
              <span class="text-[#FD802E] font-semibold">${pageName}</span>
            </nav>

            <!-- Tagline Pill -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E]">
              <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
              <span>${tagline}</span>
            </div>

            <!-- Heading -->
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              ${heading}
            </h1>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-[#9fb3be] max-w-xl leading-relaxed">
              ${desc}
            </p>

            <!-- Compact Action / Badge Pill -->
            <div class="pt-1 flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f] border border-[#233D4C] text-[#FD802E]">
                ${leftPill}
              </span>
              <a href="${linkUrl}" class="text-xs font-semibold text-white hover:text-[#FD802E] flex items-center gap-1 transition-colors">
                <span>${linkText}</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Right Image Card (lg:col-span-5) -->
          <div class="lg:col-span-5 z-10">
            <div class="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#233D4C] shadow-lg group">
              <img src="${imgUrl}" alt="${pageName}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <span class="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold bg-[#0e181f]/90 border border-[#233D4C] text-[#9fb3be] backdrop-blur-md">
                ${imgPill}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>`;
}

const compactHeroes = {
  'products.html': makeCompactHero(
    'Products Catalog',
    '100% GENUINE OEM HARDWARE • 1-YEAR ONSITE WARRANTY',
    'Flagship Laptops & High-Performance Rigs.',
    'Curated inventory of verified commercial workstations, gaming rigs, and certified student notebooks with transparent INR pricing.',
    '24+ Models in Stock',
    'assets/images/products/asus-rog.jpg',
    'RTX 40-Series & Core i9 Models Ready',
    'Filter Catalog',
    '#catalog-filters'
  ),

  'about.html': makeCompactHero(
    'About LAPNEST',
    'CERTIFIED CLEANROOM FACILITY • ESTABLISHED 2018',
    'Pioneering Certified Laptop Solutions in Chennai.',
    'Providing transparent multi-brand retail, enterprise workstation rental fleets, and cleanroom logic board micro-soldering across South India.',
    '25,000+ Machines Restored',
    'assets/images/general/showroom.jpg',
    'OMR Sholinganallur Tech Hub',
    'Explore Our Story',
    '#company-story'
  ),

  'pricing.html': makeCompactHero(
    'Pricing & Tariffs',
    'TRANSPARENT QUOTATIONS • NO HIDDEN CHARGES',
    'Clear, Upfront Pricing for Sales, Rentals & Care.',
    'Honest component pricing, flexible rental fleet agreements, student discounts, and fixed diagnostic fees with complete warranty backing.',
    '₹0 Diagnostic Inspection Fee',
    'assets/images/general/deals-rental.jpg',
    'Fixed Quotation Guarantee',
    'Explore Rental Tariffs',
    '#rental-plans'
  ),

  'blog.html': makeCompactHero(
    'Hardware Journal',
    'ENGINEERING LAB DEEP-DIVES • BENCHMARKS & GUIDES',
    'Laptop Architecture, Thermal Guides & Benchmarks.',
    'Practical technical guides written by chip-level technicians. Covering PCIe Gen4 SSDs, GPU thermal dynamics, and logic board maintenance.',
    '50+ Hardware Articles',
    'assets/images/blog/blog-nvme.jpg',
    'Lab Benchmarks & Teardowns',
    'Read Featured Guide',
    '#featured-article'
  ),

  'contact.html': makeCompactHero(
    'Contact & Location',
    'FLAGSHIP SHOWROOM & LAB • OMR TECH CORRIDOR',
    'Visit Our Chennai Hub or Speak to an Engineer.',
    'Located conveniently on the Rajiv Gandhi Salai IT corridor in Sholinganallur. Walk in for live diagnosis, rental consultation, or tech support.',
    'Mon – Sat: 09:30 – 20:30',
    'assets/images/general/chennai-store.jpg',
    'Tech Plaza — Sholinganallur',
    'Get Directions',
    'https://maps.google.com'
  ),

  'repair-upgrade.html': makeCompactHero(
    'Repair & Upgrades',
    'ESD-SAFE CLEANROOM LAB • CHIP-LEVEL RESTORATION',
    'Cleanroom Hardware Diagnostics & Rapid Upgrades.',
    'South India\'s premier multi-brand repair lab. Precision logic board soldering, liquid spill recovery, and 90-minute SSD/RAM expansions.',
    '99% Logic Board Revival Rate',
    'assets/images/services/screen-repair.jpg',
    'Same-Day Express Turnaround',
    'View Repair Tariffs',
    '#services-list'
  ),

  'order.html': makeCompactHero(
    'Order Desk',
    'DIRECT ORDER & CLEANROOM SERVICE BOOKING',
    'Order Your Laptop or Book Cleanroom Repair.',
    'Fill in your configuration details below for immediate processing. Free doorstep pickup & drop across Chennai and transparent billing.',
    'Express Doorstep Pickup',
    'assets/images/general/workspace.jpg',
    'Direct Dispatch & Service Desk',
    'Place Your Order',
    '#order-form'
  ),

  'faq.html': makeCompactHero(
    'Help & FAQ',
    'CUSTOMER KNOWLEDGE BASE • HARDWARE ASSISTANCE',
    'Frequently Asked Questions & Hardware Care Answers.',
    'Everything you need to know regarding laptop purchases, rental terms, motherboard micro-soldering, data safety policies, and our 1-year warranty.',
    '24/7 Online Resources',
    'assets/images/general/chennai-store.jpg',
    'Instant Help & Guidance',
    'Browse Questions',
    '#faq-accordion'
  )
};

Object.keys(compactHeroes).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace first section or page-hero
  const heroRegex = /<section[^>]*class=\"[^\"]*(?:page-hero|hero|pt-24|pt-32)[^\"]*\"[\s\S]*?<\/section>/i;
  if (heroRegex.test(content)) {
    content = content.replace(heroRegex, compactHeroes[file]);
    console.log(`Replaced hero with compact card in ${file}`);
  } else {
    const firstSec = /<section[\s\S]*?<\/section>/i;
    content = content.replace(firstSec, compactHeroes[file]);
    console.log(`Replaced first section in ${file} with compact card hero`);
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log('All targeted inner pages now have the exact same compact card hero style and same height!');
