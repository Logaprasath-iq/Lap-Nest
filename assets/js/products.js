/**
 * LAPNEST - Products Catalog, Filters, Sorting & Details Gallery
 */

const LAPNEST_PRODUCTS = [
  {
    id: 'dell-inspiron',
    brand: 'Dell',
    model: 'Inspiron 15 3520',
    category: 'Business Laptops',
    processor: 'Intel Core i5-1235U (12th Gen)',
    ram: '16GB DDR4',
    storage: '512GB PCIe NVMe SSD',
    screen: '15.6" FHD 120Hz Anti-Glare',
    graphics: 'Intel Iris Xe Graphics',
    price: 54990,
    originalPrice: 62990,
    discount: '12% OFF',
    rating: 4.8,
    reviewsCount: 142,
    availability: 'In Stock',
    badge: 'Popular',
    image: 'assets/images/products/dell-inspiron.jpg',
    gallery: [
      'assets/images/products/dell-inspiron.jpg',
      'assets/images/products/lenovo-thinkpad.jpg',
      'assets/images/hero/hero-laptop.png'
    ],
    description: 'The Dell Inspiron 15 balances responsive performance in a clean, thoughtfully designed package. Ideal for professional workflows, multitasking, and daily enterprise computing.',
    features: ['120Hz Smooth Display', 'ExpressCharge to 80% in 60 mins', 'Spill-resistant full-size keyboard', 'Precision glass trackpad']
  },
  {
    id: 'hp-pavilion',
    brand: 'HP',
    model: 'Pavilion Gaming 15',
    category: 'Gaming Laptops',
    processor: 'AMD Ryzen 7 5800H',
    ram: '16GB DDR4 (Expandable)',
    storage: '1TB PCIe NVMe SSD',
    screen: '15.6" FHD 144Hz IPS Display',
    graphics: 'NVIDIA GeForce RTX 3050 (4GB GDDR6)',
    price: 72490,
    originalPrice: 84990,
    discount: '15% OFF',
    rating: 4.7,
    reviewsCount: 198,
    availability: 'In Stock',
    badge: 'Hot Deal',
    image: 'assets/images/products/hp-pavilion.jpg',
    gallery: [
      'assets/images/products/hp-pavilion.jpg',
      'assets/images/products/asus-rog.jpg',
      'assets/images/products/acer-nitro.jpg'
    ],
    description: 'Sacrifice nothing with the thin and powerful HP Pavilion Gaming laptop. Experience high-grade graphics and processing power for gaming and multitasking, plus improved thermal cooling.',
    features: ['Dual fan cooling system', 'B&O Audio tuned dual speakers', '144Hz Refresh Rate', 'Backlit keyboard with integrated numeric pad']
  },
  {
    id: 'lenovo-thinkpad',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon Gen 11',
    category: 'Business Laptops',
    processor: 'Intel Core i7-1365U vPro',
    ram: '32GB LPDDR5',
    storage: '1TB Gen 4 Performance SSD',
    screen: '14" 2.8K OLED Display 100% DCI-P3',
    graphics: 'Intel Iris Xe Graphics',
    price: 144990,
    originalPrice: 168990,
    discount: '14% OFF',
    rating: 4.9,
    reviewsCount: 88,
    availability: 'In Stock',
    badge: 'Enterprise Flagship',
    image: 'assets/images/products/lenovo-thinkpad.jpg',
    gallery: [
      'assets/images/products/lenovo-thinkpad.jpg',
      'assets/images/products/dell-inspiron.jpg',
      'assets/images/hero/hero-2-split.jpg'
    ],
    description: 'Engineered with Intel Evo, the ThinkPad X1 Carbon Gen 11 combines heavyweight performance with ultra-lightweight carbon fiber durability for C-suite professionals and mobile power users.',
    features: ['Military-grade MIL-STD 810H durability', 'FHD + IR camera with Privacy Shutter', 'Dolby Atmos Speaker System', 'Ultralight 1.12 kg chassis']
  },
  {
    id: 'asus-rog',
    brand: 'ASUS',
    model: 'ROG Strix G16 (2024)',
    category: 'Gaming Laptops',
    processor: 'Intel Core i9-13980HX (24 Cores)',
    ram: '32GB DDR5 4800MHz',
    storage: '1TB PCIe 4.0 NVMe M.2 SSD',
    screen: '16" QHD+ 240Hz Nebula HDR Display',
    graphics: 'NVIDIA GeForce RTX 4070 (8GB GDDR6)',
    price: 159990,
    originalPrice: 189990,
    discount: '16% OFF',
    rating: 4.9,
    reviewsCount: 230,
    availability: 'In Stock',
    badge: 'Ultimate Gaming',
    image: 'assets/images/products/asus-rog.jpg',
    gallery: [
      'assets/images/products/asus-rog.jpg',
      'assets/images/products/acer-nitro.jpg',
      'assets/images/hero/hero-poster.jpg'
    ],
    description: 'Dominate every battlefield with the ROG Strix G16. Powered by an extreme Intel Core i9 processor and NVIDIA RTX 40-Series GPU with Conductonaut Extreme liquid metal on the CPU.',
    features: ['ROG Intelligent Cooling with Tri-Fan tech', 'Per-key RGB Chiclet Keyboard', 'Aura Sync Light Bar', 'MUX Switch with NVIDIA Advanced Optimus']
  },
  {
    id: 'acer-nitro',
    brand: 'Acer',
    model: 'Nitro 5 Gaming AN515',
    category: 'Gaming Laptops',
    processor: 'Intel Core i7-12650H',
    ram: '16GB DDR4',
    storage: '512GB Gen 4 NVMe SSD',
    screen: '15.6" FHD 144Hz ComfyView IPS',
    graphics: 'NVIDIA GeForce RTX 3060 (6GB GDDR6)',
    price: 78990,
    originalPrice: 94990,
    discount: '17% OFF',
    rating: 4.7,
    reviewsCount: 165,
    availability: 'In Stock',
    badge: 'Best Value',
    image: 'assets/images/products/acer-nitro.jpg',
    gallery: [
      'assets/images/products/acer-nitro.jpg',
      'assets/images/products/hp-pavilion.jpg',
      'assets/images/products/asus-rog.jpg'
    ],
    description: 'Fire up your gameplay with the Acer Nitro 5. Featuring dual fans, dual-intake ports and a quad-exhaust design, it delivers dependable high-framerate action across modern AAA titles.',
    features: ['Acer CoolBoost Technology', 'NitroSense dedicated UI control', 'DTS:X Ultra 3D spatial audio', 'Killer DoubleShot Pro ethernet']
  },
  {
    id: 'apple-macbook',
    brand: 'Apple',
    model: 'MacBook Pro 16" (M3 Pro)',
    category: 'Professional Laptops',
    processor: 'Apple M3 Pro Chip (12-Core CPU)',
    ram: '36GB Unified Memory',
    storage: '1TB Superfast SSD Storage',
    screen: '16.2" Liquid Retina XDR 120Hz ProMotion',
    graphics: '18-Core Integrated GPU',
    price: 249900,
    originalPrice: 269900,
    discount: '7% OFF',
    rating: 5.0,
    reviewsCount: 312,
    availability: 'In Stock',
    badge: 'Creator Choice',
    image: 'assets/images/products/apple-macbook.jpg',
    gallery: [
      'assets/images/products/apple-macbook.jpg',
      'assets/images/products/macbook-air.jpg',
      'assets/images/hero/hero-laptop.png'
    ],
    description: 'The most advanced chips ever built for a personal computer. With mind-blowing battery life, up to 22 hours, Liquid Retina XDR display, and all the ports you need.',
    features: ['1000 nits sustained, 1600 nits peak brightness', 'Studio-quality three-mic array', 'Six-speaker sound system with Spatial Audio', 'MagSafe 3 with fast charging']
  },
  {
    id: 'macbook-air-m2',
    brand: 'Apple',
    model: 'MacBook Air 13" (M2 Chip)',
    category: 'Student Laptops',
    processor: 'Apple M2 Chip (8-Core CPU)',
    ram: '16GB Unified Memory',
    storage: '512GB SSD Storage',
    screen: '13.6" Liquid Retina Display True Tone',
    graphics: '10-Core Integrated GPU',
    price: 109900,
    originalPrice: 119900,
    discount: '8% OFF',
    rating: 4.9,
    reviewsCount: 220,
    availability: 'In Stock',
    badge: 'Student Favorite',
    image: 'assets/images/products/macbook-air.jpg',
    gallery: [
      'assets/images/products/macbook-air.jpg',
      'assets/images/products/apple-macbook.jpg'
    ],
    description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency inside its durable all-aluminum enclosure.',
    features: ['Fanless completely silent design', 'Up to 18 hours battery life', '1080p FaceTime HD camera', 'Touch ID integrated keyboard']
  },
  {
    id: 'dell-latitude-refurb',
    brand: 'Dell',
    model: 'Latitude 7420 (Certified Refurbished)',
    category: 'Refurbished Laptops',
    processor: 'Intel Core i5-1145G7',
    ram: '16GB DDR4',
    storage: '512GB NVMe SSD',
    screen: '14" FHD IPS Anti-Glare',
    graphics: 'Intel Iris Xe Graphics',
    price: 32990,
    originalPrice: 75000,
    discount: '56% OFF',
    rating: 4.8,
    reviewsCount: 76,
    availability: 'In Stock',
    badge: 'Lapnest Certified',
    image: 'assets/images/products/dell-latitude.jpg',
    gallery: [
      'assets/images/products/dell-latitude.jpg',
      'assets/images/products/dell-inspiron.jpg'
    ],
    description: 'Rigorous 40-point quality inspected corporate off-lease laptop. Includes brand new battery replacement and full 1-Year Lapnest Comprehensive Warranty.',
    features: ['1-Year Full Warranty', 'Carbon fiber lid', 'ExpressConnect network booster', 'Fingerprint reader on power button']
  },
  {
    id: 'lenovo-thinkpad-refurb',
    brand: 'Lenovo',
    model: 'ThinkPad T480 (Certified Refurbished)',
    category: 'Refurbished Laptops',
    processor: 'Intel Core i5-8350U Quad-Core',
    ram: '16GB DDR4 (Dual Channel)',
    storage: '256GB SSD + 500GB HDD',
    screen: '14" FHD IPS Matte Display',
    graphics: 'Intel UHD 620 Graphics',
    price: 24990,
    originalPrice: 65000,
    discount: '61% OFF',
    rating: 4.7,
    reviewsCount: 114,
    availability: 'In Stock',
    badge: 'Budget King',
    image: 'assets/images/products/thinkpad-t480.jpg',
    gallery: [
      'assets/images/products/thinkpad-t480.jpg',
      'assets/images/products/lenovo-thinkpad.jpg'
    ],
    description: 'The legendary durable workhorse. Famous for its modular upgradability, dual-battery bridge system, and the world’s best typing keyboard.',
    features: ['Bridge Dual Battery system', 'Spill-resistant keyboard with TrackPoint', 'Dual Thunderbolt 3 + USB-C', '1-Year Lapnest Warranty']
  },
  {
    id: 'accessory-mouse',
    brand: 'Logitech',
    model: 'MX Master 3S Wireless Mouse',
    category: 'Accessories',
    processor: '8000 DPI Darkfield Sensor',
    ram: 'Quiet Click Switches',
    storage: 'USB-C Fast Charging (70 Days)',
    screen: 'MagSpeed Electromagnetic Wheel',
    graphics: 'Bluetooth & Logi Bolt Receiver',
    price: 8995,
    originalPrice: 10995,
    discount: '18% OFF',
    rating: 4.9,
    reviewsCount: 340,
    availability: 'In Stock',
    badge: 'Best Seller',
    image: 'assets/images/products/accessory-mouse.jpg',
    gallery: [
      'assets/images/products/accessory-mouse.jpg'
    ],
    description: 'An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.',
    features: ['Tracks anywhere—even on glass', 'Quiet Clicks with 90% noise reduction', 'App-specific customizations', 'Cross-computer Flow control']
  },
  {
    id: 'accessory-keyboard',
    brand: 'Keychron',
    model: 'Keychron K2 Wireless Mechanical',
    category: 'Accessories',
    processor: 'Gateron G Pro Mechanical Switches',
    ram: 'Hot-Swappable PCB',
    storage: '4000mAh Lithium Polymer Battery',
    screen: '84 Keys 75% Compact Layout',
    graphics: 'RGB Backlit (18 Light Modes)',
    price: 7999,
    originalPrice: 9999,
    discount: '20% OFF',
    rating: 4.8,
    reviewsCount: 180,
    availability: 'In Stock',
    badge: 'Enthusiast',
    image: 'assets/images/products/accessory-keyboard.jpg',
    gallery: [
      'assets/images/products/accessory-keyboard.jpg'
    ],
    description: 'A tactile wireless mechanical keyboard featuring both Mac and Windows layouts, wireless Bluetooth 5.1 pairing with up to 3 devices, and durable aluminum frame.',
    features: ['Mac & Windows dedicated keycaps included', 'Connect up to 3 devices via Bluetooth', 'USB Type-C wired mode option', 'N-key rollover in wired mode']
  },
  {
    id: 'accessory-stand',
    brand: 'Lapnest Pro',
    model: 'Ergonomic Aluminum Laptop Stand',
    category: 'Accessories',
    processor: 'Aerospace-Grade CNC Aluminum',
    ram: 'Ventilated Open Cooling Design',
    storage: 'Supports up to 17" Laptops',
    screen: 'Adjustable 6-Level Elevation',
    graphics: 'Anti-Slip Silicone Cushioning',
    price: 1899,
    originalPrice: 2999,
    discount: '37% OFF',
    rating: 4.9,
    reviewsCount: 290,
    availability: 'In Stock',
    badge: 'Essential',
    image: 'assets/images/products/accessory-stand.jpg',
    gallery: [
      'assets/images/products/accessory-stand.jpg'
    ],
    description: 'Premium folding laptop stand crafted from solid anodized aluminum alloy. Elevates your laptop to eye level to alleviate neck strain while optimizing cooling airflow.',
    features: ['Prevents laptop thermal throttling', 'Foldable portable carrying profile', 'Premium matte dark titanium finish', 'Supports weight up to 10 kg']
  }
];

// Helper: Format price to INR format (₹54,990)
function formatINR(number) {
  return '₹' + number.toLocaleString('en-IN');
}

// Generate single Product Card HTML with Equal-Height & 3D Tilt layout
function renderProductCardHTML(product) {
  return `
    <article class="tilt-card equal-card rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all duration-300 overflow-hidden shadow-card-dark group">
      <!-- Image & Badges -->
      <div class="relative aspect-[16/10] overflow-hidden bg-[#111e26]">
        <img src="${product.image}"
             alt="${product.brand} ${product.model}"
             loading="lazy"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        
        <!-- Discount / Badge -->
        <div class="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
          <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-[#FD802E] text-white shadow-sm uppercase tracking-wider" style="background-color: #FD802E !important; color: #ffffff !important;">
            ${product.discount}
          </span>
          ${product.badge ? `
            <span class="product-dark-badge px-2.5 py-1 text-[11px] font-bold rounded-md bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-sm" style="background-color: rgba(0,0,0,0.85) !important; color: #ffffff !important;">
              ${product.badge}
            </span>
          ` : ''}
        </div>

        <!-- Rating pill -->
        <div class="rating-pill-dark absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-white shadow-sm z-10" style="background-color: rgba(0,0,0,0.85) !important; color: #ffffff !important;">
          <svg class="w-3.5 h-3.5 text-[#FD802E] fill-current" viewBox="0 0 20 20" style="color: #FD802E !important; fill: #FD802E !important;">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="rating-score font-bold text-white" style="color: #ffffff !important;">${product.rating}</span>
          <span class="rating-count text-white/80 text-[11px]" style="color: rgba(255, 255, 255, 0.8) !important;">(${product.reviewsCount})</span>
        </div>
      </div>

      <!-- Card Body (flex-1 ensures equal card heights across row) -->
      <div class="p-5 sm:p-6 equal-card-body">
        <div class="flex items-center justify-between text-xs text-[#9fb3be] mb-1.5">
          <span class="font-semibold text-[#FD802E] uppercase tracking-wider">${product.brand}</span>
          <span class="inline-flex items-center gap-1 text-emerald-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${product.availability}
          </span>
        </div>

        <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors line-clamp-1 mb-2">
          ${product.model}
        </h3>

        <!-- Key specs chips -->
        <div class="space-y-1.5 mb-4 text-xs text-[#9fb3be] bg-[#111e26] p-3 rounded-xl border border-[#233D4C]">
          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#FD802E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            <span class="truncate">${product.processor}</span>
          </div>
          <div class="flex items-center justify-between gap-2 pt-1 border-t border-[#233D4C]/60">
            <span class="truncate">RAM: <strong class="text-white font-medium">${product.ram}</strong></span>
            <span class="truncate">SSD: <strong class="text-white font-medium">${product.storage}</strong></span>
          </div>
        </div>

        <!-- Price Section -->
        <div class="flex items-baseline gap-2 mb-4">
          <span class="text-xl sm:text-2xl font-black text-white">${formatINR(product.price)}</span>
          <span class="text-xs sm:text-sm text-[#9fb3be] line-through">${formatINR(product.originalPrice)}</span>
        </div>

        <!-- Equal Card Footer (Actions push to bottom) -->
        <div class="equal-card-footer grid grid-cols-2 gap-2.5">
          <a href="product-details.html?id=${product.id}"
             class="px-3 py-2.5 rounded-xl text-center text-xs sm:text-sm font-semibold border border-[#233D4C] hover:border-[#FD802E] text-white hover:text-[#FD802E] transition-colors duration-200">
            View Details
          </a>
          <a href="order.html?product=${product.id}"
             class="px-3 py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-200">
            Order Now
          </a>
        </div>
      </div>
    </article>
  `;
}

// Listing Page Controller (filters, sort, pagination)
function initProductsListing() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const countBadge = document.getElementById('products-count-badge');
  const searchInput = document.getElementById('product-filter-search');
  const sortSelect = document.getElementById('product-sort-select');
  const brandCheckboxes = document.querySelectorAll('.filter-brand');
  const categoryCheckboxes = document.querySelectorAll('.filter-category');
  const priceRadios = document.querySelectorAll('input[name="filter-price"]');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');

  function getActiveFilters() {
    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const sort = sortSelect ? sortSelect.value : 'featured';

    const selectedBrands = Array.from(brandCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    const selectedCategories = Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    let selectedPrice = 'all';
    priceRadios.forEach(r => {
      if (r.checked) selectedPrice = r.value;
    });

    return { q, sort, selectedBrands, selectedCategories, selectedPrice };
  }

  function filterProducts() {
    const { q, sort, selectedBrands, selectedCategories, selectedPrice } = getActiveFilters();

    let filtered = LAPNEST_PRODUCTS.filter(product => {
      // Search
      if (q) {
        const text = `${product.brand} ${product.model} ${product.category} ${product.processor} ${product.ram} ${product.storage}`.toLowerCase();
        if (!text.includes(q)) return false;
      }

      // Brand
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(product.brand.toLowerCase())) return false;
      }

      // Category
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(product.category.toLowerCase())) return false;
      }

      // Price Range
      if (selectedPrice !== 'all') {
        const p = product.price;
        if (selectedPrice === 'under-30k' && p >= 30000) return false;
        if (selectedPrice === '30k-60k' && (p < 30000 || p > 60000)) return false;
        if (selectedPrice === '60k-100k' && (p < 60000 || p > 100000)) return false;
        if (selectedPrice === 'above-100k' && p <= 100000) return false;
      }

      return true;
    });

    // Sorting
    if (sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'name') {
      filtered.sort((a, b) => a.model.localeCompare(b.model));
    }

    // Render cards
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-[#9fb3be] bg-[#172731] rounded-2xl border border-[#233D4C]">
          <svg class="w-16 h-16 mx-auto mb-4 text-[#FD802E]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-lg font-bold text-white">No Laptops Found</h3>
          <p class="text-sm mt-1 max-w-md mx-auto">No laptops match your selected filters. Try clearing some filters or searching with different keywords.</p>
          <button id="reset-filter-inline" class="mt-4 px-4 py-2 bg-[#FD802E] hover:bg-[#ff9248] text-white rounded-xl font-bold text-sm shadow-md shadow-[#FD802E]/25">Clear All Filters</button>
        </div>
      `;
      const inlineReset = document.getElementById('reset-filter-inline');
      if (inlineReset) inlineReset.addEventListener('click', clearAll);
    } else {
      container.innerHTML = filtered.map(renderProductCardHTML).join('');
      // Re-init 3D tilt effects on freshly rendered cards
      if (window.init3DTiltCards) window.init3DTiltCards();
      if (window.reinitScrollAnimations) window.reinitScrollAnimations();
    }

    // Update count badge
    if (countBadge) {
      countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Product' : 'Products'}`;
    }
  }

  function clearAll() {
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';
    brandCheckboxes.forEach(cb => cb.checked = false);
    categoryCheckboxes.forEach(cb => cb.checked = false);
    priceRadios.forEach(r => {
      if (r.value === 'all') r.checked = true;
    });
    filterProducts();
  }

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (sortSelect) sortSelect.addEventListener('change', filterProducts);
  brandCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
  categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
  priceRadios.forEach(r => r.addEventListener('change', filterProducts));
  if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearAll);

  // Initial render
  filterProducts();
}

// Product Details Page Controller
function initProductDetails() {
  const detailsContainer = document.getElementById('product-details-container');
  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'dell-inspiron';

  const product = LAPNEST_PRODUCTS.find(p => p.id === productId) || LAPNEST_PRODUCTS[0];

  // Set document title
  document.title = `${product.brand} ${product.model} – LAPNEST`;

  // Populate dynamic details
  const mainImage = document.getElementById('details-main-image');
  const thumbnailsContainer = document.getElementById('details-thumbnails');
  const titleEl = document.getElementById('details-title');
  const brandEl = document.getElementById('details-brand');
  const priceEl = document.getElementById('details-price');
  const origPriceEl = document.getElementById('details-original-price');
  const discountEl = document.getElementById('details-discount');
  const ratingEl = document.getElementById('details-rating');
  const descEl = document.getElementById('details-desc');
  const orderLink = document.getElementById('details-order-link');
  const breadcrumbEl = document.getElementById('details-breadcrumb-current');

  if (titleEl) titleEl.textContent = `${product.brand} ${product.model}`;
  if (brandEl) brandEl.textContent = product.brand;
  if (priceEl) priceEl.textContent = formatINR(product.price);
  if (origPriceEl) origPriceEl.textContent = formatINR(product.originalPrice);
  if (discountEl) discountEl.textContent = product.discount;
  if (ratingEl) ratingEl.textContent = `${product.rating} (${product.reviewsCount} verified reviews)`;
  if (descEl) descEl.textContent = product.description;
  if (orderLink) orderLink.href = `order.html?product=${product.id}`;
  if (breadcrumbEl) breadcrumbEl.textContent = `${product.brand} ${product.model}`;

  // Main Image & Gallery Thumbnails
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.model;
  }

  if (thumbnailsContainer && product.gallery) {
    thumbnailsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
      <button type="button" class="thumb-btn aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-[#FD802E] scale-105' : 'border-[#233D4C] hover:border-gray-500'}" data-img="${imgUrl}">
        <img src="${imgUrl}" alt="${product.model} view ${idx + 1}" class="w-full h-full object-cover">
      </button>
    `).join('');

    const thumbBtns = thumbnailsContainer.querySelectorAll('.thumb-btn');
    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const newSrc = btn.getAttribute('data-img');
        if (mainImage) {
          mainImage.src = newSrc;
        }
        thumbBtns.forEach(b => {
          b.classList.remove('border-[#FD802E]', 'scale-105');
          b.classList.add('border-[#233D4C]');
        });
        btn.classList.add('border-[#FD802E]', 'scale-105');
        btn.classList.remove('border-[#233D4C]');
      });
    });
  }

  // Specifications table
  const specsTable = document.getElementById('details-specs-table');
  if (specsTable) {
    const specs = [
      { label: 'Processor', val: product.processor },
      { label: 'Installed Memory (RAM)', val: product.ram },
      { label: 'Primary Storage (SSD)', val: product.storage },
      { label: 'Display Panel', val: product.screen },
      { label: 'Graphics Processor', val: product.graphics },
      { label: 'Operating System', val: 'Windows 11 Pro / macOS' },
      { label: 'Warranty Coverage', val: '1 Year Lapnest Comprehensive + Onsite Support' },
      { label: 'Package Inclusions', val: 'Laptop, Original Fast Charger, Velvet Sleeve, Warranty Card' }
    ];

    specsTable.innerHTML = specs.map(s => `
      <tr class="border-b border-[#233D4C]">
        <td class="py-3 px-4 text-xs sm:text-sm font-semibold text-[#9fb3be] bg-[#111e26] w-1/3 sm:w-1/4">${s.label}</td>
        <td class="py-3 px-4 text-xs sm:text-sm text-white font-medium">${s.val}</td>
      </tr>
    `).join('');
  }

  // Related products
  const relatedContainer = document.getElementById('details-related-products');
  if (relatedContainer) {
    const related = LAPNEST_PRODUCTS
      .filter(p => p.id !== product.id)
      .slice(0, 3);
    relatedContainer.innerHTML = related.map(renderProductCardHTML).join('');
    if (window.init3DTiltCards) window.init3DTiltCards();
    if (window.reinitScrollAnimations) window.reinitScrollAnimations();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initProductsListing();
  initProductDetails();
});
