const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetSnippet = `              <!-- Central 3D Laptop Display with Creative Orbital 3D Rotation -->
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
              </div>`;

const videoSnippet = `              <!-- Central Video Showcase: Hardware Diagnostic Lab Live Feed -->
              <div class="my-5 relative rounded-2xl overflow-hidden border border-[#233D4C] bg-[#0e181f] shadow-lg group">
                <video autoplay loop muted playsinline preload="auto" class="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105">
                  <source src="assets/videos/diagnostic-lab.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                
                <!-- Ambient Subtle Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#172731]/75 via-transparent to-transparent pointer-events-none"></div>
                
                <!-- Floating Telemetry Pills -->
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#FD802E] border border-[#FD802E]/30 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#FD802E] animate-ping"></span>
                  LIVE LAB TELEMETRY
                </span>
                
                <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                  4K Cleanroom Inspection
                </span>
              </div>`;

if (indexHtml.includes(targetSnippet)) {
  indexHtml = indexHtml.replace(targetSnippet, videoSnippet);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Successfully embedded diagnostic-lab.mp4 into Card 1 in index.html!');
} else {
  console.log('Target snippet not matched directly, checking...');
  const idx = indexHtml.indexOf('Phase 01 & 02 Hardware Inspection');
  console.log('Image alt idx:', idx);
}
