const fs = require('fs');

let html = fs.readFileSync('home-2.html', 'utf8');

const secStart = html.indexOf('<!-- SECTION 2: SHOP BY LAPTOP BRANDS -->');
const secEnd = html.indexOf('<!-- SECTION 3: GAMING & WORKSTATION COLLECTIONS -->');

if (secStart !== -1 && secEnd !== -1) {
  let section = html.substring(secStart, secEnd);
  
  // Replace card classes
  section = section.replaceAll(
    'class="brand-portfolio-card p-5 sm:p-6 rounded-2xl bg-[#172731] border border-[#233D4C] hover:border-[#FD802E] text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FD802E]/10 flex flex-col items-center justify-center"',
    'class="brand-portfolio-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#172731] border border-[#e2e8f0] dark:border-[#233D4C] hover:border-[#FD802E] text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FD802E]/10 flex flex-col items-center justify-center"'
  );
  
  // Replace subtexts
  section = section.replaceAll(
    'class="text-[11px] text-[#475569] dark:text-[#9fb3be] mt-1 block"',
    'class="brand-subtext text-[11px] text-[#475569] dark:text-[#9fb3be] mt-1 block"'
  );
  
  html = html.substring(0, secStart) + section + html.substring(secEnd);
  fs.writeFileSync('home-2.html', html, 'utf8');
  console.log('Successfully updated home-2.html brand cards!');
} else {
  console.error('Section 2 markers not found');
}
