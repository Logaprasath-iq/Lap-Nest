const fs = require('fs');

console.log('=== APPLYING BLOG CARD EMPTY SPACE AND HERO READ GUIDE FIXES ===\n');

let html = fs.readFileSync('blog.html', 'utf8');

// 1. Update Hero Read Featured Guide button and right-side card
const oldHeroActions = `<div class="pt-1 flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f] border border-[#233D4C] text-[#FD802E]">
                50+ Hardware Articles
              </span>
              <a href="#featured-article" class="text-xs font-semibold text-white hover:text-[#FD802E] flex items-center gap-1 transition-colors">
                <span>Read Featured Guide</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>`;

const newHeroActions = `<div class="pt-1 flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f] border border-[#233D4C] text-[#FD802E]">
                50+ Hardware Articles
              </span>
              <a href="blog-details.html?id=ssd-benchmark" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all">
                <span>Read Featured Guide</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>`;

if (html.includes(oldHeroActions)) {
  html = html.replace(oldHeroActions, newHeroActions);
  console.log('Updated Hero Read Featured Guide button to point to blog-details.html?id=ssd-benchmark.');
} else {
  console.log('WARNING: oldHeroActions not found exactly; using regex.');
  html = html.replace(/<a href="#featured-article"[\s\S]*?Read Featured Guide[\s\S]*?<\/a>/, 
    `<a href="blog-details.html?id=ssd-benchmark" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-md shadow-[#FD802E]/25 transition-all"><span>Read Featured Guide</span><svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
}

// 2. Replace Pinterest URL in hero right side with local image & link
const oldHeroRightCard = `<!-- Right Image Card (lg:col-span-5) -->
          <div class="lg:col-span-5 z-10">
            <div class="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#233D4C] shadow-lg group">
              <img src="https://i.pinimg.com/736x/91/4b/81/914b8135623dad0aa3747fccbdf46b35.jpg" alt="Hardware Journal" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-transparent to-transparent"></div>
              <span class="hero-image-badge dark-badge-lock absolute bottom-3 left-3 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f]/90 border border-white/20 text-white backdrop-blur-md shadow-lg flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] animate-pulse"></span>
                <span>Lab Benchmarks & Teardowns</span>
              </span>
            </div>
          </div>`;

const newHeroRightCard = `<!-- Right Image Card (lg:col-span-5) -->
          <div class="lg:col-span-5 z-10">
            <a href="blog-details.html?id=ssd-benchmark" class="block relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#233D4C] shadow-lg group hover:border-[#FD802E]/60 transition-all">
              <img src="assets/images/blog/blog-nvme.jpg" alt="Hardware Journal" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e181f]/85 via-[#0e181f]/20 to-transparent"></div>
              <span class="hero-image-badge dark-badge-lock absolute bottom-3 left-3 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0e181f]/90 border border-white/20 text-white backdrop-blur-md shadow-lg flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FD802E] animate-pulse"></span>
                <span>Lab Benchmarks & Teardowns</span>
              </span>
              <span class="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FD802E] text-white shadow-sm">
                FEATURED GUIDE
              </span>
            </a>
          </div>`;

if (html.includes(oldHeroRightCard)) {
  html = html.replace(oldHeroRightCard, newHeroRightCard);
  console.log('Updated Hero Right Image Card with local image & link.');
}

// 3. Add id="featured-article" to Section 2
html = html.replace(
  '<section class="py-16 bg-[#111e26] border-t border-[#233D4C]">',
  '<section id="featured-article" class="py-16 bg-[#111e26] border-t border-[#233D4C]">'
);
console.log('Added id="featured-article" to Section 2.');

// 4. Fill right side empty space of all 6 cards
const readTimes = [
  { id: 'thermal-paste-guide', time: '5 Min Read' },
  { id: 'student-guide', time: '7 Min Read' },
  { id: 'apple-vs-intel', time: '9 Min Read' },
  { id: 'refurb-testing', time: '6 Min Read' },
  { id: 'liquid-damage-guide', time: '4 Min Read' },
  { id: 'rental-economics', time: '6 Min Read' },
];

readTimes.forEach(item => {
  const targetPattern = `<div class="equal-card-footer mt-auto pt-4 border-t border-[#233D4C]">\n                <a href="blog-details.html?id=${item.id}" class="text-xs font-bold text-[#FD802E] hover:underline flex items-center gap-1">\n                  <span>Read Guide</span>\n                  <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\n                </a>\n              </div>`;

  const replacement = `<div class="equal-card-footer mt-auto pt-4 border-t border-[#233D4C] flex items-center justify-between">\n                <a href="blog-details.html?id=${item.id}" class="text-xs font-bold text-[#FD802E] hover:underline flex items-center gap-1 group/btn">\n                  <span>Read Guide</span>\n                  <svg class="w-3.5 h-3.5 rtl-flip group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\n                </a>\n                <span class="text-[11px] font-mono text-[#9fb3be] flex items-center gap-1.5">\n                  <svg class="w-3.5 h-3.5 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\n                  <span>${item.time}</span>\n                </span>\n              </div>`;

  if (html.includes(targetPattern)) {
    html = html.replace(targetPattern, replacement);
    console.log(`Filled right side empty space for ${item.id} with '${item.time}'.`);
  } else {
    console.log(`WARNING: targetPattern for ${item.id} not found exactly.`);
  }
});

fs.writeFileSync('blog.html', html, 'utf8');
console.log('\nAll updates applied to blog.html successfully!');
