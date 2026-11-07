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
      '"Black Screen" with faint image under torchlight',
      'Bleeding ink stains spreading across the matrix',
      'Hinge tear causing EDP cable severed connection'
    ],
    procedures: [
      'Battery isolation to protect backlight rail fuse',
      'Ultrasonic bezel separation with thermal pad',
      'Exact panel model & 30/40-pin EDP verification',
      'Factory-grade pull-tab adhesive alignment',
      'True-tone RGB color calibration & pixel check'
    ],
    pricing: [
      { label: 'Standard 15.6" HD / FHD Panel:', price: '₹2,499 – ₹3,499' },
      { label: '144Hz IPS High Refresh Gaming:', price: '₹4,200 – ₹5,800' },
      { label: 'MacBook Air Retina Assembly:', price: '₹7,990 onwards' },
      { label: 'Touch Screen Digitizer Units:', price: 'Custom Quote' },
      { label: 'Zero Dead-Pixel Diagnostic:', price: 'Included (FREE)' }
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
      'Battery percentage stuck at 0% or dropping rapidly',
      'Swollen battery lifting trackpad or chassis casing',
      'Laptop cuts off instantly when charger unplugged',
      '"Plugged in, Not Charging" status alert in OS',
      'Loose or burnt USB-C port requiring cable bending'
    ],
    procedures: [
      'SMBus communication & cycle telemetry audit',
      'Thermal detachment of OEM battery adhesive tabs',
      'Power rail voltage audit (19V, 3.3V, 5V standby)',
      'Certified Grade-A OEM replacement cell install',
      'Full charge/discharge benchmark & gas calibration'
    ],
    pricing: [
      { label: 'Standard 3-Cell / 4-Cell Battery:', price: '₹1,899 – ₹2,999' },
      { label: 'High-Capacity MacBook Retina:', price: '₹3,800 – ₹5,400' },
      { label: 'Charging IC / MOSFET Logic Fix:', price: '₹1,499 – ₹2,200' },
      { label: 'USB-C PD Port Micro-Soldering:', price: '₹1,299 – ₹1,899' },
      { label: 'Electrochemical Impedance Audit:', price: 'Included (FREE)' }
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
      'Completely dead with zero LED (0.00A current draw)',
      'Power light active but screen remains blank',
      'Sudden shutdown or reboot under GPU/CPU loads',
      'Liquid spill residue or corrosion on circuit traces',
      'Infinite reboot loop or frozen on splash logo'
    ],
    procedures: [
      'FLIR thermal scan to pinpoint shorted capacitors',
      'Hakko / Weller micro-soldering component swap',
      'Ultrasonic chemical bath to eliminate corrosion',
      'Hardware SPI programmer for clean ME flashing',
      '4-Hour AIDA64 stress certification report'
    ],
    pricing: [
      { label: 'Main Rail Short-Circuit Repair:', price: '₹1,499 – ₹2,499' },
      { label: 'Corrupted BIOS SPI Reflashing:', price: '₹1,299 – ₹1,899' },
      { label: 'Liquid Ultrasonic Deoxidation:', price: '₹2,499 – ₹3,800' },
      { label: 'GPU/VRAM Optical BGA Reballing:', price: '₹3,999 – ₹5,999' },
      { label: '40-Point Cleanroom Telemetry:', price: 'Included (FREE)' }
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
      '100% disk usage causing severe OS freezes and lag',
      'Boot time taking over 2 to 5 minutes on hard disk',
      'Out of memory alerts in Chrome, CAD, or IDEs',
      'SMART disk read errors & imminent crash warnings',
      'Sluggish application launch times on older machines'
    ],
    procedures: [
      'Sector-level SMART health check & clone audit',
      'High-speed bit-for-bit cloning of all OS files',
      'Clean installation of Gen4 NVMe with thermal foil',
      'Matched dual-channel RAM kit installation',
      'CrystalDiskMark read/write verification test'
    ],
    pricing: [
      { label: '512GB Gen4 NVMe + Free Clone:', price: '₹2,499 – ₹3,299' },
      { label: '1TB Ultra-Fast Gen4 + Free Clone:', price: '₹4,499 – ₹5,999' },
      { label: '8GB / 16GB High-Speed DDR4/DDR5:', price: '₹1,699 – ₹3,499' },
      { label: 'Bit-for-Bit Disk Cloning Only:', price: '₹799 (FREE with SSD)' },
      { label: 'Speed Benchmark & Verification:', price: 'Included (FREE)' }
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
      'Specific keys typing wrong characters or repeating',
      'Spilled drink causing sticky or dead keys',
      'Trackpad cursor drifting or failing to click',
      'Keycap physically detached or broken scissor clip',
      'Keyboard backlight completely unlit or flickering'
    ],
    procedures: [
      'Frame disassembly & ultrasonic rivet extraction',
      'OEM keyboard alignment with chassis backplate',
      'Precision hot-melt staking to eliminate deck flex',
      'Trackpad ribbon cable testing & grounding audit',
      'Full keyboard tester check across all keys'
    ],
    pricing: [
      { label: 'Standard Chiclet Keyboard:', price: '₹1,299 – ₹1,899' },
      { label: 'Gaming RGB / Backlit Keyboard:', price: '₹1,899 – ₹2,999' },
      { label: 'ThinkPad OEM Keyboard Unit:', price: '₹1,699 – ₹2,499' },
      { label: 'Precision Glass Trackpad Fix:', price: '₹1,499 – ₹2,699' },
      { label: 'Key-Matrix & Sensor Calibration:', price: 'Included (FREE)' }
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
      'Spilled coffee, tea, juice, or water on keyboard',
      'Laptop turned off immediately after liquid contact',
      'Green/white corrosion crust on PCB copper traces',
      'Laptop will not charge or adapter LED cuts off',
      'Sticky keys, erratic fans, and thermal shutdowns'
    ],
    procedures: [
      'Immediate battery isolation to prevent erosion',
      'Complete logic board ultrasonic tank wash',
      '65°C controlled oven dehydration treatment',
      'Microscope micro-trace jumper reconstruction',
      'Low-current bench power injection testing'
    ],
    pricing: [
      { label: 'Ultrasonic Decontamination & Dry:', price: '₹1,899 – ₹2,499' },
      { label: 'Trace Jumping & Micro-Soldering:', price: '₹2,499 – ₹3,800' },
      { label: 'Keyboard Ingress Replacement:', price: '₹1,499 – ₹2,999' },
      { label: 'Diagnostic & Feasibility Check:', price: '₹0 (FREE)' },
      { label: '90-Day Cleanroom Warranty:', price: 'Included (FREE)' }
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

  // Symptoms List (Calibrated equal row height min-h-[3.25rem])
  const symptomsEl = document.getElementById('service-symptoms-list');
  if (symptomsEl) {
    symptomsEl.innerHTML = service.symptoms.map(s => `
      <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
        <span>${s}</span>
      </li>
    `).join('');
  }

  // Technical Procedures List (Calibrated equal row height min-h-[3.25rem])
  const proceduresEl = document.getElementById('service-procedures-list');
  if (proceduresEl) {
    proceduresEl.innerHTML = service.procedures.map((p, idx) => `
      <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">0${idx + 1}</span>
        <span>${p}</span>
      </li>
    `).join('');
  }

  // Pricing & Turnaround (Calibrated equal row height min-h-[3.25rem])
  const pricingEl = document.getElementById('service-pricing-list');
  if (pricingEl) {
    pricingEl.innerHTML = service.pricing.map(item => `
      <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="text-[#9fb3be]">${item.label}</span>
        <strong class="text-white text-right shrink-0">${item.price}</strong>
      </div>
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
