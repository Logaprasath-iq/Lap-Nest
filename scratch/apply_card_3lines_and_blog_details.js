const fs = require('fs');

console.log('=== 1. UPDATING GLOSSARY TO 3 BALANCED LINES IN BLOG.HTML ===\n');

let blogHtml = fs.readFileSync('blog.html', 'utf8');

const oldGlossary = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#233D4C] text-xs">
            
            <!-- Term 01 -->
            <div class="pb-5 lg:pb-0 lg:pr-6">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">01</span>
                <p class="font-bold text-white text-sm">BGA (Ball Grid Array)</p>
              </div>
              <p class="text-[#9fb3be] text-xs leading-relaxed">Surface-mount packaging using micro solder balls underneath chip dies.</p>
            </div>

            <!-- Term 02 -->
            <div class="py-5 lg:py-0 lg:px-6">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">02</span>
                <p class="font-bold text-white text-sm">VRM (Voltage Regulator)</p>
              </div>
              <p class="text-[#9fb3be] text-xs leading-relaxed">Converts 19V DC input down to ultra-precise 0.8V–1.2V CPU core rail power.</p>
            </div>

            <!-- Term 03 -->
            <div class="py-5 lg:py-0 lg:px-6">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">03</span>
                <p class="font-bold text-white text-sm">Buck Converter</p>
              </div>
              <p class="text-[#9fb3be] text-xs leading-relaxed">High-efficiency switching regulator stabilizing voltages across power stages.</p>
            </div>

            <!-- Term 04 -->
            <div class="pt-5 lg:pt-0 lg:pl-6">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">04</span>
                <p class="font-bold text-white text-sm">EC / KBC Chip</p>
              </div>
              <p class="text-[#9fb3be] text-xs leading-relaxed">Embedded controller regulating boot logic, keyboard matrix & thermal telemetry.</p>
            </div>

          </div>`;

const newGlossary = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#233D4C] text-xs">
            
            <!-- Term 01 -->
            <div class="pb-5 lg:pb-0 lg:pr-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">01</span>
                  <p class="font-bold text-white text-sm">BGA (Ball Grid Array)</p>
                </div>
                <p class="text-[#9fb3be] text-xs leading-relaxed min-h-[3.6rem] flex items-center">
                  High-density surface-mount packaging method utilizing micro solder balls underneath silicon chip dies.
                </p>
              </div>
            </div>

            <!-- Term 02 -->
            <div class="py-5 lg:py-0 lg:px-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">02</span>
                  <p class="font-bold text-white text-sm">VRM (Voltage Regulator)</p>
                </div>
                <p class="text-[#9fb3be] text-xs leading-relaxed min-h-[3.6rem] flex items-center">
                  Multi-phase switching circuitry converting 19V input down to ultra-precise 0.8V–1.2V CPU core power.
                </p>
              </div>
            </div>

            <!-- Term 03 -->
            <div class="py-5 lg:py-0 lg:px-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">03</span>
                  <p class="font-bold text-white text-sm">Buck Converter</p>
                </div>
                <p class="text-[#9fb3be] text-xs leading-relaxed min-h-[3.6rem] flex items-center">
                  High-efficiency step-down switching regulator stabilizing power delivery across motherboard stages.
                </p>
              </div>
            </div>

            <!-- Term 04 -->
            <div class="pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[10px] font-mono font-bold text-[#FD802E] bg-[#FD802E]/15 px-1.5 py-0.5 rounded border border-[#FD802E]/30">04</span>
                  <p class="font-bold text-white text-sm">EC / KBC Chip</p>
                </div>
                <p class="text-[#9fb3be] text-xs leading-relaxed min-h-[3.6rem] flex items-center">
                  Dedicated embedded microcontroller regulating system power logic, keyboard matrix, and thermals.
                </p>
              </div>
            </div>

          </div>`;

if (blogHtml.includes(oldGlossary)) {
  blogHtml = blogHtml.replace(oldGlossary, newGlossary);
  fs.writeFileSync('blog.html', blogHtml, 'utf8');
  console.log('Successfully updated blog.html glossary card to 3 balanced lines with min-h-[3.6rem]!');
} else {
  console.log('Searching for regex match in blog.html for glossary...');
  blogHtml = blogHtml.replace(/<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-\[#233D4C\] text-xs">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
    newGlossary + '\n        </div>\n      </div>\n    </section>');
  fs.writeFileSync('blog.html', blogHtml, 'utf8');
  console.log('Applied glossary update via pattern match.');
}
