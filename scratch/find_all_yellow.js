const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.js'));
const jsFiles = fs.readdirSync('assets/js').map(f => 'assets/js/' + f);
const allFiles = [...files, ...jsFiles];

const yellowPatterns = [/#d29f22/gi, /#e5b232/gi, /text-yellow/gi, /bg-yellow/gi, /border-yellow/gi, /shadow-gold/gi, /from-yellow/gi, /to-yellow/gi];

allFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = [];
    yellowPatterns.forEach(p => {
      const m = content.match(p);
      if (m) matches.push(...m);
    });
    if (matches.length > 0) {
      console.log(`${file}: found ${matches.length} yellow matches`);
    }
  }
});
