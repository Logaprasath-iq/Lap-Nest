const fs = require('fs');

// 1. Update assets/css/input.css
let css = fs.readFileSync('assets/css/input.css', 'utf8');

// Replace line 313-325: Base Light Mode Text Color for All General text-white Elements
const oldWhiteBlock = `/* Base Light Mode Text Color for All General text-white Elements */
html.light .text-white:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/90:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/80:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/70:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/90:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/80:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/70:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light-theme .text-white:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]),
.light-theme .text-white:not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]) {
  color: #111e26 !important;
}`;

const newWhiteBlock = `/* Base Light Mode Text Color for All General text-white Elements */
html.light .text-white:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/90:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/80:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light .text-white\\/70:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/90:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/80:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
.light .text-white\\/70:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]):not([class*="bg-[#0e181f]/90"] *),
html.light-theme .text-white:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]),
.light-theme .text-white:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.image-overlay-dark-lock):not(.dark-badge-lock *):not(.dark-badge-lock):not([class*="bg-black"] *):not([class*="bg-black"]) {
  color: #111e26 !important;
}`;

if (!css.includes(oldWhiteBlock)) {
  console.error('Could not find oldWhiteBlock in input.css');
} else {
  css = css.replace(oldWhiteBlock, newWhiteBlock);
  console.log('Replaced oldWhiteBlock successfully');
}

// Replace Headings in Light Mode (exclude text-[#FD802E] and dark-card-lock *)
const oldHeadingsBlock = `/* Headings in Light Mode */
html.light h1:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
html.light h2:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
html.light h3:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
html.light h4:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
html.light h5:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
html.light h6:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h1:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h2:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h3:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h4:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h5:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *),
.light h6:not(footer *):not(.footer-dark-lock *):not(.image-overlay-dark-lock *) {
  color: #0f172a !important;
}`;

const newHeadingsBlock = `/* Headings in Light Mode */
html.light h1:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
html.light h2:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
html.light h3:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
html.light h4:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
html.light h5:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
html.light h6:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h1:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h2:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h3:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h4:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h5:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]),
.light h6:not(footer *):not(.footer-dark-lock *):not(.dark-card-lock *):not(.image-overlay-dark-lock *):not(.text-\\[\\#FD802E\\]) {
  color: #0f172a !important;
}

/* Headings with explicit brand orange class */
html.light h1.text-\\[\\#FD802E\\],
html.light h2.text-\\[\\#FD802E\\],
html.light h3.text-\\[\\#FD802E\\],
html.light h4.text-\\[\\#FD802E\\],
html.light h5.text-\\[\\#FD802E\\],
html.light h6.text-\\[\\#FD802E\\],
.light h1.text-\\[\\#FD802E\\],
.light h2.text-\\[\\#FD802E\\],
.light h3.text-\\[\\#FD802E\\],
.light h4.text-\\[\\#FD802E\\],
.light h5.text-\\[\\#FD802E\\],
.light h6.text-\\[\\#FD802E\\] {
  color: #FD802E !important;
}`;

if (!css.includes(oldHeadingsBlock)) {
  console.error('Could not find oldHeadingsBlock in input.css');
} else {
  css = css.replace(oldHeadingsBlock, newHeadingsBlock);
  console.log('Replaced oldHeadingsBlock successfully');
}

// Replace Footer Light Mode text styling
const oldFooterTextBlock = `html.light footer h1,
html.light footer h2,
html.light footer h3,
html.light footer h4,
html.light footer h5,
html.light footer h6,
html.light footer .text-white,
.light footer h1,
.light footer h2,
.light footer h3,
.light footer h4,
.light footer h5,
.light footer h6,
.light footer .text-white {
  color: #ffffff !important;
}

html.light footer p,
html.light footer li,
html.light footer span:not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
.light footer p,
.light footer li,
.light footer span:not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]) {
  color: #9fb3be !important;
}`;

const newFooterTextBlock = `html.light footer h1,
html.light footer h2,
html.light footer h3,
html.light footer h4,
html.light footer h5,
html.light footer h6,
html.light footer .text-white,
html.light footer p.text-white,
html.light footer span.text-white,
html.light footer strong.text-white,
html.light .footer-dark-lock h1,
html.light .footer-dark-lock h2,
html.light .footer-dark-lock h3,
html.light .footer-dark-lock h4,
html.light .footer-dark-lock h5,
html.light .footer-dark-lock h6,
html.light .footer-dark-lock .text-white,
html.light .footer-dark-lock p.text-white,
html.light .footer-dark-lock span.text-white,
html.light .footer-dark-lock strong.text-white,
.light footer h1,
.light footer h2,
.light footer h3,
.light footer h4,
.light footer h5,
.light footer h6,
.light footer .text-white,
.light footer p.text-white,
.light footer span.text-white,
.light footer strong.text-white,
.light .footer-dark-lock h1,
.light .footer-dark-lock h2,
.light .footer-dark-lock h3,
.light .footer-dark-lock h4,
.light .footer-dark-lock h5,
.light .footer-dark-lock h6,
.light .footer-dark-lock .text-white,
.light .footer-dark-lock p.text-white,
.light .footer-dark-lock span.text-white,
.light .footer-dark-lock strong.text-white {
  color: #ffffff !important;
}

html.light footer p:not(.text-white):not(.text-\\[\\#FD802E\\]),
html.light footer li:not(.text-white):not(.text-\\[\\#FD802E\\]),
html.light footer span:not(.text-white):not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
html.light .footer-dark-lock p:not(.text-white):not(.text-\\[\\#FD802E\\]),
html.light .footer-dark-lock li:not(.text-white):not(.text-\\[\\#FD802E\\]),
html.light .footer-dark-lock span:not(.text-white):not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
.light footer p:not(.text-white):not(.text-\\[\\#FD802E\\]),
.light footer li:not(.text-white):not(.text-\\[\\#FD802E\\]),
.light footer span:not(.text-white):not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
.light .footer-dark-lock p:not(.text-white):not(.text-\\[\\#FD802E\\]),
.light .footer-dark-lock li:not(.text-white):not(.text-\\[\\#FD802E\\]),
.light .footer-dark-lock span:not(.text-white):not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]) {
  color: #9fb3be !important;
}`;

if (!css.includes(oldFooterTextBlock)) {
  console.error('Could not find oldFooterTextBlock in input.css');
} else {
  css = css.replace(oldFooterTextBlock, newFooterTextBlock);
  console.log('Replaced oldFooterTextBlock successfully');
}

// Append .dark-card-lock styles
const darkCardLockCss = `
/* ==========================================================================
   DARK CARD LOCK (FOR INSET CONTRAST CARDS LIKE RENTAL INCLUSIONS)
   ========================================================================== */
html.light .dark-card-lock,
.light .dark-card-lock {
  background-color: #0e181f !important;
  border-color: #233D4C !important;
}

html.light .dark-card-lock h1,
html.light .dark-card-lock h2,
html.light .dark-card-lock h4,
html.light .dark-card-lock h5,
html.light .dark-card-lock h6,
html.light .dark-card-lock p,
html.light .dark-card-lock li,
html.light .dark-card-lock ul,
html.light .dark-card-lock span:not(.text-\\[\\#FD802E\\]),
.light .dark-card-lock h1,
.light .dark-card-lock h2,
.light .dark-card-lock h4,
.light .dark-card-lock h5,
.light .dark-card-lock h6,
.light .dark-card-lock p,
.light .dark-card-lock li,
.light .dark-card-lock ul,
.light .dark-card-lock span:not(.text-\\[\\#FD802E\\]) {
  color: #ffffff !important;
}

html.light .dark-card-lock h3,
html.light .dark-card-lock .text-\\[\\#FD802E\\],
.light .dark-card-lock h3,
.light .dark-card-lock .text-\\[\\#FD802E\\] {
  color: #FD802E !important;
}
`;

css += darkCardLockCss;
fs.writeFileSync('assets/css/input.css', css, 'utf8');
console.log('Saved assets/css/input.css successfully');

// 2. Update home-2.html Section 5 Rental Inclusions card
let html = fs.readFileSync('home-2.html', 'utf8');
const oldRentalCard = `<div class="lg:col-span-4 bg-[#0e181f]/80 border border-[#233D4C] p-6 rounded-2xl space-y-3">
            <h3 class="text-sm font-bold text-white uppercase tracking-wider text-[#FD802E]">Rental Inclusions</h3>
            <ul class="space-y-2 text-xs text-[#9fb3be]">
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Free replacement within 4 hours</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Pre-loaded Ubuntu / Windows / macOS</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> No security deposit for GST registered entities</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Dedicated IT maintenance engineer support</li>
            </ul>
          </div>`;

const newRentalCard = `<div class="lg:col-span-4 dark-card-lock bg-[#0e181f] border border-[#233D4C] p-6 rounded-2xl space-y-3 shadow-lg">
            <h3 class="text-sm font-bold uppercase tracking-wider text-[#FD802E]">Rental Inclusions</h3>
            <ul class="space-y-2 text-xs text-white/90">
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Free replacement within 4 hours</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Pre-loaded Ubuntu / Windows / macOS</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> No security deposit for GST registered entities</li>
              <li class="flex items-center gap-2"><span class="text-[#FD802E] font-bold mr-1.5 shrink-0">✓</span> Dedicated IT maintenance engineer support</li>
            </ul>
          </div>`;

if (!html.includes(oldRentalCard)) {
  console.error('Could not find oldRentalCard in home-2.html');
} else {
  html = html.replace(oldRentalCard, newRentalCard);
  fs.writeFileSync('home-2.html', html, 'utf8');
  console.log('Saved home-2.html successfully');
}
