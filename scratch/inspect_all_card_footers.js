const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    // Look for border-t inside cards or near paragraphs/text
    if (line.includes('border-t') && (
      line.includes('card-footer') || 
      line.includes('border-[#233D4C]') || 
      line.includes('border-')
    )) {
      // Print context: previous 3 lines and next 2 lines
      const start = Math.max(0, idx - 4);
      const end = Math.min(lines.length - 1, idx + 3);
      const snippet = lines.slice(start, end + 1).map((l, i) => `    ${start + i + 1}: ${l}`).join('\n');
      
      // Filter out footer.html/site-footer/navbars/headers/sections
      if (!line.includes('site-footer') && !line.includes('<section') && !line.includes('<header') && !line.includes('<nav') && !line.includes('footer-dark-lock') && !line.includes('mobile-menu')) {
        console.log(`\n[${file} L${idx + 1}]:`);
        console.log(snippet);
      }
    }
  });
});
