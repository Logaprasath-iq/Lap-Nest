const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let totalButtonFixes = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace hover:bg-[#e5b232] with hover:bg-[#ff9248]
  content = content.replace(/hover:bg-\[#e5b232\]/g, 'hover:bg-[#ff9248]');

  // Replace text-[#0e181f] on buttons that have bg-[#FD802E]
  // Pattern: class="... bg-[#FD802E] ... text-[#0e181f] ..." or text-[#0e181f] ... bg-[#FD802E]
  content = content.replace(/(class=\"[^\"]*bg-\[#FD802E\][^\"]*)text-\[#0e181f\]([^\"]*\")/g, '$1text-white$2');
  content = content.replace(/(class=\"[^\"]*)text-\[#0e181f\]([^\"]*bg-\[#FD802E\][^\"]*\")/g, '$1text-white$2');

  // Replace any remaining #d29f22 in html files
  content = content.replace(/#d29f22/g, '#FD802E');
  content = content.replace(/#e5b232/g, '#ff9248');

  // Replace shadow-gold-sm / shadow-gold-md / shadow-gold-lg with shadow-lg shadow-[#FD802E]/25
  content = content.replace(/shadow-gold-sm/g, 'shadow-md shadow-[#FD802E]/25');
  content = content.replace(/shadow-gold-md/g, 'shadow-lg shadow-[#FD802E]/25');
  content = content.replace(/shadow-gold-lg/g, 'shadow-xl shadow-[#FD802E]/30');

  if (content !== original) {
    fs.writeFileSync(file, content);
    totalButtonFixes++;
    console.log(`Updated buttons & colors in ${file}`);
  }
});

console.log(`Total HTML files updated: ${totalButtonFixes}`);
