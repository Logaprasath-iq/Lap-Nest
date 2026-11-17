const fs = require('fs');

let html = fs.readFileSync('home-2.html', 'utf8');

const secStart = html.indexOf('<!-- SECTION 2: SHOP BY LAPTOP BRANDS -->');
const secEnd = html.indexOf('<!-- SECTION 3: GAMING & WORKSTATION COLLECTIONS -->');

if (secStart !== -1 && secEnd !== -1) {
  let section = html.substring(secStart, secEnd);
  
  // Replace SVGs in section
  section = section.replaceAll(
    'class="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#FD802E] transition-colors"',
    'class="w-6 h-6 sm:w-7 sm:h-7 text-[#0e181f] dark:text-white group-hover:text-[#FD802E] transition-colors"'
  );
  
  // Replace brand names in section
  section = section.replaceAll(
    'class="brand-name text-lg sm:text-xl font-black text-white group-hover:text-[#FD802E] transition-colors block"',
    'class="brand-name text-lg sm:text-xl font-black text-[#0e181f] dark:text-white group-hover:text-[#FD802E] transition-colors block"'
  );
  
  // Replace subtexts in section
  section = section.replaceAll(
    'class="text-[11px] text-[#9fb3be] mt-1 block"',
    'class="text-[11px] text-[#475569] dark:text-[#9fb3be] mt-1 block"'
  );
  
  html = html.substring(0, secStart) + section + html.substring(secEnd);
  fs.writeFileSync('home-2.html', html, 'utf8');
  console.log('Successfully updated Section 2 in home-2.html');
} else {
  console.error('Section 2 markers not found');
}
