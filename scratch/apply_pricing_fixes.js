const fs = require('fs');

console.log('=== APPLYING ALL 4 FIXES TO PRICING.HTML ===\n');

let html = fs.readFileSync('pricing.html', 'utf8');

// 1. Fix "Explore Rental Tariffs" button link
const oldBtn = `<a href="#rental-plans" class="text-xs font-semibold text-white hover:text-[#FD802E] flex items-center gap-1 transition-colors">
                <span>Explore Rental Tariffs</span>`;

const newBtn = `<a href="#rental" class="text-xs font-semibold text-white hover:text-[#FD802E] flex items-center gap-1 transition-colors">
                <span>Explore Rental Tariffs</span>`;

if (html.includes(oldBtn)) {
  html = html.replace(oldBtn, newBtn);
  console.log('1. Fixed Explore Rental Tariffs button link to href="#rental"!');
} else {
  console.log('1. Warning: oldBtn not matched');
}

// Also add id="rental-plans" target to the rental section
const oldRentalSection = '<section id="rental" class="py-20 bg-[#111e26] border-t border-[#233D4C]">';
const newRentalSection = `<section id="rental" class="py-20 bg-[#111e26] border-t border-[#233D4C] relative">
      <div id="rental-plans" class="absolute -top-24"></div>`;

if (html.includes(oldRentalSection)) {
  html = html.replace(oldRentalSection, newRentalSection);
  console.log('1b. Added #rental-plans anchor to rental section!');
}

// 2. Fix "Most Popular" in center of the card
const oldPopularCard = `<div class="equal-card rounded-2xl bg-[#172731] border border-[#FD802E] p-6 shadow-md shadow-[#FD802E]/25 relative overflow-hidden">
            <span class="absolute top-0 right-0 bg-[#FD802E] text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl">Popular</span>
            <span class="text-xs font-bold text-[#FD802E] uppercase tracking-wider">Business Pro Tier</span>`;

const newPopularCard = `<div class="equal-card rounded-2xl bg-[#172731] border-2 border-[#FD802E] p-6 shadow-xl shadow-[#FD802E]/15 relative">
            <!-- Horizontally Centered Most Popular Tag -->
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FD802E] text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-0.5 rounded-full shadow-md shadow-[#FD802E]/30 whitespace-nowrap z-10">
              Most Popular
            </div>
            <span class="text-xs font-bold text-[#FD802E] uppercase tracking-wider">Business Pro Tier</span>`;

if (html.includes(oldPopularCard)) {
  html = html.replace(oldPopularCard, newPopularCard);
  console.log('2. Fixed Most Popular badge to be horizontally centered on top of card!');
} else {
  console.log('2. Warning: oldPopularCard not matched');
}

// 3. Fix Table 1: Rate Card vertical column separation
const oldTable1 = `<table class="w-full text-left text-xs text-[#9fb3be]">
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
            </table>`;

const newTable1 = `<table class="w-full text-left text-xs text-[#9fb3be] border-collapse">
              <thead class="bg-[#0e181f] text-[#FD802E] uppercase font-mono text-[11px] border-b border-[#233D4C]">
                <tr>
                  <th class="py-3.5 px-6 font-bold border-r border-[#233D4C]">Service Category</th>
                  <th class="py-3.5 px-6 font-bold border-r border-[#233D4C]">Included Work & Inclusions</th>
                  <th class="py-3.5 px-6 font-bold border-r border-[#233D4C]">Turnaround</th>
                  <th class="py-3.5 px-6 font-bold text-right">Standard Tariff (INR)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#233D4C]/60">
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">Full Hardware Diagnostics</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Power rail impedance check, thermal camera profiling, battery health check, RAM MemTest86.</td>
                  <td class="py-4 px-6 font-mono text-emerald-400 border-r border-[#233D4C]/60">15 – 30 Mins</td>
                  <td class="py-4 px-6 text-right font-black text-[#FD802E]">₹0 (Always Free)</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">High-Speed NVMe SSD 512GB Upgrade</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">PCIe Gen4 NVMe drive (up to 5,000MB/s) + 100% full bit-for-bit drive cloning & OS preservation.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">1 – 2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹2,899</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">High-Speed NVMe SSD 1TB Upgrade</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">PCIe Gen4 NVMe 1TB drive (up to 7,000MB/s read) + thermal pad installation + cloning.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">1 – 2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹4,999</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">DDR4 / DDR5 16GB RAM Expansion</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Crucial / Kingston 3200MHz DDR4 or 5600MHz DDR5 + MemTest 4-pass verification.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">30 Mins</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹2,999</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">FHD IPS OEM Screen Replacement</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Grade-A anti-glare display panel, zero dead pixels guaranteed, 1-year panel warranty.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">2 Hours</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹3,899</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">Genuine OEM Battery Replacement</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Brand-new OEM battery pack with fresh cell cycle count, calibrated gas gauge.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">1 Hour</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹2,499</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">Motherboard Power IC / PWM Repair</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Cleanroom component replacement, shorted capacitor clearing, 90-day board warranty.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">Same Day</td>
                  <td class="py-4 px-6 text-right font-bold text-white">From ₹2,499</td>
                </tr>
                <tr class="hover:bg-[#0e181f]/40 transition-colors">
                  <td class="py-4 px-6 font-bold text-white border-r border-[#233D4C]/60">Thermal Overhaul & Fan Deep Clean</td>
                  <td class="py-4 px-6 border-r border-[#233D4C]/60">Honeywell PTM7950 phase change pad application, ultrasonic fan blade wash, copper heatsink flushes.</td>
                  <td class="py-4 px-6 font-mono border-r border-[#233D4C]/60">45 Mins</td>
                  <td class="py-4 px-6 text-right font-bold text-white">₹899</td>
                </tr>
              </tbody>
            </table>`;

if (html.includes(oldTable1)) {
  html = html.replace(oldTable1, newTable1);
  console.log('3. Added vertical column separation to Rate Card Table!');
} else {
  console.log('3. Warning: oldTable1 not matched');
}

// 4. Fix Table 2: Comparison Matrix vertical column separation
const oldTable2 = `<table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-[#0e181f] border-b border-[#233D4C] text-[#9fb3be]">
              <tr>
                <th class="py-4 px-6 font-bold text-white">Service Metric</th>
                <th class="py-4 px-6 font-bold text-[#FD802E]">LAPNEST Chennai</th>
                <th class="py-4 px-6 font-semibold">Authorized Brand Centers</th>
                <th class="py-4 px-6 font-semibold">Local Unorganized Shops</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#233D4C] text-[#9fb3be]">
              <tr>
                <td class="py-4 px-6 font-medium text-white">Diagnostic Fee</td>
                <td class="py-4 px-6 text-emerald-400 font-bold">₹0 (Free on diagnosis)</td>
                <td class="py-4 px-6">₹999 – ₹1,500 non-refundable</td>
                <td class="py-4 px-6">Unpredictable</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Component vs Full Board Swap</td>
                <td class="py-4 px-6 text-[#FD802E] font-bold">Micro-solders individual chips</td>
                <td class="py-4 px-6">Full board swap only (₹25k+)</td>
                <td class="py-4 px-6">Hit or miss soldering</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Warranty Coverage</td>
                <td class="py-4 px-6 text-emerald-400 font-bold">Up to 1 Year Comprehensive</td>
                <td class="py-4 px-6">90 Days only</td>
                <td class="py-4 px-6">7 to 30 Days</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Turnaround Speed</td>
                <td class="py-4 px-6 text-white font-bold">Same day / 24 Hours</td>
                <td class="py-4 px-6">7 to 21 Business Days</td>
                <td class="py-4 px-6">2 to 5 Days</td>
              </tr>
            </tbody>
          </table>`;

const newTable2 = `<table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead class="bg-[#0e181f] border-b border-[#233D4C] text-[#9fb3be]">
              <tr>
                <th class="py-4 px-6 font-bold text-white border-r border-[#233D4C]">Service Metric</th>
                <th class="py-4 px-6 font-bold text-[#FD802E] border-r border-[#233D4C]">LAPNEST Chennai</th>
                <th class="py-4 px-6 font-semibold border-r border-[#233D4C]">Authorized Brand Centers</th>
                <th class="py-4 px-6 font-semibold">Local Unorganized Shops</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#233D4C] text-[#9fb3be]">
              <tr>
                <td class="py-4 px-6 font-medium text-white border-r border-[#233D4C]">Diagnostic Fee</td>
                <td class="py-4 px-6 text-emerald-400 font-bold border-r border-[#233D4C]">₹0 (Free on diagnosis)</td>
                <td class="py-4 px-6 border-r border-[#233D4C]">₹999 – ₹1,500 non-refundable</td>
                <td class="py-4 px-6">Unpredictable</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white border-r border-[#233D4C]">Component vs Full Board Swap</td>
                <td class="py-4 px-6 text-[#FD802E] font-bold border-r border-[#233D4C]">Micro-solders individual chips</td>
                <td class="py-4 px-6 border-r border-[#233D4C]">Full board swap only (₹25k+)</td>
                <td class="py-4 px-6">Hit or miss soldering</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white border-r border-[#233D4C]">Warranty Coverage</td>
                <td class="py-4 px-6 text-emerald-400 font-bold border-r border-[#233D4C]">Up to 1 Year Comprehensive</td>
                <td class="py-4 px-6 border-r border-[#233D4C]">90 Days only</td>
                <td class="py-4 px-6">7 to 30 Days</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white border-r border-[#233D4C]">Turnaround Speed</td>
                <td class="py-4 px-6 text-white font-bold border-r border-[#233D4C]">Same day / 24 Hours</td>
                <td class="py-4 px-6 border-r border-[#233D4C]">7 to 21 Business Days</td>
                <td class="py-4 px-6">2 to 5 Days</td>
              </tr>
            </tbody>
          </table>`;

if (html.includes(oldTable2)) {
  html = html.replace(oldTable2, newTable2);
  console.log('4. Added vertical column separation to Comparison Matrix Table!');
} else {
  console.log('4. Warning: oldTable2 not matched');
}

fs.writeFileSync('pricing.html', html, 'utf8');
console.log('\n=== COMPLETED PRICING.HTML UPDATES ===');
