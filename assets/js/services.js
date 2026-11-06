/**
 * LAPNEST - Service Details Controller
 * Dynamically renders specialized service data based on URL parameter ?service=...
 */

const LAPNEST_SERVICES = {
  screen: {
    id: 'screen',
    crumb: 'Display & Screen Panel',
    protocol: 'Specialized Cleanroom Protocol',
    title: 'Laptop Screen & Display Panel Replacement',
    description: 'Restoring vibrant, true-to-life color visuals with original manufacturer display glass. We service non-touch, 10-point capacitive touch, 144Hz–240Hz gaming panels, and Apple Retina assemblies.',
    turnaround: 'Turnaround: 45 to 90 Minutes',
    warranty: '1-Year Zero Dead-Pixel Warranty',
    image: 'assets/images/services/screen-repair.jpg',
    imageAlt: 'Screen Replacement Service',
    symptoms: [
      'Spiderweb impact cracks from dropped laptops',
      'Vertical color lines or flickering backlight strips',
      '"Black Screen" with faint image visible under torchlight',
      'Bleeding ink stains spreading across the matrix',
      'Hinge tear causing EDP cable severed connection'
    ],
    procedures: [
      '1. Battery isolation to prevent motherboard backlight fuse blowout',
      '2. Ultrasonic bezel separation with heat pad',
      '3. Exact panel model number & 30-pin/40-pin EDP verification',
      '4. OEM adhesive pull-tape alignment',
      '5. Color uniformity & RGB calibration check'
    ],
    pricing: [
      { label: 'Standard 15.6" HD / FHD Panel:', price: '₹2,499 – ₹3,499' },
      { label: '144Hz IPS High Refresh Gaming:', price: '₹4,200 – ₹5,800' },
      { label: 'MacBook Air Retina Assembly:', price: '₹7,990 onwards' },
      { label: 'Touch Screen Digitizer Units:', price: 'Custom Quote' }
    ]
  },

  battery: {
    id: 'battery',
    crumb: 'Battery Health & Power Rails',
    protocol: 'ESD-Safe Cleanroom Battery Protocol',
    title: 'Battery Health & Power Rail Replacement',
    description: 'Grade-A certified replacement battery packs, logic board charging IC troubleshooting, and Type-C Power Delivery port resoldering with full battery gas gauge calibration.',
    turnaround: 'Turnaround: 30 to 60 Minutes',
    warranty: '1-Year Comprehensive Battery Warranty',
    image: 'assets/images/services/battery-replace.jpg',
    imageAlt: 'Battery Replacement Service',
    symptoms: [
      'Battery percentage stuck at 0% or dropping rapidly within minutes',
      'Swollen battery lifting trackpad or separating laptop bottom chassis',
      'Laptop instantly cuts off the moment the AC power adapter is disconnected',
      '"Plugged in, Not Charging" status alert in Windows or macOS power menu',
      'Loose or burnt USB-C charging port requiring cable bending to charge'
    ],
    procedures: [
      '1. Battery SMBus communication and cycle count health telemetry audit',
      '2. Thermal detachment of OEM battery adhesive pull-tabs using ESD-safe tools',
      '3. Power rail voltage verification (19V/20V, 3.3V, and 5V standby rails)',
      '4. Installation of brand-new Grade-A certified OEM replacement cell',
      '5. 0% to 100% full charge/discharge benchmark and thermal telemetry audit'
    ],
    pricing: [
      { label: 'Standard 3-Cell / 4-Cell Internal Battery:', price: '₹1,899 – ₹2,999' },
      { label: 'High-Capacity MacBook Retina Battery:', price: '₹3,800 – ₹5,400' },
      { label: 'Charging IC / MOSFET Logic Board Fix:', price: '₹1,499 – ₹2,200' },
      { label: 'USB-C PD Port Micro-Soldering:', price: '₹1,299 – ₹1,899' }
    ]
  },

  motherboard: {
    id: 'motherboard',
    crumb: 'Motherboard Chip-Level Repair',
    protocol: 'Class-100 Cleanroom Micro-Soldering Station',
    title: 'Motherboard Chip-Level & Micro-Soldering Repair',
    description: 'Component-level troubleshooting, short-circuit tracking, blown MOSFET and charging IC replacement, BGA chip reballing, and corrupted BIOS re-flashing down to micron precision.',
    turnaround: 'Turnaround: Same Day to 24 Hours',
    warranty: '180-Day Comprehensive Board Warranty',
    image: 'assets/images/services/motherboard-repair.jpg',
    imageAlt: 'Motherboard Micro-Soldering Service',
    symptoms: [
      'Laptop completely dead with zero LED activity (0.00A current draw)',
      'Power light turns on but screen remains completely blank (No POST)',
      'Sudden shutdown or reboot under GPU / CPU heavy loads',
      'Corrosion residues or burn marks from liquid spills on circuit traces',
      'Stuck in infinite reboot loop or frozen on manufacturer splash logo'
    ],
    procedures: [
      '1. FLIR thermal camera scan to pinpoint shorted ceramic capacitors & ICs',
      '2. Precision Hakko / Weller micro-soldering station component swap',
      '3. Ultrasonic bath cleaning with circuit cleaner to remove flux and corrosion',
      '4. High-speed hardware SPI programmer for clean BIOS ME region flashing',
      '5. 4-Hour AIDA64 & FurMark stress test to certify voltage stability'
    ],
    pricing: [
      { label: 'Main Power Rail Short-Circuit Repair:', price: '₹1,499 – ₹2,499' },
      { label: 'Corrupted BIOS ROM Hardware Reflashing:', price: '₹1,299 – ₹1,899' },
      { label: 'Liquid Damage Ultrasonic Restoration:', price: '₹2,499 – ₹3,800' },
      { label: 'GPU / CPU Dedicated VRAM BGA Reballing:', price: '₹3,999 – ₹5,999' }
    ]
  },

  ssd: {
    id: 'ssd',
    crumb: 'RAM & NVMe SSD Upgrades',
    protocol: '30-Minute High-Speed Cleanroom Bench',
    title: '30-Minute In-Store RAM & NVMe SSD Upgrades',
    description: 'Transform sluggish laptop performance by upgrading to Gen4 NVMe SSDs and dual-channel high-frequency RAM. Includes free bit-for-bit disk cloning with zero data loss.',
    turnaround: 'Turnaround: 30 Minutes In-Store',
    warranty: '3 to 5 Years Hardware Warranty',
    image: 'assets/images/services/ssd-upgrade.jpg',
    imageAlt: 'RAM & SSD Hardware Upgrade',
    symptoms: [
      '100% disk usage causing severe Windows / macOS freezing and lag',
      'Boot time taking over 2 to 5 minutes on legacy mechanical hard drives',
      'Out of memory warnings in Chrome, Photoshop, Premiere, or developer IDEs',
      'SMART disk read errors and imminent drive crash warnings',
      'Sluggish application launch times on 3-to-5 year old laptops'
    ],
    procedures: [
      '1. Sector-level SMART health check and disk clone compatibility audit',
      '2. High-speed bit-for-bit cloning of all OS files, apps, and bookmarks',
      '3. Clean installation of high-speed Gen4 NVMe SSD with thermal pads',
      '4. Matched dual-channel RAM kit installation & dual-rank validation',
      '5. CrystalDiskMark read/write verification benchmark (up to 7000MB/s)'
    ],
    pricing: [
      { label: '512GB Gen4 NVMe SSD + Free OS Clone:', price: '₹2,499 – ₹3,299' },
      { label: '1TB Ultra-Fast Gen4 SSD + Free OS Clone:', price: '₹4,499 – ₹5,999' },
      { label: '8GB / 16GB High-Speed DDR4/DDR5 RAM:', price: '₹1,699 – ₹3,499' },
      { label: 'Bit-for-Bit Disk Cloning Only:', price: '₹799 (FREE with SSD)' }
    ]
  },

  keyboard: {
    id: 'keyboard',
    crumb: 'Keyboard & Trackpad Replacement',
    protocol: 'OEM Input Hardware Calibration Bench',
    title: 'Keyboard & Precision Trackpad Replacement',
    description: 'Replacing non-responsive, sticky, or missing keys with authentic OEM keyboards. Includes backlit RGB units, spill-resistant ThinkPad keyboards, and Apple Force Touch trackpads.',
    turnaround: 'Turnaround: 45 to 90 Minutes',
    warranty: '180-Day Functional Warranty',
    image: 'assets/images/services/keyboard-repair.jpg',
    imageAlt: 'Keyboard Replacement Service',
    symptoms: [
      'Specific keys typing wrong characters or repeating uncontrollably',
      'Spilled liquid causing sticky, gummy, or completely dead keys',
      'Trackpad cursor drifting, erratically jumping, or failing to click',
      'Keycap physically detached or broken scissor-mechanism clip',
      'Keyboard backlight completely unlit or flickering'
    ],
    procedures: [
      '1. Frame disassembly and plastic rivet extraction using ultrasonic cutter',
      '2. OEM replacement keyboard alignment with chassis reinforcement plate',
      '3. Precision hot-melt staking to ensure zero keyboard deck flex',
      '4. Trackpad ribbon cable testing and grounding calibration',
      '5. Full keyboard tester software check across all 84–108 keys'
    ],
    pricing: [
      { label: 'Standard Chiclet Non-Backlit Keyboard:', price: '₹1,299 – ₹1,899' },
      { label: 'Gaming RGB / Backlit Keyboard Unit:', price: '₹1,899 – ₹2,999' },
      { label: 'ThinkPad Classic / Latitude OEM Keyboard:', price: '₹1,699 – ₹2,499' },
      { label: 'Precision Glass Trackpad Replacement:', price: '₹1,499 – ₹2,699' }
    ]
  },

  liquid: {
    id: 'liquid',
    crumb: 'Emergency Liquid Restoration',
    protocol: 'Emergency Liquid Decontamination Protocol',
    title: 'Emergency Liquid Ingress & Ultrasonic Restoration',
    description: 'Immediate power rail neutralization, ultrasonic bath cleaning, and micro-soldering trace reconstruction to rescue water-, coffee-, and liquid-damaged laptops.',
    turnaround: 'Turnaround: Same-Day Priority (4 to 8 Hours)',
    warranty: '90-Day Cleanroom Warranty',
    image: 'assets/images/services/motherboard-repair.jpg',
    imageAlt: 'Liquid Damage Ultrasonic Restoration',
    symptoms: [
      'Coffee, tea, juice, or water accidentally spilled on keyboard or vents',
      'Laptop turned off immediately after liquid contact',
      'Green/white corrosion crust visible on PCB copper traces',
      'Laptop will not turn on or charger light shuts off when plugged in',
      'Sticky keys, erratic fan spinning, and sudden thermal shutdowns'
    ],
    procedures: [
      '1. Immediate battery disconnection to prevent active electrochemical erosion',
      '2. Complete logic board removal and ultrasonic tank bath with solvent',
      '3. Controlled oven dehydration at 65°C to eliminate micro-moisture',
      '4. Microscope inspection of eroded copper traces and jumper bridge repair',
      '5. Low-current bench power injection testing to ensure safe booting'
    ],
    pricing: [
      { label: 'Ultrasonic Bath Decontamination & Dry:', price: '₹1,899 – ₹2,499' },
      { label: 'Trace Reconstruction & Micro-Soldering:', price: '₹2,499 – ₹3,800' },
      { label: 'Keyboard Ingress Replacement:', price: '₹1,499 – ₹2,999' },
      { label: 'Diagnostic & Feasibility Inspection:', price: '₹0 (Free)' }
    ]
  }
};

// Map aliases (e.g. ram -> ssd)
LAPNEST_SERVICES.ram = LAPNEST_SERVICES.ssd;

/**
 * Render service content dynamically into service-details.html
 */
function renderServiceDetails(serviceKey) {
  const service = LAPNEST_SERVICES[serviceKey] || LAPNEST_SERVICES.screen;

  // Update Page Title
  document.title = `${service.title} – LAPNEST Cleanroom Lab`;

  // Breadcrumb
  const crumbEl = document.getElementById('service-crumb-title');
  if (crumbEl) crumbEl.textContent = service.crumb;

  // Header Protocol & Titles
  const protocolEl = document.getElementById('service-protocol-tag');
  if (protocolEl) protocolEl.textContent = service.protocol;

  const titleEl = document.getElementById('service-main-title');
  if (titleEl) titleEl.textContent = service.title;

  const descEl = document.getElementById('service-main-desc');
  if (descEl) descEl.textContent = service.description;

  const turnaroundEl = document.getElementById('service-turnaround-badge');
  if (turnaroundEl) turnaroundEl.textContent = service.turnaround;

  const warrantyEl = document.getElementById('service-warranty-badge');
  if (warrantyEl) warrantyEl.textContent = service.warranty;

  // Hero Image
  const imgEl = document.getElementById('service-main-image');
  if (imgEl) {
    imgEl.src = service.image;
    imgEl.alt = service.imageAlt || service.title;
  }

  // Symptoms List
  const symptomsEl = document.getElementById('service-symptoms-list');
  if (symptomsEl) {
    symptomsEl.innerHTML = service.symptoms.map(s => `<li>• ${s}</li>`).join('');
  }

  // Technical Procedures List
  const proceduresEl = document.getElementById('service-procedures-list');
  if (proceduresEl) {
    proceduresEl.innerHTML = service.procedures.map(p => `<li>${p}</li>`).join('');
  }

  // Pricing & Turnaround
  const pricingEl = document.getElementById('service-pricing-list');
  if (pricingEl) {
    pricingEl.innerHTML = service.pricing.map((item, idx) => `
      <p class="flex justify-between ${idx < service.pricing.length - 1 ? 'border-b border-[#233D4C]/50 pb-1.5' : ''}">
        <span>${item.label}</span>
        <strong class="text-white">${item.price}</strong>
      </p>
    `).join('');
  }

  // Update active pill button state
  const tabs = document.querySelectorAll('.service-tab-btn');
  tabs.forEach(tab => {
    const tabKey = tab.getAttribute('data-service');
    if (tabKey === service.id || (tabKey === 'ssd' && serviceKey === 'ram')) {
      tab.classList.remove('bg-[#172731]', 'text-[#9fb3be]', 'border-[#233D4C]');
      tab.classList.add('bg-[#FD802E]', 'text-white', 'border-[#FD802E]', 'shadow-md', 'shadow-[#FD802E]/25');
    } else {
      tab.classList.remove('bg-[#FD802E]', 'text-white', 'border-[#FD802E]', 'shadow-md', 'shadow-[#FD802E]/25');
      tab.classList.add('bg-[#172731]', 'text-[#9fb3be]', 'border-[#233D4C]');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Read service parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentServiceKey = (urlParams.get('service') || 'screen').toLowerCase();

  // Initial render
  renderServiceDetails(currentServiceKey);

  // Tab click listeners
  const tabs = document.querySelectorAll('.service-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetService = tab.getAttribute('data-service');
      if (targetService) {
        // Update URL query parameter without full reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('service', targetService);
        window.history.pushState({ service: targetService }, '', newUrl);

        renderServiceDetails(targetService);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const params = new URLSearchParams(window.location.search);
    const key = (params.get('service') || 'screen').toLowerCase();
    renderServiceDetails(key);
  });
});
