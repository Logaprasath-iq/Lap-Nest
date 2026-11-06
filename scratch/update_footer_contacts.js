const fs = require('fs');
const path = require('path');

const oldBlock = `<!-- Column 4: CHENNAI OUTPOST (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CHENNAI OUTPOST</h4>
          <div class="space-y-2 text-xs leading-relaxed text-[#9fb3be]">
            <p class="font-bold text-white">LAPNEST Tech Plaza — Chennai</p>
            <p>42 Rajiv Gandhi Salai (OMR), Sholinganallur</p>
            <p>Chennai, Tamil Nadu 600119, India</p>
            <p class="pt-1.5"><span class="text-white font-medium">Hours:</span> Mon – Sat: 09:30 AM – 08:30 PM</p>
            <p><span class="text-white font-medium">Phone:</span> +91 98400 12345</p>
            <p><span class="text-white font-medium">WhatsApp:</span> +91 98400 12345</p>
            <p><span class="text-white font-medium">Email:</span> <a href="mailto:support@lapnest.in" class="hover:text-[#FD802E]">support@lapnest.in</a></p>
          </div>
        </div>`;

const newBlock = `<!-- Column 4: CHENNAI OUTPOST (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-widest">CHENNAI OUTPOST</h4>
          <div class="space-y-3 text-xs leading-relaxed text-[#9fb3be]">
            <div class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-[#FD802E] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <p class="font-bold text-white">LAPNEST Tech Plaza — Chennai</p>
                <p>42 Rajiv Gandhi Salai (OMR), Sholinganallur</p>
                <p>Chennai, Tamil Nadu 600119, India</p>
              </div>
            </div>
            <div class="flex items-center gap-2.5 pt-0.5">
              <svg class="w-4 h-4 text-[#FD802E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p><span class="text-white font-medium">Hours:</span> Mon – Sat: 09:30 AM – 08:30 PM</p>
            </div>
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-[#FD802E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <p><span class="text-white font-medium">Phone:</span> <a href="tel:+919840012345" class="hover:text-[#FD802E] transition-colors">+91 98400 12345</a></p>
            </div>
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.572 4.183 1.571 5.929l-1.571 5.899 6.052-1.587c1.678.915 3.606 1.442 5.659 1.442 6.627 0 12-5.373 12-12s-5.373-12-12-12z"></path></svg>
              <p><span class="text-white font-medium">WhatsApp:</span> <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" class="hover:text-[#25D366] transition-colors">+91 98400 12345</a></p>
            </div>
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-[#FD802E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <p><span class="text-white font-medium">Email:</span> <a href="mailto:support@lapnest.in" class="hover:text-[#FD802E] transition-colors">support@lapnest.in</a></p>
            </div>
          </div>
        </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes(oldBlock)) {
    const updated = content.replace(oldBlock, newBlock);
    fs.writeFileSync(f, updated, 'utf8');
    count++;
    console.log(`Updated: ${f}`);
  } else {
    console.log(`MISMATCH: ${f}`);
  }
});
console.log(`Done! Updated ${count} of ${files.length} HTML files.`);
