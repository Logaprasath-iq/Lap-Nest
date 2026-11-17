const fs = require('fs');

const pages = [
  'about.html',
  'blog.html',
  'contact.html',
  'order.html',
  'pricing.html',
  'products.html',
  'repair-upgrade.html'
];

pages.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  const oldDividerRegex = /<div class="absolute bg-\[#0e181f\] px-5 py-1\.5 rounded-full border border-\[#233D4C\] flex items-center gap-2\.5 text-\[11px\] font-mono font-bold tracking-widest text-\[#FD802E\] uppercase shadow-lg shadow-black\/40">([\s\S]*?)<\/div>/;
  
  if (oldDividerRegex.test(content)) {
    content = content.replace(oldDividerRegex, (match, inner) => {
      // update inner dots if needed
      const updatedInner = inner.replace(/w-2 h-2 rounded-full bg-\[#FD802E\] animate-pulse/g, 'w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FD802E] animate-pulse flex-shrink-0');
      return `<div class="absolute bg-[#0e181f] px-6 sm:px-8 py-2 sm:py-2.5 rounded-full border border-[#233D4C] flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono font-bold tracking-wider sm:tracking-widest text-[#FD802E] uppercase shadow-xl shadow-black/40 whitespace-nowrap text-center">${updatedInner}</div>`;
    });
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated divider heading in ${p}`);
  } else {
    console.warn(`Could not find old divider in ${p}`);
  }
});
