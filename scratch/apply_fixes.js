const fs = require('fs');
const path = require('path');

const rootFiles = [
  'index.html',
  'home-2.html',
  'about.html',
  'products.html',
  'product-details.html',
  'pricing.html',
  'repair-upgrade.html',
  'service-details.html',
  'order.html',
  'blog.html',
  'blog-details.html',
  'contact.html',
  'faq.html',
  'privacy-policy.html',
  'terms.html',
  '404.html',
  'coming-soon.html',
  'maintenance.html'
];

// Authentic WhatsApp SVG with handset + speech bubble
const authenticWhatsAppSvg = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.31 19.8 8.12 19.1L7.84 18.93L4.72 19.75L5.55 16.71L5.36 16.41C4.6 15.2 4.19 13.58 4.19 11.91C4.19 7.37 7.89 3.67 12.04 3.67ZM8.73 7.39C8.52 7.39 8.18 7.47 7.89 7.78C7.6 8.09 6.78 8.86 6.78 10.42C6.78 11.98 7.92 13.48 8.08 13.69C8.24 13.9 10.3 17.07 13.46 18.43C16.08 19.56 16.62 19.33 17.19 19.28C17.76 19.23 19.01 18.54 19.27 17.81C19.53 17.08 19.53 16.46 19.45 16.33C19.37 16.2 19.16 16.12 18.85 15.97C18.54 15.82 17.01 15.06 16.73 14.96C16.45 14.86 16.24 14.81 16.03 15.12C15.82 15.43 15.23 16.12 15.05 16.33C14.87 16.54 14.69 16.56 14.38 16.41C14.07 16.26 13.07 15.93 11.89 14.87C10.97 14.05 10.35 13.04 10.17 12.73C9.99 12.42 10.15 12.26 10.31 12.11C10.45 11.97 10.62 11.74 10.78 11.56C10.94 11.38 11 11.25 11.1 11.04C11.2 10.83 11.15 10.65 11.07 10.5C10.99 10.35 10.37 8.83 10.11 8.21C9.86 7.6 9.6 7.69 9.42 7.68C9.25 7.67 9.04 7.67 8.83 7.67L8.73 7.39Z"/></svg>`;

// The target home dropdown markup
const newHomeDropdown = `<!-- Home Dropdown -->
        <div class="relative group dropdown-container">
          <button type="button" class="dropdown-btn nav-link-item flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#FD802E] transition-colors focus:outline-none py-2" aria-expanded="false" aria-haspopup="true">
            <span>Home</span>
            <svg class="dropdown-arrow-icon w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#FD802E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="dropdown-menu-wrapper absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 z-50">
            <div class="rounded-xl bg-[#172731] border border-[#233D4C] shadow-2xl p-2">
              <a href="index.html" class="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg text-white hover:bg-[#233D4C] hover:text-[#FD802E] transition-colors">
                <span class="w-2 h-2 rounded-full bg-[#FD802E]"></span>
                Home 1 – Flagship Store
              </a>
              <a href="home-2.html" class="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg text-[#9fb3be] hover:bg-[#233D4C] hover:text-[#FD802E] transition-colors">
                <span class="w-2 h-2 rounded-full bg-[#233D4C]"></span>
                Home 2 – Editorial Tech
              </a>
            </div>
          </div>
        </div>`;

rootFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Replace Home dropdown in desktop nav
  const oldDropdownRegex = /<!--\s*Home Dropdown\s*-->[\s\S]*?<\/div>\s*<\/div>/;
  if (oldDropdownRegex.test(content)) {
    content = content.replace(oldDropdownRegex, newHomeDropdown);
    changed = true;
  }

  // 2. Fix WhatsApp icon in footer
  // Match any hollow whatsapp svg path
  const oldWhatsAppRegex = /<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M\.057 24[\s\S]*?<\/svg>/g;
  if (oldWhatsAppRegex.test(content)) {
    content = content.replace(oldWhatsAppRegex, authenticWhatsAppSvg);
    changed = true;
  }

  // 3. Make header logo h-10 sm:h-12 w-auto
  const headerLogoRegex = /class="brand-logo-img header-logo\s+[^"]*"/g;
  if (headerLogoRegex.test(content)) {
    content = content.replace(headerLogoRegex, 'class="brand-logo-img header-logo h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"');
    changed = true;
  }

  // In files without header-logo class, check generic header logo
  content = content.replace(/class="brand-logo-img\s+h-9\s+sm:h-11\s+w-auto[^"]*"/g, 'class="brand-logo-img header-logo h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"');

  // 4. Make footer logo h-12 sm:h-14 w-auto
  const footerLogoRegex = /<img src="assets\/images\/logo\/logo-dark\.svg" alt="LAPNEST" class="brand-logo-img\s+[^"]*">/g;
  if (footerLogoRegex.test(content)) {
    content = content.replace(footerLogoRegex, '<img src="assets/images/logo/logo-dark.svg" alt="LAPNEST – BUY • SELL • REPAIR • RENT" class="brand-logo-img h-12 sm:h-14 w-auto">');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}: Home dropdown, WhatsApp icon & logo sizing`);
  }
});

console.log('Finished updating navbar dropdowns, logos, and WhatsApp icons.');
