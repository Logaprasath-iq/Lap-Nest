const fs = require('fs');
const content = fs.readFileSync('contact.html', 'utf8');

const regex = /<([a-z0-9]+)[^>]*class="([^"]*)"[^>]*>/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  const tag = match[1];
  const cls = match[2];
  if (cls.includes('min-w') || cls.includes('w-[') || cls.includes('aspect') || cls.includes('overflow-x') || cls.includes('iframe')) {
    console.log(`<${tag} class="${cls}">`);
  }
}
