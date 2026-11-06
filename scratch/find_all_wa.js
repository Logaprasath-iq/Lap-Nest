const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<a[^>]*href="https:\/\/wa\.me[^"]*"[^>]*>[\s\S]*?<\/a>/g);
  if (matches) {
    console.log(f, 'has', matches.length, 'whatsapp links');
    matches.forEach((m, idx) => {
      console.log(`-- ${f} [${idx}]:`, m.substring(0, 200).replace(/\s+/g, ' '));
    });
  }
});
