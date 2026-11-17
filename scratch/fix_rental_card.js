const fs = require('fs');

// 1. Update assets/css/input.css
let css = fs.readFileSync('assets/css/input.css', 'utf8');

const targetBgBlock = `/* Dark Page Backgrounds to Light Canvas in Light Mode */
html.light .bg-\\[\\#0e181f\\]:not(footer *):not(.footer-dark-lock *),
html.light .bg-\\[\\#111e26\\]:not(footer *):not(.footer-dark-lock *),
html.light .bg-\\[\\#051F20\\]:not(footer *):not(.footer-dark-lock *),
html.light .bg-\\[\\#19171b\\]:not(footer *):not(.footer-dark-lock *),
html.light .bg-brand-bg:not(footer *):not(.footer-dark-lock *),
.light .bg-\\[\\#0e181f\\]:not(footer *):not(.footer-dark-lock *),
.light .bg-\\[\\#111e26\\]:not(footer *):not(.footer-dark-lock *),
.light .bg-\\[\\#051F20\\]:not(footer *):not(.footer-dark-lock *),
.light .bg-\\[\\#19171b\\]:not(footer *):not(.footer-dark-lock *),
.light .bg-brand-bg:not(footer *):not(.footer-dark-lock *) {
  background-color: #f3f6f8 !important;
  color: #111e26 !important;
}`;

const replacementBgBlock = `/* Dark Page Backgrounds to Light Canvas in Light Mode */
html.light .bg-\\[\\#0e181f\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
html.light .bg-\\[\\#111e26\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
html.light .bg-\\[\\#051F20\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
html.light .bg-\\[\\#19171b\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
html.light .bg-brand-bg:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
.light .bg-\\[\\#0e181f\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
.light .bg-\\[\\#111e26\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
.light .bg-\\[\\#051F20\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
.light .bg-\\[\\#19171b\\]:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *),
.light .bg-brand-bg:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock):not(.dark-card-lock *) {
  background-color: #f3f6f8 !important;
  color: #111e26 !important;
}`;

if (css.includes(targetBgBlock)) {
  css = css.replace(targetBgBlock, replacementBgBlock);
  console.log('Updated dark page backgrounds rule in input.css');
} else {
  console.error('targetBgBlock not found in input.css');
}

fs.writeFileSync('assets/css/input.css', css, 'utf8');

// 2. Update home-2.html Section 5 Rental Inclusions card
let html = fs.readFileSync('home-2.html', 'utf8');
const oldCardRegex = /<div class="lg:col-span-4 dark-card-lock bg-\[#0e181f\] border border-\[#233D4C\] p-6 rounded-2xl space-y-3 shadow-lg">[\s\S]*?<\/div>/;

const newCard = `<div class="lg:col-span-4 dark-card-lock bg-[#0e181f] border border-[#233D4C] p-6 rounded-2xl space-y-3 shadow-xl" style="background-color: #0e181f !important; border-color: #233D4C !important;">
            <h3 class="text-sm font-bold uppercase tracking-wider text-[#FD802E]" style="color: #FD802E !important;">Rental Inclusions</h3>
            <ul class="space-y-2 text-xs text-white/90" style="color: #ffffff !important;">
              <li class="flex items-center gap-2" style="color: #ffffff !important;"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0" style="color: #FD802E !important;">✓</span> Free replacement within 4 hours</li>
              <li class="flex items-center gap-2" style="color: #ffffff !important;"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0" style="color: #FD802E !important;">✓</span> Pre-loaded Ubuntu / Windows / macOS</li>
              <li class="flex items-center gap-2" style="color: #ffffff !important;"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0" style="color: #FD802E !important;">✓</span> No security deposit for GST registered entities</li>
              <li class="flex items-center gap-2" style="color: #ffffff !important;"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0" style="color: #FD802E !important;">✓</span> Dedicated IT maintenance engineer support</li>
            </ul>
          </div>`;

if (oldCardRegex.test(html)) {
  html = html.replace(oldCardRegex, newCard);
  fs.writeFileSync('home-2.html', html, 'utf8');
  console.log('Updated Rental Inclusions card in home-2.html');
} else {
  console.error('oldCardRegex not found in home-2.html');
}
