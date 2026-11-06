const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetStart = '<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">';
const targetEnd = '<!-- Scrolling Column Right: 4 Detailed Stage Cards (lg:col-span-7) -->';

const idxStart = indexHtml.indexOf(targetStart);
const idxEnd = indexHtml.indexOf(targetEnd);

console.log('idxStart:', idxStart, 'idxEnd:', idxEnd);

if (idxStart !== -1 && idxEnd !== -1) {
  const replacement = `<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative">
          
          <!-- Column Left: 2 Hardware Diagnostic Lab Cards (Phase 1,2 & Phase 3,4) (lg:col-span-5) -->
          <div id="diagnostic-visual-col" class="lg:col-span-5 flex flex-col gap-6 justify-between h-full">
            
            <!-- Left Card 1: Phase 01 & 02 Certification Bench (Aligned with Steps 01 & 02) -->
            <div id="diagnostic-card-phase-1-2" class="equal-card rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#FD802E] flex flex-col justify-between">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-4 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 01 & 02 Lab Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">Cleanroom Bench A</span>
              </div>

              <!-- Central 3D Laptop Display with Creative Orbital 3D Rotation -->
              <div class="my-5 relative flex items-center justify-center min-h-[190px] sm:min-h-[210px] perspective-[1000px]">
                <div class="relative animate-laptop-creative-1 transition-transform duration-700 ease-out flex items-center justify-center w-full">
                  <img src="assets/images/hero/hero-laptop-floating.png" alt="Phase 01 & 02 Hardware Inspection" class="w-full max-w-[280px] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  
                  <!-- Target Pulse Point 1: Display -->
                  <div class="pulse-target absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 2: Motherboard Micro-Trace -->
                  <div class="pulse-target absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Telemetry Specs Box -->
              <div class="pt-4 border-t border-[#233D4C]/70 mt-auto">
                <div class="flex items-center justify-between text-xs font-mono mb-2">
                  <span class="text-[#9fb3be]">Active Inspection:</span>
                  <span class="text-white font-bold">Display Spectrum & Micro-Soldering</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-[#0e181f] h-2 rounded-full overflow-hidden p-0.5 border border-[#233D4C]">
                  <div class="h-full bg-gradient-to-r from-[#FD802E] to-[#ffaa6d] rounded-full w-1/2 transition-all duration-500"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-mono text-[#9fb3be] mt-1.5">
                  <span>Phase 01: 100% Calibrated</span>
                  <span class="text-[#FD802E] font-bold">Phase 02: In Progress</span>
                </div>
              </div>
            </div>

            <!-- Left Card 2: Phase 03 & 04 Certification Bench (Aligned with Steps 03 & 04) -->
            <div id="diagnostic-card-phase-3-4" class="equal-card rounded-3xl bg-[#172731] border-2 border-[#233D4C] p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#FD802E] flex flex-col justify-between">
              <!-- Ambient Glow Orb -->
              <div class="absolute -top-10 -right-10 w-60 h-60 bg-[#FD802E]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Status Header -->
              <div class="flex items-center justify-between pb-4 border-b border-[#233D4C]/70">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E] animate-ping"></span>
                  <span class="font-mono text-xs font-bold text-[#FD802E] uppercase tracking-widest">Phase 03 & 04 Lab Active</span>
                </div>
                <span class="text-[11px] font-mono text-[#9fb3be] bg-[#0e181f] px-2.5 py-1 rounded-md border border-[#233D4C]">Thermal & Burn-In Bench B</span>
              </div>

              <!-- Central 3D Laptop Display with Creative Orbital 3D Rotation -->
              <div class="my-5 relative flex items-center justify-center min-h-[190px] sm:min-h-[210px] perspective-[1000px]">
                <div class="relative animate-laptop-creative-2 transition-transform duration-700 ease-out flex items-center justify-center w-full">
                  <img src="assets/images/hero/hero-laptop-floating.png" alt="Phase 03 & 04 Hardware Inspection" class="w-full max-w-[280px] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  
                  <!-- Target Pulse Point 3: Thermal Liquid Metal -->
                  <div class="pulse-target absolute top-8 left-1/3 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                  <!-- Target Pulse Point 4: Battery & Stress Burn-In -->
                  <div class="pulse-target absolute bottom-8 right-1/3 flex items-center justify-center">
                    <span class="w-5 h-5 rounded-full bg-[#FD802E]/50 animate-ping absolute"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#FD802E] border-2 border-white shadow-lg"></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Telemetry Specs Box -->
              <div class="pt-4 border-t border-[#233D4C]/70 mt-auto">
                <div class="flex items-center justify-between text-xs font-mono mb-2">
                  <span class="text-[#9fb3be]">Active Inspection:</span>
                  <span class="text-white font-bold">Thermal Overhaul & 4-Hr Burn-In</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-[#0e181f] h-2 rounded-full overflow-hidden p-0.5 border border-[#233D4C]">
                  <div class="h-full bg-gradient-to-r from-[#FD802E] to-[#ffaa6d] rounded-full w-full transition-all duration-500"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-mono text-[#9fb3be] mt-1.5">
                  <span>Phase 03: -14°C Thermal Drop</span>
                  <span class="text-[#FD802E] font-bold">Phase 04: 100% Certified</span>
                </div>
              </div>
            </div>

          </div>

          `;

  indexHtml = indexHtml.substring(0, idxStart) + replacement + indexHtml.substring(idxEnd);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Successfully replaced single left card with 2 balanced diagnostic cards in index.html!');
} else {
  console.log('Indices not found!');
}
