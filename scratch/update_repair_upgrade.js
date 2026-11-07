const fs = require('fs');

console.log('=== UPDATING REPAIR-UPGRADE.HTML ===');

let html = fs.readFileSync('repair-upgrade.html', 'utf8');

// 1. Fix "View Repair Tariffs" target by adding id="services-list"
const oldServicesSection = '<!-- SECTION 2: COMPLETE REPAIR SERVICES (Equal Height Cards with Learn More Links) -->\n    <section class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">';
const newServicesSection = '<!-- SECTION 2: COMPLETE REPAIR SERVICES (Equal Height Cards with Learn More Links) -->\n    <section id="services-list" class="py-16 lg:py-20 bg-[#111e26] border-t border-[#233D4C]">';

if (html.includes(oldServicesSection)) {
  html = html.replace(oldServicesSection, newServicesSection);
  console.log('1. Added id="services-list" to services section!');
} else {
  console.log('1. Warning: oldServicesSection not found');
}

// 2. Add icons to all 6 symptom cards
const oldSymptomsGrid = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
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

        </div>`;

const newSymptomsGrid = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          
          <!-- Symptom 01 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 01</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Completely Dead (0.00A Current)</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> Shorted 19V/20V main power rail high-side MOSFET or decoupling ceramic capacitor.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> FLIR infrared thermal detection, micro-soldering replacement. Turnaround: 2–4 hours.</p>
          </div>

          <!-- Symptom 02 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 02</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Power LED Active, No Screen Display</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> Corrupted SPI BIOS ROM chip, faulty Embedded Controller (EC/KBC), or missing VCCIO rail.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> Hardware SPI desolder & clean ME region reflashing. Turnaround: Same Day.</p>
          </div>

          <!-- Symptom 03 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 03</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Battery at 0% / "Plugged in, Not Charging"</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> Blown current sensing resistor, charging IC (ISL/BQ series), or broken SMBus line.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> Charging IC micro-soldering & gas gauge recalibration. Turnaround: 3–5 hours.</p>
          </div>

          <!-- Symptom 04 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 04</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Freezes & Visual Artifacts in 3D Gaming</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> Micro-fractured solder joints under high-heat GPU VRAM from thermal expansion cycling.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> Optical BGA reballing + PTM7950 phase-change repasting. Turnaround: 24 hours.</p>
          </div>

          <!-- Symptom 05 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 05</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Liquid Spill (Water, Coffee, Tea)</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> High-voltage 19V/50V rails shorting into low-voltage CPU lines via conductive mineral salts.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> 40kHz ultrasonic bath wash, corroded micro-trace reconstruction. Turnaround: 24–48 hours.</p>
          </div>

          <!-- Symptom 06 -->
          <div class="tilt-card equal-card p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex flex-col justify-between hover:border-[#FD802E]/40 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 text-[#FD802E] flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">SYMPTOM 06</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-2">Constant Thermal Throttling / Fan Roar</h3>
              <p class="text-xs text-[#9fb3be] leading-relaxed mb-3"><strong class="text-white">Root Cause:</strong> Baked dry silicone thermal paste, copper vapor chamber pressure loss, or fin felt clog.</p>
            </div>
            <p class="text-xs text-[#9fb3be] pt-3 border-t border-[#233D4C]/60"><strong class="text-white">Bench Fix:</strong> Deep ultrasonic radiator clean, fin descaling, Honeywell PTM7950 repasting.</p>
          </div>

        </div>`;

if (html.includes(oldSymptomsGrid)) {
  html = html.replace(oldSymptomsGrid, newSymptomsGrid);
  console.log('2. Added icons and equal height cards to all 6 symptoms!');
} else {
  console.log('2. Warning: oldSymptomsGrid not found');
}

// 3. Form and FAQ equal height & alignment
const oldSection7 = `    <!-- SECTION 7: BOOKING CTA AND FAQS -->
    <section id="book" class="py-20 bg-[#0e181f] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Booking Form -->
        <div class="lg:col-span-7 bg-[#172731] border border-[#233D4C] p-8 rounded-3xl shadow-md shadow-[#FD802E]/25">
          <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Instant Appointment</span>
          <h2 class="text-2xl sm:text-3xl font-black text-white mt-1 mb-6">Schedule Your Laptop Repair</h2>

          <form class="repair-booking-form space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Your Name *</label>
                <input type="text" name="name" required minlength="3" maxlength="50" pattern="[A-Za-z\\s.'-]{3,}" title="Full Name must contain letters only and be at least 3 characters long" placeholder="Full Name" autocomplete="name" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Mobile Phone *</label>
                <input type="tel" name="phone" required minlength="10" maxlength="10" inputmode="numeric" pattern="[6-9][0-9]{9}" title="Mobile Phone must be a valid 10-digit number (digits only)" placeholder="10-digit number" autocomplete="tel" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Laptop Brand & Model *</label>
                <input type="text" name="model" required minlength="3" placeholder="e.g. Dell Inspiron 15 / MacBook Air" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Issue Category *</label>
                <select required class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none">
                  <option value="">Select Primary Issue</option>
                  <option value="screen">Broken / Flickering Screen</option>
                  <option value="power">No Power / Won't Turn On</option>
                  <option value="battery">Battery Draining Fast / Not Charging</option>
                  <option value="liquid">Liquid / Water Spill Damage</option>
                  <option value="upgrade">RAM or NVMe SSD Upgrade</option>
                  <option value="overheating">Overheating / Loud Fan Noise</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Describe Symptom in Detail</label>
              <textarea rows="3" placeholder="Tell our technicians what happened, any error messages, etc." class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-xs shadow-md shadow-[#FD802E]/25 transition-all">
              Confirm Appointment Booking
            </button>
            <p class="text-[11px] text-gray-500 text-center">Demo Booking. You will receive an instant simulated ticket ID.</p>
          </form>
        </div>

        <!-- FAQs Accordion -->
        <div class="lg:col-span-5 space-y-4">
          <h3 class="text-lg font-bold text-white mb-4">Repair FAQs</h3>

          <div class="faq-group space-y-3">
            <div class="faq-item rounded-xl bg-[#172731] border border-[#233D4C] p-4">
              <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                <span>Will my data be safe during motherboard repair?</span>
                <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. Unless the primary storage NAND itself is damaged by severe liquid corrosion, we remove the drive first and preserve all data with strict confidentiality.
              </div>
            </div>

            <div class="faq-item rounded-xl bg-[#172731] border border-[#233D4C] p-4">
              <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                <span>How long does a screen replacement take?</span>
                <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Most standard 15.6" and 14" panels are stocked in our cleanroom and can be replaced within 45 to 90 minutes while you wait in our showroom lounge.
              </div>
            </div>

            <div class="faq-item rounded-xl bg-[#172731] border border-[#233D4C] p-4">
              <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                <span>Do you offer warranty on repairs?</span>
                <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes! All replaced components carry 1-Year Comprehensive Warranty, and board soldering repairs come with a 6-Month Hassle-Free Guarantee.
              </div>
            </div>
          </div>

          <div class="pt-4 text-center">
            <a href="faq.html" class="text-xs font-bold text-[#FD802E] hover:underline">View All 20+ Frequently Asked Questions →</a>
          </div>
        </div>

      </div>
    </section>`;

const newSection7 = `    <!-- SECTION 7: BOOKING CTA AND FAQS (EQUAL ALIGNMENT & HEIGHT) -->
    <section id="book" class="py-20 bg-[#0e181f] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        <!-- Left: Booking Form Card (h-full flex-col) -->
        <div class="lg:col-span-7 bg-[#172731] border border-[#233D4C] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] animate-pulse"></span>
              <span>Instant Appointment</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white mb-6">Schedule Your Laptop Repair</h2>

            <form class="repair-booking-form space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Your Name *</label>
                  <input type="text" name="name" required minlength="3" maxlength="50" pattern="[A-Za-z\\s.'-]{3,}" title="Full Name must contain letters only and be at least 3 characters long" placeholder="Full Name" autocomplete="name" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Mobile Phone *</label>
                  <input type="tel" name="phone" required minlength="10" maxlength="10" inputmode="numeric" pattern="[6-9][0-9]{9}" title="Mobile Phone must be a valid 10-digit number (digits only)" placeholder="10-digit number" autocomplete="tel" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Laptop Brand & Model *</label>
                  <input type="text" name="model" required minlength="3" placeholder="e.g. Dell Inspiron 15 / MacBook Air" class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none transition-colors">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Issue Category *</label>
                  <select required class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none">
                    <option value="">Select Primary Issue</option>
                    <option value="screen">Broken / Flickering Screen</option>
                    <option value="power">No Power / Won't Turn On</option>
                    <option value="battery">Battery Draining Fast / Not Charging</option>
                    <option value="liquid">Liquid / Water Spill Damage</option>
                    <option value="upgrade">RAM or NVMe SSD Upgrade</option>
                    <option value="overheating">Overheating / Loud Fan Noise</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-[#9fb3be] mb-1.5">Describe Symptom in Detail</label>
                <textarea rows="3" placeholder="Tell our technicians what happened, any error messages, etc." class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e181f] border border-[#233D4C] text-white text-xs focus:border-[#FD802E] focus:outline-none"></textarea>
              </div>

              <button type="submit" class="w-full py-3.5 rounded-xl bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-xs shadow-md shadow-[#FD802E]/25 transition-all">
                Confirm Appointment Booking
              </button>
            </form>
          </div>
          <p class="text-[11px] text-gray-500 text-center mt-3 pt-3 border-t border-[#233D4C]/40">Demo Booking. You will receive an instant simulated ticket ID.</p>
        </div>

        <!-- Right: FAQs Card (Matching Container, Equal Height & Flush Baseline) -->
        <div class="lg:col-span-5 bg-[#172731] border border-[#233D4C] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
              <span>Cleanroom Knowledgebase</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-black text-white mb-6">Repair FAQs</h3>

            <div class="faq-group space-y-3">
              
              <!-- FAQ 1 -->
              <div class="faq-item rounded-xl bg-[#0e181f] border border-[#233D4C] p-4 transition-colors">
                <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                  <span>Will my data be safe during motherboard repair?</span>
                  <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                  Yes. Unless the primary storage NAND itself is damaged by severe liquid corrosion, we remove the drive first and preserve all data with strict client confidentiality.
                </div>
              </div>

              <!-- FAQ 2 -->
              <div class="faq-item rounded-xl bg-[#0e181f] border border-[#233D4C] p-4 transition-colors">
                <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                  <span>How long does a screen replacement take?</span>
                  <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                  Most standard 15.6" and 14" panels are stocked in our cleanroom and can be replaced within 45 to 90 minutes while you wait in our showroom lounge.
                </div>
              </div>

              <!-- FAQ 3 -->
              <div class="faq-item rounded-xl bg-[#0e181f] border border-[#233D4C] p-4 transition-colors">
                <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                  <span>Do you offer warranty on repairs?</span>
                  <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                  Yes! All replaced components carry 1-Year Comprehensive Warranty, and board soldering repairs come with a 6-Month Hassle-Free Cleanroom Guarantee.
                </div>
              </div>

              <!-- FAQ 4 -->
              <div class="faq-item rounded-xl bg-[#0e181f] border border-[#233D4C] p-4 transition-colors">
                <button class="faq-trigger w-full flex items-center justify-between text-left text-xs font-bold text-white hover:text-[#FD802E] transition-colors">
                  <span>Can you fix a motherboard other shops declared dead?</span>
                  <svg class="faq-icon w-4 h-4 text-gray-400 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                  Yes. Retail repair shops often do not have ultrasonic tanks, infrared thermal cameras, or BGA rework stations. Over 85% of "dead" boards brought to us are revived successfully.
                </div>
              </div>

            </div>
          </div>

          <!-- FAQ Card Footer (mt-auto aligns flush to form baseline) -->
          <div class="mt-auto pt-6 border-t border-[#233D4C]/60 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2 text-xs text-[#9fb3be]">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Engineers Active On-Site</span>
            </div>
            <a href="faq.html" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#FD802E] hover:text-[#ff9248] transition-colors">
              <span>View All 20+ FAQs</span>
              <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>

        </div>

      </div>
    </section>`;

if (html.includes(oldSection7)) {
  html = html.replace(oldSection7, newSection7);
  console.log('3. Updated Booking Form and FAQ Card to equal alignment and height!');
} else {
  console.log('3. Warning: oldSection7 not found');
}

fs.writeFileSync('repair-upgrade.html', html, 'utf8');
console.log('=== FINISHED REPAIR-UPGRADE.HTML ===');
