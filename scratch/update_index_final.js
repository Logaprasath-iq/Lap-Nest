const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Fix sticky section: replace overflow-hidden with overflow-visible relative
indexHtml = indexHtml.replace(
  'id="sticky-diagnostic-section" class="py-20 lg:py-28 bg-[#111e26] border-t border-[#233D4C] relative overflow-hidden"',
  'id="sticky-diagnostic-section" class="py-20 lg:py-28 bg-[#111e26] border-t border-[#233D4C] relative overflow-visible"'
);

// 2. Fix sticky column & 3D rotating laptop wrapper
const oldStickyLeft = `<div class="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <div id="sticky-visual-card" class="rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-5 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span id="sticky-phase-badge" class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 01 Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">ISO Cleanroom Lab</span>
              </div>

              <!-- Central 3D Laptop Display with Animated Component Targets -->
              <div class="my-6 sm:my-8 relative flex items-center justify-center min-h-[200px] sm:min-h-[240px]">
                <img id="sticky-laptop-img" src="assets/images/hero/hero-laptop-floating.png" alt="Diagnostic Inspection" class="w-full max-w-[320px] object-contain transition-all duration-700 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                
                <!-- Target Pulse Point 1: Display -->
                <div id="pulse-point-1" class="pulse-target absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 2: Motherboard -->
                <div id="pulse-point-2" class="pulse-target absolute top-24 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 3: Thermal Liquid Metal -->
                <div id="pulse-point-3" class="pulse-target absolute bottom-12 left-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
                <!-- Target Pulse Point 4: Battery -->
                <div id="pulse-point-4" class="pulse-target absolute bottom-8 right-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                  <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                </div>
              </div>`;

const newStickyLeft = `<div id="sticky-visual-col" class="lg:col-span-5 lg:sticky lg:top-24 self-start z-20">
            <div id="sticky-visual-card" class="rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-5 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span id="sticky-phase-badge" class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 01 Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">ISO Cleanroom Lab</span>
              </div>

              <!-- Central 3D Laptop Display with Animated Component Targets -->
              <div class="my-6 sm:my-8 relative flex items-center justify-center min-h-[200px] sm:min-h-[250px] perspective-[1000px]">
                <div id="sticky-laptop-wrapper" class="relative animate-laptop-spin transition-transform duration-700 ease-out flex items-center justify-center w-full">
                  <img id="sticky-laptop-img" src="assets/images/hero/hero-laptop-floating.png" alt="Diagnostic Inspection" class="w-full max-w-[320px] object-contain transition-all duration-700 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  
                  <!-- Target Pulse Point 1: Display -->
                  <div id="pulse-point-1" class="pulse-target absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 2: Motherboard -->
                  <div id="pulse-point-2" class="pulse-target absolute top-24 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 transition-all duration-300">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 3: Thermal Liquid Metal -->
                  <div id="pulse-point-3" class="pulse-target absolute bottom-12 left-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 4: Battery -->
                  <div id="pulse-point-4" class="pulse-target absolute bottom-8 right-1/4 flex items-center justify-center opacity-0 transition-all duration-300">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                </div>
              </div>`;

if (indexHtml.includes(oldStickyLeft)) {
  indexHtml = indexHtml.replace(oldStickyLeft, newStickyLeft);
  console.log('Successfully updated sticky left column!');
} else {
  console.log('Old sticky left string not found directly, checking index...');
  const idx = indexHtml.indexOf('id="sticky-visual-card"');
  console.log('Visual card idx:', idx);
}

// 3. Update Testimonials: Add real author images, equal 5-line quotes, aligned baselines
const oldTestimonialsGrid = `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Testimonial 1 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "My MacBook Pro logic board suffered a severe coffee spill. Other service centers told me it was completely dead and demanded ₹48,000 for replacement. LAPNEST cleanroom technicians fixed the micro-trace short circuits within 36 hours for ₹7,500! Absolutely miraculous service."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#FD802E]/20 border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                AK
              </div>
              <div>
                <p class="text-sm font-bold text-white">Anand Krishnan</p>
                <p class="text-[11px] text-[#FD802E]">Full Stack Architect, OMR Chennai</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "We rented 25 high-end Dell Latitude laptops for our AI boot-camp in Sholinganallur. Every machine was pre-configured with Ubuntu, 32GB RAM, and pristine screens. Zero downtime, immediate technical support, and completely hassle-free paperwork."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#233D4C] border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                PR
              </div>
              <div>
                <p class="text-sm font-bold text-white">Pooja Ramanathan</p>
                <p class="text-[11px] text-[#FD802E]">Operations VP, TechSprint AI</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                "Bought a refurbished ThinkPad T14 for my college coding projects. The laptop looks practically brand new with over 96% battery health and a 1-year warranty. Delivered same day in Chennai with free laptop sleeve. Couldn't be happier!"
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-6 border-t border-[#233D4C]/40">
              <div class="w-11 h-11 rounded-full bg-[#FD802E]/20 border border-[#FD802E] text-white font-bold flex items-center justify-center text-sm">
                VS
              </div>
              <div>
                <p class="text-sm font-bold text-white">Vignesh Sundaram</p>
                <p class="text-[11px] text-[#FD802E]">CS Student, Anna University</p>
              </div>
            </div>
          </div>

        </div>`;

const newTestimonialsGrid = `<div class="grid grid-cols-1 md:grid-cols-3 gap-8 equal-card-grid">
          
          <!-- Testimonial 1 -->
          <div class="equal-card p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <div class="min-h-[115px] flex items-center">
                <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                  "My MacBook Pro logic board suffered a severe coffee spill. Other service centers demanded ₹48,000 for replacement. LAPNEST cleanroom technicians repaired the micro-trace short circuits within 36 hours for ₹7,500. Absolutely miraculous and honest repair service!"
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-auto border-t border-[#233D4C]/40">
              <img src="assets/images/team/team-2.jpg" alt="Anand Krishnan" class="w-11 h-11 rounded-full object-cover border-2 border-[#FD802E] shadow-md shrink-0">
              <div>
                <p class="text-sm font-bold text-white">Anand Krishnan</p>
                <p class="text-[11px] text-[#FD802E]">Full Stack Architect, OMR Chennai</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="equal-card p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <div class="min-h-[115px] flex items-center">
                <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                  "We rented 25 high-end Dell Latitude laptops for our AI boot-camp in Sholinganallur. Every machine was pre-configured with Ubuntu, 32GB RAM, and pristine screens. Zero downtime, immediate technical support, and completely hassle-free enterprise paperwork."
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-auto border-t border-[#233D4C]/40">
              <img src="assets/images/team/team-1.jpg" alt="Pooja Ramanathan" class="w-11 h-11 rounded-full object-cover border-2 border-[#FD802E] shadow-md shrink-0">
              <div>
                <p class="text-sm font-bold text-white">Pooja Ramanathan</p>
                <p class="text-[11px] text-[#FD802E]">Operations VP, TechSprint AI</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="equal-card p-8 rounded-2xl bg-[#172731] border border-[#233D4C] relative flex flex-col justify-between group hover:border-[#FD802E] transition-all duration-300 shadow-xl tilt-card">
            <div>
              <div class="flex items-center gap-1 text-[#FD802E] text-sm mb-4">
                ★★★★★
              </div>
              <div class="min-h-[115px] flex items-center">
                <p class="text-xs text-[#9fb3be] leading-relaxed italic">
                  "Bought a refurbished ThinkPad T14 for my college coding projects. The laptop looks practically brand new with over 96% battery health and a 1-year warranty. Delivered same day in Chennai with free laptop sleeve and bag. Couldn't be happier with Lapnest!"
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-6 mt-auto border-t border-[#233D4C]/40">
              <img src="assets/images/team/team-4.jpg" alt="Vignesh Sundaram" class="w-11 h-11 rounded-full object-cover border-2 border-[#FD802E] shadow-md shrink-0">
              <div>
                <p class="text-sm font-bold text-white">Vignesh Sundaram</p>
                <p class="text-[11px] text-[#FD802E]">CS Student, Anna University</p>
              </div>
            </div>
          </div>

        </div>`;

if (indexHtml.includes(oldTestimonialsGrid)) {
  indexHtml = indexHtml.replace(oldTestimonialsGrid, newTestimonialsGrid);
  console.log('Successfully updated testimonials with images and aligned lines!');
} else {
  console.log('Old testimonials grid not found directly, checking...');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');
