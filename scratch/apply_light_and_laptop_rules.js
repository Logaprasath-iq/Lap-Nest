const fs = require('fs');

let css = fs.readFileSync('assets/css/input.css', 'utf8');

const newRules = `
/* ==========================================================================
   CREATIVE 3D ROTATING LAPTOP ANIMATIONS (BENCH 1 & 2)
   ========================================================================== */
@keyframes creativeLaptopOrbit1 {
  0% {
    transform: perspective(1000px) rotateY(-18deg) rotateX(10deg) translateY(0px) rotateZ(-2deg);
  }
  25% {
    transform: perspective(1000px) rotateY(-3deg) rotateX(15deg) translateY(-8px) rotateZ(1deg);
  }
  50% {
    transform: perspective(1000px) rotateY(16deg) rotateX(10deg) translateY(0px) rotateZ(2deg);
  }
  75% {
    transform: perspective(1000px) rotateY(-2deg) rotateX(5deg) translateY(8px) rotateZ(-1deg);
  }
  100% {
    transform: perspective(1000px) rotateY(-18deg) rotateX(10deg) translateY(0px) rotateZ(-2deg);
  }
}

@keyframes creativeLaptopOrbit2 {
  0% {
    transform: perspective(1000px) rotateY(16deg) rotateX(10deg) translateY(0px) rotateZ(2deg);
  }
  25% {
    transform: perspective(1000px) rotateY(2deg) rotateX(14deg) translateY(8px) rotateZ(-1deg);
  }
  50% {
    transform: perspective(1000px) rotateY(-18deg) rotateX(8deg) translateY(0px) rotateZ(-2deg);
  }
  75% {
    transform: perspective(1000px) rotateY(-2deg) rotateX(12deg) translateY(-8px) rotateZ(1deg);
  }
  100% {
    transform: perspective(1000px) rotateY(16deg) rotateX(10deg) translateY(0px) rotateZ(2deg);
  }
}

.animate-laptop-creative-1 {
  animation: creativeLaptopOrbit1 9s ease-in-out infinite;
  transform-style: preserve-3d;
  will-change: transform;
}

.animate-laptop-creative-2 {
  animation: creativeLaptopOrbit2 10s ease-in-out infinite;
  transform-style: preserve-3d;
  will-change: transform;
}

/* ==========================================================================
   LIGHT MODE FIXES: PRODUCT CARDS, FOOTER DARK LOCK & NEWSLETTER CTA
   ========================================================================== */
/* 1. Footers across the website STAY DARK ONLY in both light & dark mode */
html.light footer,
.light footer,
html.light .footer-dark-lock,
.light .footer-dark-lock {
  background-color: #0e181f !important;
  color: #ffffff !important;
  border-top: 1px solid #233D4C !important;
}

html.light footer *,
.light footer * {
  border-color: #233D4C !important;
}

html.light footer h2,
html.light footer h3,
html.light footer h4,
html.light footer h5,
.light footer h2,
.light footer h3,
.light footer h4,
.light footer h5,
html.light footer .text-white,
.light footer .text-white {
  color: #ffffff !important;
}

html.light footer p,
html.light footer span:not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
html.light footer li,
.light footer p,
.light footer span:not(.text-\\[\\#FD802E\\]):not(.bg-\\[\\#FD802E\\]),
.light footer li {
  color: #9fb3be !important;
}

html.light footer a:not(.bg-\\[\\#FD802E\\]),
.light footer a:not(.bg-\\[\\#FD802E\\]) {
  color: #9fb3be !important;
}

html.light footer a:hover,
.light footer a:hover {
  color: #FD802E !important;
}

html.light footer .bg-\\[\\#172731\\],
.light footer .bg-\\[\\#172731\\] {
  background-color: #172731 !important;
  color: #ffffff !important;
}

/* 2. Newsletter CTA Box Dark Lock */
html.light #newsletter-cta-section,
.light #newsletter-cta-section,
html.light .newsletter-dark-box,
.light .newsletter-dark-box {
  background-color: #0e181f !important;
  color: #ffffff !important;
  border-color: #233D4C !important;
}

html.light #newsletter-cta-section h2,
.light #newsletter-cta-section h2,
html.light .newsletter-dark-box h2,
.light .newsletter-dark-box h2,
html.light #newsletter-cta-section .text-white,
.light #newsletter-cta-section .text-white {
  color: #ffffff !important;
}

html.light #newsletter-cta-section p,
.light #newsletter-cta-section p,
html.light .newsletter-dark-box p,
.light .newsletter-dark-box p {
  color: #9fb3be !important;
}

/* 3. Product Cards in Light Mode (Crisp high-contrast spec boxes & text) */
html.light .bg-\\[\\#0e181f\\]\\/60,
.light .bg-\\[\\#0e181f\\]\\/60,
html.light .product-spec-pill,
.light .product-spec-pill {
  background-color: #f1f5f9 !important;
  border-color: #cbd5e1 !important;
  color: #475569 !important;
}

html.light .bg-\\[\\#0e181f\\]\\/60 span.text-white,
.light .bg-\\[\\#0e181f\\]\\/60 span.text-white,
html.light .bg-\\[\\#0e181f\\]\\/60 .font-bold,
.light .bg-\\[\\#0e181f\\]\\/60 .font-bold,
html.light .bg-\\[\\#0e181f\\]\\/60 .font-semibold,
.light .bg-\\[\\#0e181f\\]\\/60 .font-semibold {
  color: #0f172a !important;
}

/* 4. Orange buttons always maintain bright white text in both modes */
html.light .bg-\\[\\#FD802E\\],
.light .bg-\\[\\#FD802E\\],
html.light a.bg-\\[\\#FD802E\\],
.light a.bg-\\[\\#FD802E\\],
html.light button.bg-\\[\\#FD802E\\],
.light button.bg-\\[\\#FD802E\\] {
  background-color: #FD802E !important;
  color: #ffffff !important;
}

html.light .bg-\\[\\#FD802E\\] *,
.light .bg-\\[\\#FD802E\\] * {
  color: #ffffff !important;
}

@media (prefers-reduced-motion: reduce) {
  .animate-laptop-creative-1,
  .animate-laptop-creative-2 {
    animation: none !important;
  }
}
`;

css += newRules;
fs.writeFileSync('assets/css/input.css', css, 'utf8');
console.log('Successfully appended creative laptop animations & light mode dark footer rules to input.css');
