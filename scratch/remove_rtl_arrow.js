const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Replace desktop RTL button
  // Target: button with rtl-toggle-btn ... containing SVG and span.dir-badge
  const desktopTarget = /<button type="button" class="rtl-toggle-btn h-9 xl:h-10 px-2\.5 xl:px-3 rounded-xl text-\[11px\] xl:text-xs font-bold border border-\[#233D4C\] bg-\[#172731\] text-\[#9fb3be\] hover:text-\[#FD802E\] hover:border-\[#FD802E\] transition-all hidden lg:inline-flex items-center justify-center gap-1\.5 shrink-0" title="Toggle RTL \/ LTR" aria-label="Toggle Text Direction">\s*<svg class="w-4 h-4 text-\[#FD802E\]"[^>]*>[\s\S]*?<\/svg>\s*<span class="dir-badge text-\[11px\] tracking-wider">RTL<\/span>\s*<\/button>/g;

  const desktopReplacement = `<button type="button" class="rtl-toggle-btn h-9 xl:h-10 px-3 xl:px-3.5 rounded-xl text-[11px] xl:text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all hidden lg:inline-flex items-center justify-center shrink-0" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <span class="dir-badge text-[11px] xl:text-xs tracking-wider">RTL</span>
        </button>`;

  content = content.replace(desktopTarget, desktopReplacement);

  // 2. Replace mobile RTL button
  const mobileTarget = /<button type="button" class="rtl-toggle-btn h-11 px-3 rounded-xl text-xs font-bold border border-\[#233D4C\] bg-\[#172731\] text-\[#9fb3be\] hover:text-\[#FD802E\] hover:border-\[#FD802E\] transition-all inline-flex items-center justify-center gap-2" title="Toggle RTL \/ LTR" aria-label="Toggle Text Direction">\s*<svg class="w-4 h-4 text-\[#FD802E\]"[^>]*>[\s\S]*?<\/svg>\s*<span class="dir-badge text-xs tracking-wider">RTL<\/span>\s*<\/button>/g;

  const mobileReplacement = `<button type="button" class="rtl-toggle-btn h-11 px-3 rounded-xl text-xs font-bold border border-[#233D4C] bg-[#172731] text-[#9fb3be] hover:text-[#FD802E] hover:border-[#FD802E] transition-all inline-flex items-center justify-center shrink-0" title="Toggle RTL / LTR" aria-label="Toggle Text Direction">
          <span class="dir-badge text-xs tracking-wider">RTL</span>
        </button>`;

  content = content.replace(mobileTarget, mobileReplacement);

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
    console.log(`Updated: ${f}`);
  }
});

console.log(`Finished updating ${count} files.`);
