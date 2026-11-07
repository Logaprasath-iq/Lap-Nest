const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== AUDITING ALL CARDS ACROSS 18 HTML FILES ===\n');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Check if line contains a horizontal separation border
    if (line.includes('border-t') && (
      line.includes('border-[#233D4C]') || 
      line.includes('border-') || 
      line.includes('card-footer')
    )) {
      // Exclude header/footer/nav
      if (
        !line.includes('site-footer') &&
        !line.includes('<footer') &&
        !line.includes('<section') &&
        !line.includes('<header') &&
        !line.includes('mobile-menu') &&
        !line.includes('space-y-3') &&
        !line.includes('my-6"></div>')
      ) {
        // Look at previous line
        let prevIdx = idx - 1;
        while (prevIdx >= 0 && lines[prevIdx].trim() === '') {
          prevIdx--;
        }
        const prevLine = prevIdx >= 0 ? lines[prevIdx].trim() : '';

        // Check if prevLine is a paragraph or text container without margin-bottom
        const touches = (
          (prevLine.startsWith('<p') || prevLine.endsWith('</p>')) &&
          !prevLine.includes('mb-') &&
          !prevLine.includes('my-')
        ) || (
          (line.includes('pt-') || line.includes('mt-auto')) &&
          !line.includes('mt-') &&
          (prevLine.endsWith('</p>') || prevLine.endsWith('</div>')) &&
          !prevLine.includes('mb-')
        );

        if (touches) {
          console.log(`POTENTIAL TOUCHING LINE in ${file} at L${idx + 1}:`);
          console.log(`  Prev L${prevIdx + 1}: ${prevLine}`);
          console.log(`  Line L${idx + 1}: ${line.trim()}`);
          console.log('---');
        }
      }
    }
  });
});
