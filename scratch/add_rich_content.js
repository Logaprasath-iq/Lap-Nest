const fs = require('fs');

console.log('Injecting rich content with exact target comments...');

// ============================================================================
// 1. HOME 1 (index.html)
// ============================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

const indexSlaSection = `
    <!-- SECTION 7.5: ENTERPRISE SLA & GUARANTEED SERVICE COMMITMENTS (NON-IMAGE DATA GRID) -->
    <section class="py-20 lg:py-24 bg-[#111e26] border-t border-b border-[#233D4C] relative overflow-hidden">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Unmatched Standards of Care</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">Enterprise-Grade Service Level Guarantees</h2>
          <p class="text-xs sm:text-sm text-[#9fb3be] mt-3">Whether you are purchasing a flagship laptop, leasing a 50-node corporate fleet, or repairing a logic board, our written SLAs protect your investment.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          <!-- SLA Card 1 -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">01</div>
              <h3 class="text-base font-black text-white mb-2">Showroom Sales & Retail</h3>
              <p class="text-xs text-[#9fb3be] mb-4">Multi-brand laptop inventory with zero grey-market imports.</p>
              <ul class="space-y-2 text-xs text-[#9fb3be]">
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>1-Year Pan-India Onsite Warranty</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>7-Day Zero-Questions Hardware Exchange</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Free Old Laptop Data Migration</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>100% Original Brand Power Bricks</span></li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#233D4C]/60 text-[11px] font-mono text-[#FD802E] font-semibold">SLA: Same-Day Store Handover</div>
          </div>

          <!-- SLA Card 2 -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">02</div>
              <h3 class="text-base font-black text-white mb-2">Corporate Fleet Leasing</h3>
              <p class="text-xs text-[#9fb3be] mb-4">Turnkey computing infrastructure for IT corridors & startups.</p>
              <ul class="space-y-2 text-xs text-[#9fb3be]">
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>2-Hour Hot-Swap Machine Delivery in OMR</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>₹0 Security Deposit for GST Registered Firms</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Hardware Refresh Every 18 Months</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Pre-Imaged with Custom Corporate MDM</span></li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#233D4C]/60 text-[11px] font-mono text-[#FD802E] font-semibold">SLA: 99.8% Fleet Uptime</div>
          </div>

          <!-- SLA Card 3 -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">03</div>
              <h3 class="text-base font-black text-white mb-2">Cleanroom Micro-Repair</h3>
              <p class="text-xs text-[#9fb3be] mb-4">ISO-standard motherboard micro-soldering & component repair.</p>
              <ul class="space-y-2 text-xs text-[#9fb3be]">
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>₹0 Diagnostic & Inspection Fee</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>90-Day Comprehensive Repair Warranty</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Strict Zero Data Access Privacy Protocol</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Component-Level Fix over Board Replacement</span></li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#233D4C]/60 text-[11px] font-mono text-[#FD802E] font-semibold">SLA: 4-Hour Express Bench</div>
          </div>

          <!-- SLA Card 4 -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">04</div>
              <h3 class="text-base font-black text-white mb-2">Instant Buyback & Exchange</h3>
              <p class="text-xs text-[#9fb3be] mb-4">Transparent algorithmic device valuation with immediate payout.</p>
              <ul class="space-y-2 text-xs text-[#9fb3be]">
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>15-Minute Instant UPI / Bank Settlement</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>DoD 5220.22-M Certified Data Destruction</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Up to 65% Value Retention on 1-Yr Devices</span></li>
                <li class="flex items-start gap-2"><span class="text-[#FD802E] font-bold">✓</span><span>Exchange Bonus on Store Laptop Purchases</span></li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#233D4C]/60 text-[11px] font-mono text-[#FD802E] font-semibold">SLA: Instant Paperless Payout</div>
          </div>

        </div>

        <!-- FAQ ACCORDION SUB-BLOCK (NON-IMAGE) -->
        <div class="mt-20 pt-16 border-t border-[#233D4C] max-w-3xl mx-auto">
          <div class="text-center mb-10">
            <h3 class="text-2xl font-black text-white">Frequently Asked Technical Questions</h3>
            <p class="text-xs text-[#9fb3be] mt-1">Transparent answers to critical questions about hardware, warranties, and corporate services.</p>
          </div>

          <div class="space-y-4">
            
            <div class="p-5 rounded-2xl bg-[#172731] border border-[#233D4C]">
              <h4 class="text-sm font-bold text-white flex items-center justify-between">
                <span>How does the LAPNEST corporate laptop rental program operate?</span>
                <span class="text-[#FD802E] font-mono">+</span>
              </h4>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">
                We provide short-term and multi-year leases for high-spec laptops (Dell Latitude, ThinkPad, MacBook Pro, ROG) to businesses with zero capital lock-in. Rental fees are 100% tax-deductible operational expenses. Every unit includes full hardware maintenance, free hot-swap replacement within 2 hours in Chennai, and automated OS deployment.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-[#172731] border border-[#233D4C]">
              <h4 class="text-sm font-bold text-white flex items-center justify-between">
                <span>What is component-level repair versus motherboard replacement?</span>
                <span class="text-[#FD802E] font-mono">+</span>
              </h4>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">
                Brand service centers often quote ₹35,000 to replace an entire logic board when only a single ₹150 power management IC (PWM) or ceramic capacitor has failed. At LAPNEST, our ISO cleanroom engineers isolate the exact faulty micro-component under thermal cameras and replace only that component, saving you 60% to 75% while preserving your original motherboard and data.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-[#172731] border border-[#233D4C]">
              <h4 class="text-sm font-bold text-white flex items-center justify-between">
                <span>Do you supply 100% genuine OEM replacement parts?</span>
                <span class="text-[#FD802E] font-mono">+</span>
              </h4>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">
                Yes. We source verified OEM screens, battery packs, cooling fans, and logic boards directly from Tier-1 component manufacturers (LG Display, BOE, Samsung, Dynabook, Simplo). Every replacement part carries our official 1-year replacement warranty.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-[#172731] border border-[#233D4C]">
              <h4 class="text-sm font-bold text-white flex items-center justify-between">
                <span>How is my private data safeguarded while my laptop is in the lab?</span>
                <span class="text-[#FD802E] font-mono">+</span>
              </h4>
              <p class="text-xs text-[#9fb3be] mt-2 leading-relaxed">
                We enforce a strict Zero-Data-Access policy. For hardware repairs that do not involve OS configuration, you are encouraged to remove your SSD before hand-off or let our technician place tamper-evident seals over your drive bay and camera. Our technicians test motherboard power rails using external test SSDs.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
`;

if (!indexHtml.includes('ENTERPRISE SLA & GUARANTEED SERVICE COMMITMENTS')) {
  const target = '<!-- SECTION 7: TESTIMONIALS (INTERACTIVE REVIEWS WITH AVATARS & STAR RATINGS) -->';
  if (indexHtml.includes(target)) {
    indexHtml = indexHtml.replace(target, indexSlaSection + '\n    ' + target);
    fs.writeFileSync('index.html', indexHtml, 'utf8');
    console.log('[SUCCESS] index.html updated!');
  } else {
    console.log('[WARN] Target not found in index.html');
  }
}

// ============================================================================
// 2. PRICING (pricing.html)
// ============================================================================
let pricingHtml = fs.readFileSync('pricing.html', 'utf8');

const pricingRateCardSection = `
    <!-- SECTION: ITEMIZED HARDWARE REPAIR RATE CARD & TAX DEDUCTIBILITY (NON-IMAGE) -->
    <section class="py-16 lg:py-20 bg-[#0e181f] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Standardized Tariff Sheet</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">Fixed Hardware Service & Upgrade Rate Card</h2>
          <p class="text-xs sm:text-sm text-[#9fb3be] mt-2">Transparent bench labor and OEM component tariffs with no hidden charges. All repairs include a 90-day comprehensive warranty.</p>
        </div>

        <!-- Comprehensive Rate Card Table -->
        <div class="rounded-2xl border border-[#233D4C] overflow-hidden bg-[#172731] shadow-card-dark mb-12">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#9fb3be]">
              <thead class="bg-[#0e181f] text-[#FD802E] uppercase font-mono text-[11px] border-b border-[#233D4C]">
                <tr>
                  <th class="py-3.5 px-6 font-bold">Service Category</th>
                  <th class="py-3.5 px-6 font-bold">Included Work & Inclusions</th>
                  <th class="py-3.5 px-6 font-bold">Turnaround</th>
                  <th class="py-3.5 px-6 font-bold text-right">Standard Tariff (INR)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#233D4C]/60">
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">Full Hardware Diagnostics</td>
                  <td class="py-4 px-6">Power rail impedance check, thermal camera profiling, battery health check, RAM MemTest86.</td>
                  <td class="py-4 px-6 font-mono text-emerald-400">15 – 30 Mins</td>
                  <td class="py-4 px-6 text-right font-black text-[#FD802E]">₹0 (Always Free)</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">High-Speed NVMe SSD 512GB Upgrade</td>
                  <td class="py-4 px-6">PCIe Gen4 NVMe drive (up to 5,000MB/s) + 100% full bit-for-bit drive cloning & OS preservation.</td>
                  <td class="py-4 px-6 font-mono">1 – 2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹2,899</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">High-Speed NVMe SSD 1TB Upgrade</td>
                  <td class="py-4 px-6">PCIe Gen4 NVMe 1TB drive (up to 7,000MB/s read) + thermal pad installation + cloning.</td>
                  <td class="py-4 px-6 font-mono">1 – 2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹4,999</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">DDR4 / DDR5 16GB RAM Expansion</td>
                  <td class="py-4 px-6">Crucial / Kingston 3200MHz DDR4 or 5600MHz DDR5 + MemTest 4-pass verification.</td>
                  <td class="py-4 px-6 font-mono">30 Mins</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹2,999</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">FHD IPS OEM Screen Replacement</td>
                  <td class="py-4 px-6">Grade-A anti-glare display panel, zero dead pixels guaranteed, 1-year panel warranty.</td>
                  <td class="py-4 px-6 font-mono">2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹3,899</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">Genuine OEM Battery Replacement</td>
                  <td class="py-4 px-6">Brand-new OEM battery pack with fresh cell cycle count, calibrated gas gauge.</td>
                  <td class="py-4 px-6 font-mono">1 Hour</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹2,499</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">Motherboard Power IC / PWM Repair</td>
                  <td class="py-4 px-6">Cleanroom component replacement, shorted capacitor clearing, 90-day board warranty.</td>
                  <td class="py-4 px-6 font-mono">Same Day</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹2,499</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white">Thermal Overhaul & Fan Deep Clean</td>
                  <td class="py-4 px-6">Honeywell PTM7950 phase change pad application, ultrasonic fan blade wash, copper heatsink flushes.</td>
                  <td class="py-4 px-6 font-mono">45 Mins</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹899</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Corporate Tax Advantage Block (Non-Image) -->
        <div class="p-8 rounded-3xl bg-[#172731] border border-[#233D4C] grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

      </div>
    </section>
`;

if (!pricingHtml.includes('Fixed Hardware Service & Upgrade Rate Card')) {
  const target = '<!-- SECTION 6: SERVICE COMPARISON TABLE -->';
  if (pricingHtml.includes(target)) {
    pricingHtml = pricingHtml.replace(target, pricingRateCardSection + '\n    ' + target);
    fs.writeFileSync('pricing.html', pricingHtml, 'utf8');
    console.log('[SUCCESS] pricing.html updated!');
  } else {
    console.log('[WARN] Target not found in pricing.html');
  }
}

// ============================================================================
// 3. REPAIR & UPGRADE (repair-upgrade.html)
// ============================================================================
let repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');

const repairDiagnosticsGuideSection = `
    <!-- SECTION: MOTHERBOARD SYMPTOM DIAGNOSTICS & DATA PRIVACY (NON-IMAGE) -->
    <section class="py-16 lg:py-20 bg-[#0e181f] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Cleanroom Bench Protocol</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">Common Hardware Symptoms & Engineering Solutions</h2>
          <p class="text-xs sm:text-sm text-[#9fb3be] mt-2">Before authorizing an expensive motherboard replacement, consult our component-level repair reference matrix.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 01</div>
            <h3 class="text-sm font-bold text-white mb-2">Completely Dead (0.00A Current)</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> Shorted 19V/20V main power rail high-side MOSFET or decoupling ceramic capacitor.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> FLIR infrared thermal detection, micro-soldering replacement of shorted element. Turnaround: 2–4 hours.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 02</div>
            <h3 class="text-sm font-bold text-white mb-2">Power LED Active, No Screen Display</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> Corrupted SPI BIOS ROM chip, faulty Embedded Controller (EC/KBC), or missing VCCIO power rail.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> High-speed hardware SPI desolder & clean ME region reflashing. Turnaround: Same Day.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 03</div>
            <h3 class="text-sm font-bold text-white mb-2">Battery at 0% / "Plugged in, Not Charging"</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> Blown current sensing resistor, blown charging IC (ISL/BQ series), or broken SMBus communication clock.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> Logic board charging IC micro-soldering and battery gas gauge calibration. Turnaround: 3–5 hours.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 04</div>
            <h3 class="text-sm font-bold text-white mb-2">Freezes & Visual Artifacts in 3D Gaming</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> Micro-fractured solder joints under high-heat GPU VRAM chips from repeated thermal expansion.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> Automated optical BGA reballing with leaded solder spheres + PTM7950 phase-change repasting. Turnaround: 24 hours.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 05</div>
            <h3 class="text-sm font-bold text-white mb-2">Liquid Spill (Water, Coffee, Juice)</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> High-voltage backlight rail (30V–50V) shorting into low-voltage CPU data lines through liquid conductivity.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> 40kHz ultrasonic chemical wash, corroded micro-trace reconstruction with insulated enamel copper jumper wire.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <div class="text-[11px] font-mono font-bold text-[#FD802E] uppercase mb-1">Symptom 06</div>
            <h3 class="text-sm font-bold text-white mb-2">Constant Thermal Throttling / Fan Roar</h3>
            <p class="text-xs text-[#9fb3be] mb-2"><strong class="text-white">Root Cause:</strong> Pumped-out dried silicone thermal paste, copper vapor chamber pressure loss, or blocked radiator fins.</p>
            <p class="text-xs text-[#9fb3be]"><strong class="text-white">Bench Fix:</strong> Vapor chamber thermal conductivity bench test, deep ultrasonic radiator clean, Honeywell PTM7950 application.</p>
          </div>

        </div>

        <!-- Data Privacy Guarantee (Non-Image) -->
        <div class="p-8 rounded-3xl bg-[#172731] border border-[#233D4C]">
          <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Strict Client Confidentiality & Zero Data Access Protocol</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#9fb3be]">
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
          </div>
        </div>

      </div>
    </section>
`;

if (!repairHtml.includes('Common Hardware Symptoms & Engineering Solutions')) {
  const target = '<!-- SECTION 3 & 4: HARDWARE REPAIRS & SOFTWARE TROUBLESHOOTING -->';
  if (repairHtml.includes(target)) {
    repairHtml = repairHtml.replace(target, repairDiagnosticsGuideSection + '\n    ' + target);
    fs.writeFileSync('repair-upgrade.html', repairHtml, 'utf8');
    console.log('[SUCCESS] repair-upgrade.html updated!');
  } else {
    console.log('[WARN] Target not found in repair-upgrade.html');
  }
}

// ============================================================================
// 4. BLOG (blog.html)
// ============================================================================
let blogPage = fs.readFileSync('blog.html', 'utf8');

const blogKnowledgeSection = `
    <!-- SECTION: HARDWARE MAINTENANCE KNOWLEDGEBASE & GLOSSARY (NON-IMAGE) -->
    <section class="py-16 lg:py-20 bg-[#0e181f] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Practical Field Knowledge</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">Laptop Engineering Knowledgebase & Maintenance Tips</h2>
          <p class="text-xs sm:text-sm text-[#9fb3be] mt-2">Essential engineering insights directly from our cleanroom technicians to maximize laptop lifespan.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 01 • BATTERY CARE</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">Limit Charge Threshold to 80%</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Holding lithium polymer pouches at 100% capacity in 45°C ambient Indian heat accelerates cathode degradation. Capping charging at 80% via Dell Command or Lenovo Vantage triples pouch cycle life from 400 to over 1,200 cycles.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 02 • LIQUID DAMAGE</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">The Rice Myth vs 19V Corrosion</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Rice does not remove microscopic conductive mineral salts. When a liquid-contacted laptop is plugged into power, galvanic electrolysis dissolves copper traces within minutes. Disconnect the battery immediately and seek ultrasonic bath cleaning.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 03 • THERMAL DISSIPATION</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">Honeywell PTM7950 Phase-Change</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Standard silicone pastes suffer from "pump-out effect" within 6 months on direct-die laptop silicon. Phase-change materials (PTM7950) turn liquid at 45°C and solidify at room temperature, maintaining sub-75°C gaming loads for over 3 years without maintenance.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 04 • STORAGE LIFESPAN</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">Preserve 15% Free NVMe Capacity</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Modern TLC and QLC SSDs use dynamic SLC caching algorithms. When filled beyond 85%, write speeds plummet from 3,500MB/s to 120MB/s and wear-leveling endurance degrades prematurely. Always maintain 15% unallocated headroom.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 05 • MEMORY BANDWIDTH</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">Dual-Channel vs Single-Stick RAM</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Integrated graphics (Intel Iris Xe, Radeon 780M) share system memory as VRAM. Running two 8GB sticks in dual-channel mode doubles memory bus width to 128-bit, delivering up to 65% higher frame rates compared to a single 16GB stick.</p>
          </div>

          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C]">
            <span class="text-xs font-mono font-bold text-[#FD802E]">TIP 06 • FAN CLEANING CAUTION</span>
            <h3 class="text-sm font-bold text-white mt-1 mb-2">Never Free-Spin Fans with Air Dusters</h3>
            <p class="text-xs text-[#9fb3be] leading-relaxed">Using canned compressed air to spin fan blades freely turns the brushless motor into a DC generator, back-feeding induction voltage through the motherboard connector and destroying the Embedded Controller (EC) chip. Always hold the blade still when dusting.</p>
          </div>

        </div>

        <!-- Engineering Glossary (Non-Image) -->
        <div class="p-8 rounded-3xl bg-[#172731] border border-[#233D4C]">
          <h3 class="text-base font-bold text-white mb-3">Micro-Soldering & Laptop Engineering Glossary</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#9fb3be]">
            <div>
              <p class="font-bold text-white">BGA (Ball Grid Array)</p>
              <p class="text-[11px] mt-0.5">Surface-mount packaging using solder balls under chips.</p>
            </div>
            <div>
              <p class="font-bold text-white">VRM (Voltage Regulator)</p>
              <p class="text-[11px] mt-0.5">Converts 19V input down to 0.8V–1.2V CPU core power.</p>
            </div>
            <div>
              <p class="font-bold text-white">Buck Converter</p>
              <p class="text-[11px] mt-0.5">High-efficiency DC-DC step-down power controller.</p>
            </div>
            <div>
              <p class="font-bold text-white">EC / KBC Chip</p>
              <p class="text-[11px] mt-0.5">Embedded microcontroller handling power buttons & thermals.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
`;

if (!blogPage.includes('Laptop Engineering Knowledgebase & Maintenance Tips')) {
  const target = '<!-- SECTION 7: NEWSLETTER -->';
  if (blogPage.includes(target)) {
    blogPage = blogPage.replace(target, blogKnowledgeSection + '\n    ' + target);
    fs.writeFileSync('blog.html', blogPage, 'utf8');
    console.log('[SUCCESS] blog.html updated!');
  } else {
    console.log('[WARN] Target not found in blog.html');
  }
}

console.log('Done running exact target replacements.');
