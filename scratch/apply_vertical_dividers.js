const fs = require('fs');

// 1. products.html
let p = fs.readFileSync('products.html', 'utf8');
const pTarget = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#9fb3be]">
            <div>
              <p class="font-bold text-[#FD802E] mb-1">Intel Core Ultra (Series 1 & 2)</p>
              <p class="leading-relaxed">Best for financial modeling, Adobe Creative Cloud, and mixed corporate workloads requiring high single-core turbo clocks and integrated NPU AI assist.</p>
            </div>
            <div>
              <p class="font-bold text-[#FD802E] mb-1">AMD Ryzen AI 300 (Zen 5)</p>
              <p class="leading-relaxed">Best for long battery longevity on road trips, multi-threaded 3D compiling, and robust integrated Radeon 890M gaming performance without running hot.</p>
            </div>
            <div>
              <p class="font-bold text-[#FD802E] mb-1">Apple Silicon M3 / M4</p>
              <p class="leading-relaxed">Best for macOS developers, 4K/8K ProRes video timeline editing in Final Cut, and running local LLM quantizations in unified memory with silent fans.</p>
            </div>
          </div>`;

const pReplacement = `<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233D4C] text-xs text-[#9fb3be]">
            <div class="pb-6 md:pb-0 md:pr-6">
              <p class="font-bold text-[#FD802E] mb-2 text-sm">Intel Core Ultra (Series 1 & 2)</p>
              <p class="leading-relaxed">Best for financial modeling, Adobe Creative Cloud, and mixed corporate workloads requiring high single-core turbo clocks and integrated NPU AI assist.</p>
            </div>
            <div class="py-6 md:py-0 md:px-6">
              <p class="font-bold text-[#FD802E] mb-2 text-sm">AMD Ryzen AI 300 (Zen 5)</p>
              <p class="leading-relaxed">Best for long battery longevity on road trips, multi-threaded 3D compiling, and robust integrated Radeon 890M gaming performance without running hot.</p>
            </div>
            <div class="pt-6 md:pt-0 md:pl-6">
              <p class="font-bold text-[#FD802E] mb-2 text-sm">Apple Silicon M3 / M4</p>
              <p class="leading-relaxed">Best for macOS developers, 4K/8K ProRes video timeline editing in Final Cut, and running local LLM quantizations in unified memory with silent fans.</p>
            </div>
          </div>`;

if (p.includes(pTarget)) {
  p = p.replace(pTarget, pReplacement);
  fs.writeFileSync('products.html', p);
  console.log('Updated products.html with vertical dividers!');
} else {
  console.log('WARNING: Could not find target in products.html');
}

// 2. about.html
let a = fs.readFileSync('about.html', 'utf8');
const aTarget = `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 01</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">Component-Level Conservation</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">By repairing circuit boards at the micro-component level rather than discarding entire assemblies, we have prevented over 18 metric tons of electronic waste from entering landfills.</p>
            </div>
            <div>
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 02</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">DoD 5220.22-M Data Security</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.</p>
            </div>
            <div>
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 03</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">Zero-Compromise Genuine OEM</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">We strictly reject counterfeit batteries, cloned chargers, and rejected grade-C display panels. Every component in our store and rental fleet is certified Grade-A OEM.</p>
            </div>
          </div>`;

const aReplacement = `<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233D4C]">
            <div class="pb-6 md:pb-0 md:pr-6">
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 01</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">Component-Level Conservation</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">By repairing circuit boards at the micro-component level rather than discarding entire assemblies, we have prevented over 18 metric tons of electronic waste from entering landfills.</p>
            </div>
            <div class="py-6 md:py-0 md:px-6">
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 02</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">DoD 5220.22-M Data Security</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.</p>
            </div>
            <div class="pt-6 md:pt-0 md:pl-6">
              <span class="text-xs font-mono font-bold text-[#FD802E]">POLICY 03</span>
              <h4 class="text-base font-bold text-white mt-1 mb-2">Zero-Compromise Genuine OEM</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">We strictly reject counterfeit batteries, cloned chargers, and rejected grade-C display panels. Every component in our store and rental fleet is certified Grade-A OEM.</p>
            </div>
          </div>`;

if (a.includes(aTarget)) {
  a = a.replace(aTarget, aReplacement);
  fs.writeFileSync('about.html', a);
  console.log('Updated about.html with vertical dividers!');
} else {
  console.log('WARNING: Could not find target in about.html');
}

// 3. pricing.html (Corporate Tax Advantage block)
let pr = fs.readFileSync('pricing.html', 'utf8');
const prTarget = `<div class="p-8 rounded-3xl bg-[#172731] border border-[#233D4C] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 01</div>
            <h4 class="text-base font-bold text-white mb-2">100% OpEx Tax Deductible</h4>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Unlike purchased laptops that depreciate over 3 years, laptop rentals qualify as 100% deductible operating expenses under Section 37 of the Indian Income Tax Act, directly lowering net corporate taxable income.</p>
          </div>
          <div>
            <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 02</div>
            <h4 class="text-base font-bold text-white mb-2">Zero Capital Depreciation</h4>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Avoid writing off declining asset value on balance sheets. Protect your working capital for product engineering, sales hiring, and revenue-generating operations while maintaining state-of-the-art computers.</p>
          </div>
          <div>
            <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 03</div>
            <h4 class="text-base font-bold text-white mb-2">Predictable Monthly IT Cost</h4>
            <p class="text-xs text-[#9fb3be] leading-relaxed">All routine maintenance, battery replacements, OS patching, and hardware repairs are included in one predictable flat monthly fee per seat with verified GST input tax credits.</p>
          </div>
        </div>`;

const prReplacement = `<div class="p-8 rounded-3xl bg-[#172731] border border-[#233D4C]">
          <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233D4C]">
            <div class="pb-6 md:pb-0 md:pr-6">
              <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 01</div>
              <h4 class="text-base font-bold text-white mb-2">100% OpEx Tax Deductible</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Unlike purchased laptops that depreciate over 3 years, laptop rentals qualify as 100% deductible operating expenses under Section 37 of the Indian Income Tax Act, directly lowering net corporate taxable income.</p>
            </div>
            <div class="py-6 md:py-0 md:px-6">
              <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 02</div>
              <h4 class="text-base font-bold text-white mb-2">Zero Capital Depreciation</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">Avoid writing off declining asset value on balance sheets. Protect your working capital for product engineering, sales hiring, and revenue-generating operations while maintaining state-of-the-art computers.</p>
            </div>
            <div class="pt-6 md:pt-0 md:pl-6">
              <div class="text-[#FD802E] font-mono text-xs font-bold mb-1">FINANCIAL ADVANTAGE 03</div>
              <h4 class="text-base font-bold text-white mb-2">Predictable Monthly IT Cost</h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">All routine maintenance, battery replacements, OS patching, and hardware repairs are included in one predictable flat monthly fee per seat with verified GST input tax credits.</p>
            </div>
          </div>
        </div>`;

if (pr.includes(prTarget)) {
  pr = pr.replace(prTarget, prReplacement);
  fs.writeFileSync('pricing.html', pr);
  console.log('Updated pricing.html with vertical dividers!');
} else {
  console.log('WARNING: Could not find target in pricing.html');
}

// 4. contact.html
let c = fs.readFileSync('contact.html', 'utf8');
const cTarget = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#9fb3be]">
            <div>
              <p class="font-bold text-white uppercase tracking-wider mb-1">Customer Parking</p>
              <p>20+ dedicated underground parking bays with free Level-2 EV charging. Validation stamp available at showroom reception desk.</p>
            </div>
            <div>
              <p class="font-bold text-white uppercase tracking-wider mb-1">Public Transit</p>
              <p>Located directly opposite the Sholinganallur Junction bus stop on Rajiv Gandhi Salai (OMR). 2 minutes walk from OMR Phase-2 metro link.</p>
            </div>
            <div>
              <p class="font-bold text-white uppercase tracking-wider mb-1">Outstation Courier Ingestion</p>
              <p>For outstation hardware, we coordinate secure insured pickup via BlueDart Priority with tamper-evident foam packaging kits.</p>
            </div>
          </div>`;

const cReplacement = `<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233D4C] text-xs text-[#9fb3be]">
            <div class="pb-6 md:pb-0 md:pr-6">
              <p class="font-bold text-white uppercase tracking-wider mb-1">Customer Parking</p>
              <p class="leading-relaxed">20+ dedicated underground parking bays with free Level-2 EV charging. Validation stamp available at showroom reception desk.</p>
            </div>
            <div class="py-6 md:py-0 md:px-6">
              <p class="font-bold text-white uppercase tracking-wider mb-1">Public Transit</p>
              <p class="leading-relaxed">Located directly opposite the Sholinganallur Junction bus stop on Rajiv Gandhi Salai (OMR). 2 minutes walk from OMR Phase-2 metro link.</p>
            </div>
            <div class="pt-6 md:pt-0 md:pl-6">
              <p class="font-bold text-white uppercase tracking-wider mb-1">Outstation Courier Ingestion</p>
              <p class="leading-relaxed">For outstation hardware, we coordinate secure insured pickup via BlueDart Priority with tamper-evident foam packaging kits.</p>
            </div>
          </div>`;

if (c.includes(cTarget)) {
  c = c.replace(cTarget, cReplacement);
  fs.writeFileSync('contact.html', c);
  console.log('Updated contact.html with vertical dividers!');
} else {
  console.log('WARNING: Could not find target in contact.html');
}

// 5. repair-upgrade.html
let r = fs.readFileSync('repair-upgrade.html', 'utf8');
const rTarget = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#9fb3be]">
            <div>
              <p class="font-bold text-white mb-1">1. Keep Your SSD at Home</p>
              <p>For logic board repairs and hardware fixes, you are fully entitled to remove your NVMe SSD or hard drive before submission. We test with bench diagnostics drives.</p>
            </div>
            <div>
              <p class="font-bold text-white mb-1">2. Tamper-Evident Physical Seals</p>
              <p>If you leave your drive in place, numbered holographic tamper seals are affixed over drive caddies and webcams in your presence at the ingestion desk.</p>
            </div>
            <div>
              <p class="font-bold text-white mb-1">3. Zero Password Ingestion</p>
              <p>Our micro-electronics testing is performed strictly at the BIOS, UEFI, and hardware diagnostic level. We never ask for personal Windows PINs or disk encryption keys.</p>
            </div>
          </div>`;

const rReplacement = `<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233D4C] text-xs text-[#9fb3be]">
            <div class="pb-6 md:pb-0 md:pr-6">
              <p class="font-bold text-white mb-1">1. Keep Your SSD at Home</p>
              <p class="leading-relaxed">For logic board repairs and hardware fixes, you are fully entitled to remove your NVMe SSD or hard drive before submission. We test with bench diagnostics drives.</p>
            </div>
            <div class="py-6 md:py-0 md:px-6">
              <p class="font-bold text-white mb-1">2. Tamper-Evident Physical Seals</p>
              <p class="leading-relaxed">If you leave your drive in place, numbered holographic tamper seals are affixed over drive caddies and webcams in your presence at the ingestion desk.</p>
            </div>
            <div class="pt-6 md:pt-0 md:pl-6">
              <p class="font-bold text-white mb-1">3. Zero Password Ingestion</p>
              <p class="leading-relaxed">Our micro-electronics testing is performed strictly at the BIOS, UEFI, and hardware diagnostic level. We never ask for personal Windows PINs or disk encryption keys.</p>
            </div>
          </div>`;

if (r.includes(rTarget)) {
  r = r.replace(rTarget, rReplacement);
  fs.writeFileSync('repair-upgrade.html', r);
  console.log('Updated repair-upgrade.html with vertical dividers!');
} else {
  console.log('WARNING: Could not find target in repair-upgrade.html');
}
