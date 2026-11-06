const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace raw ✓ inside sticky section with orange styled checkmark
html = html.replace(/(?<!<span[^>]*text-\[#FD802E\][^>]*>\s*)✓/g, '<span class="text-[#FD802E] font-bold mr-1 shrink-0">✓</span>');

fs.writeFileSync('index.html', html);
console.log('Fixed ticks in index.html');
