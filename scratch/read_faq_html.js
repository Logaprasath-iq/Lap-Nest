const fs = require('fs');

const faqHtml = fs.readFileSync('faq.html', 'utf8');
const lines = faqHtml.split('\n');
console.log('--- FAQ.HTML PREVIEW ---');
lines.forEach((l, idx) => {
  if (l.includes('faq-') || l.includes('FAQ') || l.includes('accordion') || l.includes('<details') || l.includes('question')) {
    if (idx < 250) console.log(`${idx}: ${l.trim()}`);
  }
});
