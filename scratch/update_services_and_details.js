const fs = require('fs');

console.log('=== UPDATING ASSETS/JS/SERVICES.JS AND SERVICE-DETAILS.HTML ===');

// 1. UPDATE ASSETS/JS/SERVICES.JS
let jsContent = fs.readFileSync('assets/js/services.js', 'utf8');

const updatedServicesCode = `const LAPNEST_SERVICES = {
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
};`;

// Replace LAPNEST_SERVICES definition
jsContent = jsContent.replace(/const LAPNEST_SERVICES = \{[\s\S]*?\n\};\n\n\/\/ Map aliases/, updatedServicesCode + '\n\n// Map aliases');

// Replace renderServiceDetails implementation to ensure min-h-[3.25rem] equal row lines
const oldRenderParts = `  // Symptoms List
  const symptomsEl = document.getElementById('service-symptoms-list');
  if (symptomsEl) {
    symptomsEl.innerHTML = service.symptoms.map(s => \`<li>• \${s}</li>\`).join('');
  }

  // Technical Procedures List
  const proceduresEl = document.getElementById('service-procedures-list');
  if (proceduresEl) {
    proceduresEl.innerHTML = service.procedures.map(p => \`<li>\${p}</li>\`).join('');
  }

  // Pricing & Turnaround
  const pricingEl = document.getElementById('service-pricing-list');
  if (pricingEl) {
    pricingEl.innerHTML = service.pricing.map((item, idx) => \`
      <p class="flex justify-between \${idx < service.pricing.length - 1 ? 'border-b border-[#233D4C]/50 pb-1.5' : ''}">
        <span>\${item.label}</span>
        <strong class="text-white">\${item.price}</strong>
      </p>
    \`).join('');
  }`;

const newRenderParts = `  // Symptoms List (Calibrated equal row height min-h-[3.25rem])
  const symptomsEl = document.getElementById('service-symptoms-list');
  if (symptomsEl) {
    symptomsEl.innerHTML = service.symptoms.map(s => \`
      <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
        <span>\${s}</span>
      </li>
    \`).join('');
  }

  // Technical Procedures List (Calibrated equal row height min-h-[3.25rem])
  const proceduresEl = document.getElementById('service-procedures-list');
  if (proceduresEl) {
    proceduresEl.innerHTML = service.procedures.map((p, idx) => \`
      <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">0\${idx + 1}</span>
        <span>\${p}</span>
      </li>
    \`).join('');
  }

  // Pricing & Turnaround (Calibrated equal row height min-h-[3.25rem])
  const pricingEl = document.getElementById('service-pricing-list');
  if (pricingEl) {
    pricingEl.innerHTML = service.pricing.map(item => \`
      <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 last:border-b-0 leading-snug">
        <span class="text-[#9fb3be]">\${item.label}</span>
        <strong class="text-white text-right shrink-0">\${item.price}</strong>
      </div>
    \`).join('');
  }`;

if (jsContent.includes(oldRenderParts)) {
  jsContent = jsContent.replace(oldRenderParts, newRenderParts);
  console.log('Successfully updated renderServiceDetails to equal row heights in services.js!');
} else {
  console.log('Warning: oldRenderParts not found in services.js');
}

fs.writeFileSync('assets/js/services.js', jsContent, 'utf8');


// 2. UPDATE SERVICE-DETAILS.HTML STATIC FALLBACK GRID TO MATCH
let htmlContent = fs.readFileSync('service-details.html', 'utf8');

const oldServiceGrid = `      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        
        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
            <span>Common Failure Symptoms</span>
          </h3>
          <ul id="service-symptoms-list" class="space-y-2 text-xs text-[#9fb3be]">
            <li>• Spiderweb impact cracks from dropped laptops</li>
            <li>• Vertical color lines or flickering backlight strips</li>
            <li>• "Black Screen" with faint image visible under torchlight</li>
            <li>• Bleeding ink stains spreading across the matrix</li>
            <li>• Hinge tear causing EDP cable severed connection</li>
          </ul>
        </div>

        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
            <span>Our Technical Procedure</span>
          </h3>
          <ul id="service-procedures-list" class="space-y-2 text-xs text-[#9fb3be]">
            <li>1. Battery isolation to prevent motherboard backlight fuse blowout</li>
            <li>2. Ultrasonic bezel separation with heat pad</li>
            <li>3. Exact panel model number & 30-pin/40-pin EDP verification</li>
            <li>4. OEM adhesive pull-tape alignment</li>
            <li>5. Color uniformity & RGB calibration check</li>
          </ul>
        </div>

        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
            <span>Pricing & Turnaround</span>
          </h3>
          <div id="service-pricing-list" class="space-y-2 text-xs text-[#9fb3be]">
            <p class="flex justify-between border-b border-[#233D4C]/50 pb-1">
              <span>Standard 15.6" HD / FHD Panel:</span>
              <strong class="text-white">₹2,499 – ₹3,499</strong>
            </p>
            <p class="flex justify-between border-b border-[#233D4C]/50 pb-1">
              <span>144Hz IPS High Refresh Gaming:</span>
              <strong class="text-white">₹4,200 – ₹5,800</strong>
            </p>
            <p class="flex justify-between border-b border-[#233D4C]/50 pb-1">
              <span>MacBook Air Retina Assembly:</span>
              <strong class="text-white">₹7,990 onwards</strong>
            </p>
            <p class="flex justify-between">
              <span>Touch Screen Digitizer Units:</span>
              <strong class="text-white">Custom Quote</strong>
            </p>
          </div>
        </div>

      </div>`;

const newServiceGrid = `      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
        
        <!-- Card 1: Common Failure Symptoms -->
        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between h-full shadow-lg">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2 pb-4 mb-2 border-b border-[#233D4C]">
              <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
              <span>Common Failure Symptoms</span>
            </h3>
            <ul id="service-symptoms-list" class="text-xs text-[#9fb3be]">
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
                <span>Spiderweb impact cracks from dropped laptops</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
                <span>Vertical color lines or flickering backlight strips</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
                <span>"Black Screen" with faint image under torchlight</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
                <span>Bleeding ink stains spreading across the matrix</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] shrink-0"></span>
                <span>Hinge tear causing EDP cable severed connection</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 2: Our Technical Procedure -->
        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between h-full shadow-lg">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2 pb-4 mb-2 border-b border-[#233D4C]">
              <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
              <span>Our Technical Procedure</span>
            </h3>
            <ul id="service-procedures-list" class="text-xs text-[#9fb3be]">
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">01</span>
                <span>Battery isolation to protect backlight rail fuse</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">02</span>
                <span>Ultrasonic bezel separation with thermal pad</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">03</span>
                <span>Exact panel model & 30/40-pin EDP verification</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">04</span>
                <span>Factory-grade pull-tab adhesive alignment</span>
              </li>
              <li class="min-h-[3.25rem] flex items-center gap-2.5 py-2 leading-snug">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-1.5 py-0.5 rounded border border-[#233D4C] shrink-0">05</span>
                <span>True-tone RGB color calibration & pixel check</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 3: Pricing & Turnaround -->
        <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between h-full shadow-lg">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2 pb-4 mb-2 border-b border-[#233D4C]">
              <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
              <span>Pricing & Turnaround</span>
            </h3>
            <div id="service-pricing-list" class="text-xs text-[#9fb3be]">
              <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span>Standard 15.6" HD / FHD Panel:</span>
                <strong class="text-white text-right shrink-0">₹2,499 – ₹3,499</strong>
              </div>
              <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span>144Hz IPS High Refresh Gaming:</span>
                <strong class="text-white text-right shrink-0">₹4,200 – ₹5,800</strong>
              </div>
              <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span>MacBook Air Retina Assembly:</span>
                <strong class="text-white text-right shrink-0">₹7,990 onwards</strong>
              </div>
              <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 border-b border-[#233D4C]/40 leading-snug">
                <span>Touch Screen Digitizer Units:</span>
                <strong class="text-white text-right shrink-0">Custom Quote</strong>
              </div>
              <div class="min-h-[3.25rem] flex items-center justify-between gap-3 py-2 leading-snug">
                <span>Zero Dead-Pixel Diagnostic:</span>
                <strong class="text-white text-right shrink-0">Included (FREE)</strong>
              </div>
            </div>
          </div>
        </div>

      </div>`;

if (htmlContent.includes(oldServiceGrid)) {
  htmlContent = htmlContent.replace(oldServiceGrid, newServiceGrid);
  console.log('Successfully updated service-details.html static grid to equal row heights!');
} else {
  console.log('Warning: oldServiceGrid not found in service-details.html');
}

fs.writeFileSync('service-details.html', htmlContent, 'utf8');
console.log('=== FINISHED UPDATING SERVICES AND DETAILS ===');
