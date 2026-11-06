const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace raw '✓' that is not already inside a span with text-[#FD802E]
  // Match '✓' preceded by whitespace or > and followed by space or letter
  // Examples: <li>✓ text</li>, <li class="...">✓ text</li>, <span>✓</span>
  content = content.replace(/(?<!<span[^>]*class=\"[^\"]*text-\[#FD802E\][^\"]*\">(?:(?!<\/span>).)*?)✓/g, (match, offset) => {
    // Check if immediately preceded by text-[#FD802E]
    const before = content.slice(Math.max(0, offset - 100), offset);
    if (before.includes('text-[#FD802E]') && before.lastIndexOf('<span') > before.lastIndexOf('</span>')) {
      return '✓'; // Already orange
    }
    return '<span class="text-[#FD802E] font-bold">✓</span>';
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated orange ticks in ${file}`);
    totalReplacements++;
  }
});

console.log(`Total files with orange ticks updated: ${totalReplacements}`);
