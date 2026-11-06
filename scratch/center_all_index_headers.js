const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Center "Explore By Category"
const oldCatHeader = `<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Curated Catalog</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">Explore By Category</h2>
            <p class="text-sm text-[#9fb3be] mt-2">Precision-engineered hardware tailored to developers, gamers, and enterprises.</p>
          </div>
          <a href="products.html" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FD802E] hover:underline">
            <span>View All Categories</span>
            <svg class="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>`;

const newCatHeader = `<div class="text-center max-w-2xl mx-auto mb-12 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172731] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Curated Catalog</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Explore By Category</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Precision-engineered hardware tailored to developers, gamers, and enterprises.</p>
          <div class="mt-3">
            <a href="products.html" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#FD802E] hover:underline">
              <span>View All Categories</span>
              <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>`;

if (indexHtml.includes(oldCatHeader)) {
  indexHtml = indexHtml.replace(oldCatHeader, newCatHeader);
  console.log('Centered Explore By Category header!');
}

// Center "Enterprise-Grade Service Level Guarantees"
const oldSlaHeader = `<div class="text-left max-w-2xl mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Unmatched Standards of Care</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white">Enterprise-Grade Service Level Guarantees</h2>
          <p class="text-sm text-[#9fb3be] mt-3">Contract-backed promises delivering zero downtime, maximum data confidentiality, and rapid hardware turnaround.</p>
        </div>`;

const newSlaHeader = `<div class="text-center max-w-2xl mx-auto mb-14 gsap-fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[11px] font-bold text-[#FD802E] uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E]"></span>
            <span>Unmatched Standards of Care</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-1">Enterprise-Grade Service Level Guarantees</h2>
          <p class="text-sm text-[#9fb3be] mt-2">Contract-backed promises delivering zero downtime, maximum data confidentiality, and rapid hardware turnaround.</p>
        </div>`;

if (indexHtml.includes(oldSlaHeader)) {
  indexHtml = indexHtml.replace(oldSlaHeader, newSlaHeader);
  console.log('Centered Enterprise SLA header!');
} else {
  // try flexible match
  const slaIdx = indexHtml.indexOf('Enterprise-Grade Service Level Guarantees');
  if (slaIdx !== -1) {
    const divStart = indexHtml.lastIndexOf('<div', slaIdx);
    const pEnd = indexHtml.indexOf('</div>', slaIdx) + 6;
    indexHtml = indexHtml.substring(0, divStart) + newSlaHeader + indexHtml.substring(pEnd);
    console.log('Centered Enterprise SLA header via indexing!');
  }
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('All headings centered in index.html!');
