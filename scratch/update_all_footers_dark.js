const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const oldFooter = /<footer class="bg-\[#0e181f\] border-t border-\[#233D4C\]\/60 pt-16 pb-12 text-\[#9fb3be\]">/g;
  const newFooter = '<footer id="site-footer" class="footer-dark-lock bg-[#0e181f] border-t border-[#233D4C]/60 pt-16 pb-12 text-[#9fb3be]" style="background-color: #0e181f !important; color: #9fb3be !important;">';
  
  if (oldFooter.test(content)) {
    content = content.replace(oldFooter, newFooter);
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated footer in: ${file}`);
  } else {
    // Check if it already has site-footer
    if (content.includes('id="site-footer"')) {
      console.log(`Already has site-footer: ${file}`);
    } else {
      console.log(`Pattern not found in: ${file}`);
    }
  }
});

console.log(`Finished updating ${count} files.`);
