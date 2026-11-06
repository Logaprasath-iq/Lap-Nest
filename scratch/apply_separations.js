const fs = require('fs');

function createDivider(badgeText) {
  return `
    <!-- ELEGANT SECTION SEPARATION DIVIDER -->
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-6 sm:py-8">
      <div class="relative flex items-center justify-center">
        <div class="w-full border-t border-[#233D4C]"></div>
        <div class="absolute bg-[#0e181f] px-5 py-1.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-widest text-[#FD802E] uppercase shadow-lg shadow-black/40">
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          <span>${badgeText}</span>
          <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
        </div>
      </div>
    </div>
`;
}

// 1. about.html
let about = fs.readFileSync('about.html', 'utf8');
// Expand hero padding
about = about.replace(
  'class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]"',
  'class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]"'
);
// Insert divider before Section 2
const aboutDivider = createDivider('OUR MISSION & TECHNICAL HERITAGE');
if (!about.includes('OUR MISSION & TECHNICAL HERITAGE')) {
  about = about.replace(
    '<!-- SECTION 2: COMPANY INTRODUCTION -->',
    aboutDivider + '\n    <!-- SECTION 2: COMPANY INTRODUCTION -->'
  );
}
// Update Section 2 in about to have top border & cleanroom image instead of duplicate store exterior
about = about.replace(
  '<section class="py-20 lg:py-24 bg-[#0e181f]">',
  '<section class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">'
);
about = about.replace(
  '<img src="assets/images/general/chennai-store.jpg" alt="LAPNEST Chennai Showroom" class="w-full h-full object-cover">',
  '<img src="assets/images/general/cleanroom.jpg" alt="LAPNEST ISO Cleanroom Diagnostic Bench" class="w-full h-full object-cover">'
);
fs.writeFileSync('about.html', about, 'utf8');
console.log('Updated about.html separation');

// 2. pricing.html
let pricing = fs.readFileSync('pricing.html', 'utf8');
pricing = pricing.replace(
  'class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]"',
  'class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]"'
);
const pricingDivider = createDivider('TRANSPARENT TARIFFS & PRICE BANDS');
if (!pricing.includes('TRANSPARENT TARIFFS & PRICE BANDS')) {
  pricing = pricing.replace(
    '<!-- SECTION 2: LAPTOP SALES CATEGORIES & PRICE BANDS -->',
    pricingDivider + '\n    <!-- SECTION 2: LAPTOP SALES CATEGORIES & PRICE BANDS -->'
  );
}
pricing = pricing.replace(
  '<section class="py-16 bg-[#0e181f]">',
  '<section class="py-16 bg-[#111e26] border-t border-[#233D4C]">'
);
fs.writeFileSync('pricing.html', pricing, 'utf8');
console.log('Updated pricing.html separation');

// 3. blog.html
let blog = fs.readFileSync('blog.html', 'utf8');
blog = blog.replace(
  'class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]"',
  'class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]"'
);
const blogDivider = createDivider('FEATURED EDITORIALS & HARDWARE GUIDES');
if (!blog.includes('FEATURED EDITORIALS & HARDWARE GUIDES')) {
  blog = blog.replace(
    '<!-- SECTION 2: FEATURED ARTICLE -->',
    blogDivider + '\n    <!-- SECTION 2: FEATURED ARTICLE -->'
  );
}
blog = blog.replace(
  '<section class="py-16 bg-[#0e181f]">',
  '<section class="py-16 bg-[#111e26] border-t border-[#233D4C]">'
);
fs.writeFileSync('blog.html', blog, 'utf8');
console.log('Updated blog.html separation');

// 4. repair-upgrade.html
let repair = fs.readFileSync('repair-upgrade.html', 'utf8');
repair = repair.replace(
  'class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]"',
  'class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]"'
);
const repairDivider = createDivider('CERTIFIED LAB REPAIR & UPGRADE BENCH');
if (!repair.includes('CERTIFIED LAB REPAIR & UPGRADE BENCH')) {
  repair = repair.replace(
    '<!-- SECTION 2: COMPLETE REPAIR SERVICES',
    repairDivider + '\n    <!-- SECTION 2: COMPLETE REPAIR SERVICES'
  );
}
repair = repair.replace(
  '<section class="py-20 bg-[#0e181f]">',
  '<section class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">'
);
fs.writeFileSync('repair-upgrade.html', repair, 'utf8');
console.log('Updated repair-upgrade.html separation');

// 5. products.html
let products = fs.readFileSync('products.html', 'utf8');
const productsDivider = `
      <!-- ELEGANT SECTION SEPARATION DIVIDER -->
      <div class="py-6 sm:py-8">
        <div class="relative flex items-center justify-center">
          <div class="w-full border-t border-[#233D4C]"></div>
          <div class="absolute bg-[#0e181f] px-5 py-1.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-widest text-[#FD802E] uppercase shadow-lg shadow-black/40">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>VERIFIED HARDWARE CATALOG & SMART FILTERS</span>
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          </div>
        </div>
      </div>
`;
if (!products.includes('VERIFIED HARDWARE CATALOG & SMART FILTERS')) {
  products = products.replace(
    '<!-- Main Layout: Sidebar Filters + Products Grid -->',
    productsDivider + '\n      <!-- Main Layout: Sidebar Filters + Products Grid -->'
  );
}
fs.writeFileSync('products.html', products, 'utf8');
console.log('Updated products.html separation');

// 6. contact.html
let contact = fs.readFileSync('contact.html', 'utf8');
contact = contact.replace(
  'class="pt-24 pb-6 lg:pt-28 lg:pb-8 bg-[#0e181f]"',
  'class="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#0e181f]"'
);
const contactDivider = createDivider('COMMUNICATION DESK & SERVICE BOOKING');
if (!contact.includes('COMMUNICATION DESK & SERVICE BOOKING')) {
  contact = contact.replace(
    '<!-- SECTION 3 & 4: GENERAL ENQUIRY FORM & REPAIR BOOKING FORM -->',
    contactDivider + '\n    <!-- SECTION 3 & 4: GENERAL ENQUIRY FORM & REPAIR BOOKING FORM -->'
  );
}
fs.writeFileSync('contact.html', contact, 'utf8');
console.log('Updated contact.html separation');

// 7. order.html
let order = fs.readFileSync('order.html', 'utf8');
const orderDivider = `
      <!-- ELEGANT SECTION SEPARATION DIVIDER -->
      <div class="py-6 sm:py-8">
        <div class="relative flex items-center justify-center">
          <div class="w-full border-t border-[#233D4C]"></div>
          <div class="absolute bg-[#0e181f] px-5 py-1.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-widest text-[#FD802E] uppercase shadow-lg shadow-black/40">
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
            <span>DIRECT ORDER FORM & HARDWARE RESERVATION</span>
            <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-pulse"></span>
          </div>
        </div>
      </div>
`;
if (!order.includes('DIRECT ORDER FORM & HARDWARE RESERVATION')) {
  order = order.replace(
    '<!-- Two Column Checkout Grid -->',
    orderDivider + '\n      <!-- Two Column Checkout Grid -->'
  );
}
fs.writeFileSync('order.html', order, 'utf8');
console.log('Updated order.html separation');
