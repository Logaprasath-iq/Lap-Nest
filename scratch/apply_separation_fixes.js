const fs = require('fs');
const path = require('path');

console.log('=== APPLYING CARD SEPARATION LINE FIXES ===\n');

// 1. Update blog.html
let blogHtml = fs.readFileSync('blog.html', 'utf8');
const targetBlogP = '<p class="text-xs text-[#9fb3be] min-h-[3.75rem] max-h-[3.75rem] line-clamp-3 leading-relaxed">';
const replaceBlogP = '<p class="text-xs text-[#9fb3be] min-h-[3.75rem] max-h-[3.75rem] line-clamp-3 leading-relaxed mb-5">';

let blogCount = 0;
while (blogHtml.includes(targetBlogP)) {
  blogHtml = blogHtml.replace(targetBlogP, replaceBlogP);
  blogCount++;
}
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log(`Updated ${blogCount} card descriptions in blog.html (added mb-5).`);

// 2. Update repair-upgrade.html
let repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');

repairHtml = repairHtml.replace(
  '<div class="p-6 equal-card-body">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Display & Screen Panel</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed equal-card-body">FHD, 144Hz IPS, 4K OLED, and MacBook Retina displays replaced with factory-calibrated color accuracy.</p>\n              <div class="equal-card-footer flex justify-between items-center pt-4 border-t border-[#233D4C]">',
  '<div class="p-6 equal-card-body flex flex-col flex-1">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Display & Screen Panel</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed mb-5">FHD, 144Hz IPS, 4K OLED, and MacBook Retina displays replaced with factory-calibrated color accuracy.</p>\n              <div class="equal-card-footer mt-auto flex justify-between items-center pt-4 border-t border-[#233D4C]">'
);

repairHtml = repairHtml.replace(
  '<div class="p-6 equal-card-body">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Battery Health & Power Rails</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed equal-card-body">Grade-A certified replacement batteries, charging IC troubleshooting, and Type-C PD port resoldering.</p>\n              <div class="equal-card-footer flex justify-between items-center pt-4 border-t border-[#233D4C]">',
  '<div class="p-6 equal-card-body flex flex-col flex-1">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Battery Health & Power Rails</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed mb-5">Grade-A certified replacement batteries, charging IC troubleshooting, and Type-C PD port resoldering.</p>\n              <div class="equal-card-footer mt-auto flex justify-between items-center pt-4 border-t border-[#233D4C]">'
);

repairHtml = repairHtml.replace(
  '<div class="p-6 equal-card-body">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Motherboard Chip-Level Repair</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed equal-card-body">Short-circuit tracking, blown MOSFET replacement, liquid corrosion ultrasonic cleaning, and BIOS re-programming.</p>\n              <div class="equal-card-footer flex justify-between items-center pt-4 border-t border-[#233D4C]">',
  '<div class="p-6 equal-card-body flex flex-col flex-1">\n              <h3 class="text-lg font-bold text-white group-hover:text-[#FD802E] transition-colors mb-2">Motherboard Chip-Level Repair</h3>\n              <p class="text-xs text-[#9fb3be] leading-relaxed mb-5">Short-circuit tracking, blown MOSFET replacement, liquid corrosion ultrasonic cleaning, and BIOS re-programming.</p>\n              <div class="equal-card-footer mt-auto flex justify-between items-center pt-4 border-t border-[#233D4C]">'
);

fs.writeFileSync('repair-upgrade.html', repairHtml, 'utf8');
console.log('Updated 3 service cards in repair-upgrade.html (added mb-5 & mt-auto).');

// 3. Update home-2.html
let home2Html = fs.readFileSync('home-2.html', 'utf8');

home2Html = home2Html.replace(
  '<p class="text-xs text-[#9fb3be] mt-1 min-h-[2.5rem] flex items-center">Core i5 8th Gen • 16GB Dual Channel • 256GB SSD</p>',
  '<p class="text-xs text-[#9fb3be] mt-1 mb-5 min-h-[2.5rem] flex items-center">Core i5 8th Gen • 16GB Dual Channel • 256GB SSD</p>'
);

home2Html = home2Html.replace(
  '<p class="text-xs text-[#9fb3be] mt-1 min-h-[2.5rem] flex items-center">Core i5 11th Gen • 16GB RAM • 512GB NVMe SSD</p>',
  '<p class="text-xs text-[#9fb3be] mt-1 mb-5 min-h-[2.5rem] flex items-center">Core i5 11th Gen • 16GB RAM • 512GB NVMe SSD</p>'
);

home2Html = home2Html.replace(
  '<p class="text-xs text-[#9fb3be] mt-1 min-h-[2.5rem] flex items-center">Core i7 10th Gen • 16GB RAM • 512GB NVMe SSD</p>',
  '<p class="text-xs text-[#9fb3be] mt-1 mb-5 min-h-[2.5rem] flex items-center">Core i7 10th Gen • 16GB RAM • 512GB NVMe SSD</p>'
);

fs.writeFileSync('home-2.html', home2Html, 'utf8');
console.log('Updated 3 refurbished cards in home-2.html (added mb-5).');

// 4. Update blog-details.html
let blogDetailsHtml = fs.readFileSync('blog-details.html', 'utf8');

blogDetailsHtml = blogDetailsHtml.replace(
  '<h2 id="sec-1" class="text-xl font-bold text-white text-base sm:text-xl pt-4 border-t border-[#233D4C]">',
  '<h2 id="sec-1" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">'
);

blogDetailsHtml = blogDetailsHtml.replace(
  '<h2 id="sec-2" class="text-xl font-bold text-white text-base sm:text-xl pt-4 border-t border-[#233D4C]">',
  '<h2 id="sec-2" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">'
);

blogDetailsHtml = blogDetailsHtml.replace(
  '<h2 id="sec-3" class="text-xl font-bold text-white text-base sm:text-xl pt-4 border-t border-[#233D4C]">',
  '<h2 id="sec-3" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">'
);

blogDetailsHtml = blogDetailsHtml.replace(
  '<div class="pt-8 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">',
  '<div class="mt-8 pt-8 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">'
);

fs.writeFileSync('blog-details.html', blogDetailsHtml, 'utf8');
console.log('Updated section headers & social bar in blog-details.html (added mt-8 pt-6).');

// 5. Update assets/js/blog-details.js
let blogDetailsJs = fs.readFileSync('assets/js/blog-details.js', 'utf8');

blogDetailsJs = blogDetailsJs.replace(
  '<h2 id="${sec.id}" class="text-xl font-bold text-white text-base sm:text-xl pt-4 border-t border-[#233D4C]">',
  '<h2 id="${sec.id}" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">'
);

blogDetailsJs = blogDetailsJs.replace(
  '<div class="pt-8 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">',
  '<div class="mt-8 pt-8 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">'
);

fs.writeFileSync('assets/js/blog-details.js', blogDetailsJs, 'utf8');
console.log('Updated dynamic article headings & social bar in assets/js/blog-details.js.');

console.log('\nAll HTML & JS updates applied successfully!');
