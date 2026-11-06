const fs = require('fs');

// 1. Update products.html
let productsHtml = fs.readFileSync('products.html', 'utf8');

const oldProductsMainStart = productsHtml.indexOf('<main class="pt-24 pb-20 bg-[#0e181f]">');
const oldProductsFilterStart = productsHtml.indexOf('<!-- Main Layout: Sidebar Filters + Products Grid -->');
const oldProductsMainEnd = productsHtml.indexOf('</main>');

if (oldProductsMainStart !== -1 && oldProductsFilterStart !== -1 && oldProductsMainEnd !== -1) {
  // Extract the filter + grid HTML
  const filterAndGridHtml = productsHtml.substring(oldProductsFilterStart, oldProductsMainEnd).trim();
  // Strip any trailing closing div that was for the outer container
  const cleanFilterGrid = filterAndGridHtml.replace(/<\/div>\s*$/, '').trim();

  const newProductsMain = `<main>

    <!-- SECTION 1: PRODUCTS HERO BANNER -->
    <section class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div class="rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-8 lg:p-9 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <!-- Subtle Ambient Glow inside Card -->
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="lg:col-span-7 space-y-3 relative z-10">
            <nav class="flex items-center gap-2 text-xs text-[#9fb3be] font-mono">
              <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
              <span>/</span>
              <span class="text-[#FD802E] font-semibold">Products Catalog</span>
            </nav>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E]">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% GENUINE OEM HARDWARE • 1-YEAR ONSITE WARRANTY</span>
            </div>
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Flagship Laptops & <br>
              <span class="gold-gradient-text">High-Performance Rigs.</span>
            </h1>
            <p class="text-xs sm:text-sm text-[#9fb3be] max-w-xl leading-relaxed">
              Curated inventory of verified commercial workstations, gaming rigs, and certified student notebooks with transparent INR pricing.
            </p>
            <div class="pt-1">
              <span id="products-count-badge" class="px-3.5 py-1.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-xs font-bold text-[#FD802E]">
                Loading catalog...
              </span>
            </div>
          </div>

          <div class="lg:col-span-5 relative z-10">
            <div class="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#233D4C] shadow-lg group">
              <img src="assets/images/general/workstation.jpg" alt="LAPNEST Workstations & Laptops" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <span class="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold bg-[#0e181f]/90 border border-[#233D4C] text-[#9fb3be] backdrop-blur-md">
                RTX 40-Series & Core i9 Models Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ELEGANT SECTION SEPARATION DIVIDER -->
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-6 sm:py-8">
      <div class="relative flex items-center justify-center">
        <div class="w-full border-t border-[#233D4C]"></div>
        <div class="absolute bg-[#0e181f] px-5 py-1.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-widest text-[#FD802E] uppercase shadow-lg shadow-black/40">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>VERIFIED HARDWARE CATALOG & SMART FILTERS</span>
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
        </div>
      </div>
    </div>

    <!-- SECTION 2: PRODUCTS CATALOG GRID & SIDEBAR FILTERS -->
    <section class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        ${cleanFilterGrid}
      </div>
    </section>

  </main>`;

  productsHtml = productsHtml.substring(0, oldProductsMainStart) + newProductsMain + productsHtml.substring(oldProductsMainEnd + 7);
  fs.writeFileSync('products.html', productsHtml, 'utf8');
  console.log('Successfully updated products.html with multi-section layout and full-width separation border!');
}

// 2. Update order.html
let orderHtml = fs.readFileSync('order.html', 'utf8');

const oldOrderMainStart = orderHtml.indexOf('<main class="pt-24 pb-20 bg-[#0e181f]">');
const oldOrderGridStart = orderHtml.indexOf('<!-- Two Column Checkout Grid -->');
const oldOrderMainEnd = orderHtml.indexOf('</main>');

if (oldOrderMainStart !== -1 && oldOrderGridStart !== -1 && oldOrderMainEnd !== -1) {
  const checkoutGridHtml = orderHtml.substring(oldOrderGridStart, oldOrderMainEnd).trim();
  const cleanCheckoutGrid = checkoutGridHtml.replace(/<\/div>\s*$/, '').trim();

  const newOrderMain = `<main>

    <!-- SECTION 1: ORDER HERO BANNER -->
    <section class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div class="rounded-3xl bg-[#172731] border border-[#233D4C] p-6 sm:p-8 lg:p-9 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <!-- Subtle Ambient Glow inside Card -->
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-[#FD802E]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="lg:col-span-7 space-y-3 relative z-10">
            <nav class="flex items-center gap-2 text-xs text-[#9fb3be] font-mono">
              <a href="index.html" class="hover:text-[#FD802E] transition-colors">Home</a>
              <span>/</span>
              <span class="text-[#FD802E] font-semibold">Express Checkout</span>
            </nav>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E]">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NO LOGIN REQUIRED • DIRECT CHENNAI SHOWROOM DISPATCH</span>
            </div>
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Order Your Laptop or <br>
              <span class="gold-gradient-text">Book Cleanroom Repair.</span>
            </h1>
            <p class="text-xs sm:text-sm text-[#9fb3be] max-w-xl leading-relaxed">
              Transparent instant checkout with direct invoice generation, OEM hardware warranty and door-step courier across India.
            </p>
            <div class="pt-1 flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f] border border-[#233D4C] text-[#FD802E]">
                GST Invoicing Available
              </span>
            </div>
          </div>

          <div class="lg:col-span-5 relative z-10">
            <div class="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#233D4C] shadow-lg group">
              <img src="assets/images/general/delivery.jpg" alt="LAPNEST Express Order" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <span class="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold bg-[#0e181f]/90 border border-[#233D4C] text-[#9fb3be] backdrop-blur-md">
                Instant Order Reference Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ELEGANT SECTION SEPARATION DIVIDER -->
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-6 sm:py-8">
      <div class="relative flex items-center justify-center">
        <div class="w-full border-t border-[#233D4C]"></div>
        <div class="absolute bg-[#0e181f] px-5 py-1.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-widest text-[#FD802E] uppercase shadow-lg shadow-black/40">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>DIRECT ORDER FORM & HARDWARE RESERVATION</span>
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
        </div>
      </div>
    </div>

    <!-- SECTION 2: CHECKOUT FORMS -->
    <section class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        ${cleanCheckoutGrid}
      </div>
    </section>

  </main>`;

  orderHtml = orderHtml.substring(0, oldOrderMainStart) + newOrderMain + orderHtml.substring(oldOrderMainEnd + 7);
  fs.writeFileSync('order.html', orderHtml, 'utf8');
  console.log('Successfully updated order.html with multi-section layout and full-width separation border!');
}
