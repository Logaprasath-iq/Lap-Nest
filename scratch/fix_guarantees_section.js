const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('Enterprise-Grade Service Level Guarantees');
const secStart = indexHtml.lastIndexOf('<section', sIdx);
const faqStart = indexHtml.indexOf('<!-- FAQ ACCORDION SUB-BLOCK', sIdx);

console.log('secStart:', secStart, 'faqStart:', faqStart);

const replacement = `<section id="service-guarantees" class="py-20 lg:py-24 bg-[#111e26] border-t border-b border-[#233D4C] relative overflow-hidden scroll-mt-28">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-14 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Unmatched Standards of Care</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Enterprise-Grade Service Level Guarantees</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Contract-backed promises delivering zero downtime, maximum data confidentiality, and rapid hardware turnaround.</p>
        </div>

        <!-- 4 Balanced SLA Guarantee Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch equal-card-grid">
          
          <!-- SLA Card 1 -->
          <div class="equal-card p-6 sm:p-7 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all duration-300 shadow-xl tilt-card flex flex-col justify-between text-left">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">01</div>
              <h3 class="text-base font-black text-white mb-2 text-left">Showroom Sales & Retail</h3>
              <p class="text-xs text-[#9fb3be] mb-4 leading-relaxed text-left min-h-[36px] flex items-center">Multi-brand laptop inventory with zero grey-market imports.</p>
              <ul class="space-y-2.5 text-xs text-[#9fb3be] text-left">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>1-Year Pan-India Onsite Warranty</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>7-Day Zero-Questions Hardware Exchange</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Free Old Laptop Data Migration</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>100% Original Brand Power Bricks</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-6 border-t border-[#233D4C]/60 text-left">
              <span class="inline-block text-[11px] font-mono text-[#FD802E] font-bold bg-[#FD802E]/10 px-2.5 py-1 rounded-md border border-[#FD802E]/30">SLA: Same-Day Store Handover</span>
            </div>
          </div>

          <!-- SLA Card 2 -->
          <div class="equal-card p-6 sm:p-7 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all duration-300 shadow-xl tilt-card flex flex-col justify-between text-left">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">02</div>
              <h3 class="text-base font-black text-white mb-2 text-left">Corporate Fleet Leasing</h3>
              <p class="text-xs text-[#9fb3be] mb-4 leading-relaxed text-left min-h-[36px] flex items-center">Turnkey computing infrastructure for IT corridors & startups.</p>
              <ul class="space-y-2.5 text-xs text-[#9fb3be] text-left">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>2-Hour Hot-Swap Machine Delivery in OMR</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>₹0 Security Deposit for GST Registered Firms</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Hardware Refresh Every 18 Months</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Pre-Imaged with Custom Corporate MDM</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-6 border-t border-[#233D4C]/60 text-left">
              <span class="inline-block text-[11px] font-mono text-[#FD802E] font-bold bg-[#FD802E]/10 px-2.5 py-1 rounded-md border border-[#FD802E]/30">SLA: 99.8% Fleet Uptime</span>
            </div>
          </div>

          <!-- SLA Card 3 -->
          <div class="equal-card p-6 sm:p-7 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all duration-300 shadow-xl tilt-card flex flex-col justify-between text-left">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">03</div>
              <h3 class="text-base font-black text-white mb-2 text-left">Cleanroom Micro-Repair</h3>
              <p class="text-xs text-[#9fb3be] mb-4 leading-relaxed text-left min-h-[36px] flex items-center">ISO-standard motherboard micro-soldering & component repair.</p>
              <ul class="space-y-2.5 text-xs text-[#9fb3be] text-left">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>₹0 Diagnostic & Inspection Fee</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>90-Day Comprehensive Repair Warranty</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Strict Zero Data Access Privacy Protocol</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Component-Level Fix over Board Replacement</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-6 border-t border-[#233D4C]/60 text-left">
              <span class="inline-block text-[11px] font-mono text-[#FD802E] font-bold bg-[#FD802E]/10 px-2.5 py-1 rounded-md border border-[#FD802E]/30">SLA: 4-Hour Express Bench</span>
            </div>
          </div>

          <!-- SLA Card 4 -->
          <div class="equal-card p-6 sm:p-7 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E]/60 transition-all duration-300 shadow-xl tilt-card flex flex-col justify-between text-left">
            <div>
              <div class="w-10 h-10 rounded-xl bg-[#0e181f] border border-[#233D4C] text-[#FD802E] flex items-center justify-center font-mono font-bold text-sm mb-4">04</div>
              <h3 class="text-base font-black text-white mb-2 text-left">Instant Buyback & Exchange</h3>
              <p class="text-xs text-[#9fb3be] mb-4 leading-relaxed text-left min-h-[36px] flex items-center">Transparent algorithmic device valuation with immediate payout.</p>
              <ul class="space-y-2.5 text-xs text-[#9fb3be] text-left">
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>15-Minute Instant UPI / Bank Settlement</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>DoD 5220.22-M Certified Data Destruction</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Up to 65% Value Retention on 1-Yr Devices</span></li>
                <li class="flex items-start gap-2.5"><span class="text-[#FD802E] font-bold shrink-0">✓</span><span>Exchange Bonus on Store Laptop Purchases</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-6 border-t border-[#233D4C]/60 text-left">
              <span class="inline-block text-[11px] font-mono text-[#FD802E] font-bold bg-[#FD802E]/10 px-2.5 py-1 rounded-md border border-[#FD802E]/30">SLA: Instant Paperless Payout</span>
            </div>
          </div>

        </div>

        `;

indexHtml = indexHtml.substring(0, secStart) + replacement + indexHtml.substring(faqStart);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully replaced Guarantees section!');
