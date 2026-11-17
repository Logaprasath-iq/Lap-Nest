const fs = require('fs');

// 1. Update assets/css/input.css
let css = fs.readFileSync('assets/css/input.css', 'utf8');

const oldBtnBlock = `html.light a.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
html.light button.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *),
html.light a.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
html.light button.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *),
html.light .equal-card-footer a:not(.category-explore-btn):not(.bg-\\[\\#FD802E\\]),
.light a.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
.light button.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *),
.light a.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
.light button.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *),
.light .equal-card-footer a:not(.category-explore-btn):not(.bg-\\[\\#FD802E\\]) {
  background-color: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04) !important;
}`;

const newBtnBlock = `html.light a.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
html.light button.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *),
html.light a.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
html.light button.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *),
html.light .equal-card-footer a:not(.category-explore-btn):not(.bg-\\[\\#FD802E\\]),
.light a.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
.light button.bg-\\[\\#172731\\]:not(footer *):not(.footer-dark-lock *),
.light a.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *):not(.category-explore-btn),
.light button.bg-\\[\\#233D4C\\]:not(footer *):not(.footer-dark-lock *),
.light .equal-card-footer a:not(.category-explore-btn):not(.bg-\\[\\#FD802E\\]) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.4rem !important;
  padding: 0.375rem 0.875rem !important;
  border-radius: 0.75rem !important;
  background-color: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  font-weight: 700 !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04) !important;
  text-decoration: none !important;
  transition: all 0.2s ease-in-out !important;
}`;

if (css.includes(oldBtnBlock)) {
  css = css.replace(oldBtnBlock, newBtnBlock);
  console.log('Updated secondary CTA button rules in input.css');
} else {
  console.error('oldBtnBlock not found in input.css');
}

fs.writeFileSync('assets/css/input.css', css, 'utf8');

// 2. Update repair-upgrade.html Service Details links
let repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');
const oldRepairLink = '<a href="service-details.html?service=screen" class="text-xs font-bold text-white hover:text-[#FD802E]">Service Details →</a>';
const newRepairLink = '<a href="service-details.html?service=screen" class="px-3.5 py-1.5 rounded-xl border border-[#233D4C] bg-[#111e26] text-xs font-bold text-white hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center gap-1.5">Service Details →</a>';

repairHtml = repairHtml.replaceAll('class="text-xs font-bold text-white hover:text-[#FD802E]">Service Details →</a>', 'class="px-3.5 py-1.5 rounded-xl border border-[#233D4C] bg-[#111e26] text-xs font-bold text-white hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center gap-1.5">Service Details →</a>');
fs.writeFileSync('repair-upgrade.html', repairHtml, 'utf8');
console.log('Updated repair-upgrade.html Service Details links');

// 3. Update blog.html Read Guide links
let blogHtml = fs.readFileSync('blog.html', 'utf8');
blogHtml = blogHtml.replaceAll(
  'class="text-xs font-bold text-[#FD802E] hover:underline flex items-center gap-1 group/btn"',
  'class="px-3.5 py-1.5 rounded-xl border border-[#233D4C] bg-[#111e26] text-xs font-bold text-[#FD802E] hover:border-[#FD802E] hover:bg-[#FD802E]/10 transition-all inline-flex items-center gap-1.5 group/btn"'
);
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html Read Guide links');

// 4. Update index.html Learn More links
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replaceAll(
  'class="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors"',
  'class="px-3.5 py-1.5 rounded-xl border border-[#233D4C] bg-[#111e26] text-xs font-bold text-white hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center gap-1.5"'
);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html Learn More links');
