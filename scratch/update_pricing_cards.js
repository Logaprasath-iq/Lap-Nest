const fs = require('fs');

let html = fs.readFileSync('pricing.html', 'utf8');

const oldSection3Regex = /<div class=\"grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch\">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*<!-- SECTION 4: REPAIR PRICING -->/;

const newSection3 = `<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <!-- Rental Plan 1: Standard -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] p-8 flex flex-col justify-between h-full shadow-card-dark hover:border-[#FD802E]/50 transition-all">
            <div>
              <h3 class="text-lg font-bold text-white">Standard Office Fleet</h3>
              <p class="text-xs text-[#9fb3be] mt-1 min-h-[38px] flex items-center">Dell / Lenovo Core i5, 16GB RAM, 256GB SSD</p>
              
              <div class="my-6 pt-4 border-t border-[#233D4C]/60">
                <span class="rental-price-monthly text-3xl sm:text-4xl font-black text-white">₹1,999 <span class="text-xs font-normal text-[#9fb3be]">/ month</span></span>
                <span class="rental-price-quarterly text-3xl sm:text-4xl font-black text-white hidden">₹5,099 <span class="text-xs font-normal text-[#9fb3be]">/ quarter</span></span>
              </div>
              
              <ul class="space-y-3.5 text-xs text-[#9fb3be] pb-6">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>4-Hour Onsite Replacement Guarantee</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Windows 11 Pro Genuine License</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Includes charger and protective sleeve</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Zero maintenance & hardware liability</span></li>
              </ul>
            </div>

            <div class="mt-auto pt-4 border-t border-[#233D4C]/40">
              <a href="order.html?plan=rental-standard" class="w-full block py-3.5 rounded-xl text-center bg-[#0e181f] hover:bg-[#FD802E] text-[#FD802E] hover:text-white border border-[#FD802E]/40 font-bold text-xs transition-all shadow-sm">Enquire Now</a>
            </div>
          </div>

          <!-- Rental Plan 2: Engineering Pro (CENTERED MOST POPULAR BADGE) -->
          <div class="equal-card rounded-2xl bg-[#172731] border-2 border-[#FD802E] p-8 flex flex-col justify-between h-full shadow-lg shadow-[#FD802E]/20 relative">
            <!-- Horizontally Centered Most Popular Tag -->
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FD802E] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md shadow-[#FD802E]/30 whitespace-nowrap z-10">
              Most Popular
            </div>

            <div>
              <h3 class="text-lg font-bold text-white">Developer Workstation</h3>
              <p class="text-xs text-[#9fb3be] mt-1 min-h-[38px] flex items-center">Lenovo ThinkPad / HP Core i7, 32GB RAM, 512GB NVMe</p>
              
              <div class="my-6 pt-4 border-t border-[#233D4C]/60">
                <span class="rental-price-monthly text-3xl sm:text-4xl font-black text-white">₹3,499 <span class="text-xs font-normal text-[#9fb3be]">/ month</span></span>
                <span class="rental-price-quarterly text-3xl sm:text-4xl font-black text-white hidden">₹8,999 <span class="text-xs font-normal text-[#9fb3be]">/ quarter</span></span>
              </div>
              
              <ul class="space-y-3.5 text-xs text-[#9fb3be] pb-6">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Ubuntu LTS / Dual Boot Windows Supported</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>2-Hour Express Hot Swap Machine Delivery</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>100% Tested Full Battery Health (>90%)</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Zero Security Deposit on GST validation</span></li>
              </ul>
            </div>

            <div class="mt-auto pt-4 border-t border-[#233D4C]/40">
              <a href="order.html?plan=rental-pro" class="w-full block py-3.5 rounded-xl text-center bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-xs shadow-md shadow-[#FD802E]/30 transition-all">Rent This Machine</a>
            </div>
          </div>

          <!-- Rental Plan 3: MacBook Studio -->
          <div class="equal-card rounded-2xl bg-[#172731] border border-[#233D4C] p-8 flex flex-col justify-between h-full shadow-card-dark hover:border-[#FD802E]/50 transition-all">
            <div>
              <h3 class="text-lg font-bold text-white">MacBook Studio & Video</h3>
              <p class="text-xs text-[#9fb3be] mt-1 min-h-[38px] flex items-center">Apple MacBook Pro (M2 / M3 Chip), 16GB/36GB</p>
              
              <div class="my-6 pt-4 border-t border-[#233D4C]/60">
                <span class="rental-price-monthly text-3xl sm:text-4xl font-black text-white">₹4,999 <span class="text-xs font-normal text-[#9fb3be]">/ month</span></span>
                <span class="rental-price-quarterly text-3xl sm:text-4xl font-black text-white hidden">₹12,749 <span class="text-xs font-normal text-[#9fb3be]">/ quarter</span></span>
              </div>
              
              <ul class="space-y-3.5 text-xs text-[#9fb3be] pb-6">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Liquid Retina XDR color accurate panel</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Original OEM MagSafe 3 Fast Charger</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Final Cut Pro & Adobe Creative Cloud ready</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Comprehensive accidental damage shield</span></li>
              </ul>
            </div>

            <div class="mt-auto pt-4 border-t border-[#233D4C]/40">
              <a href="order.html?plan=rental-macbook" class="w-full block py-3.5 rounded-xl text-center bg-[#0e181f] hover:bg-[#FD802E] text-[#FD802E] hover:text-white border border-[#FD802E]/40 font-bold text-xs transition-all shadow-sm">Enquire Now</a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 4: REPAIR PRICING -->`;

html = html.replace(oldSection3Regex, newSection3);
fs.writeFileSync('pricing.html', html);
console.log('Successfully updated Section 3 in pricing.html with centered Most Popular badge and matching alignments!');
