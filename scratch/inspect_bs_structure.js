const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const bsMatch = html.match(/<section id="best-sellers"[\s\S]*?<\/section>/);
if (bsMatch) {
  const cards = bsMatch[0].match(/<!-- Product \d+:[^>]*-->[\s\S]*?(?=<!-- Product \d+:|<\/div>\s*<\/div>\s*<\/section>)/g) || [];
  console.log(`Found ${cards.length} best seller cards`);
  cards.forEach((c, i) => {
    const titleMatch = c.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const specMatch = c.match(/<p class="text-xs text-\[#9fb3be\][^"]*"[^>]*>([\s\S]*?)<\/p>/);
    const priceMatch = c.match(/<span class="text-2xl font-black text-white">([\s\S]*?)<\/span>/);
    console.log(`Card ${i+1}:`);
    console.log(`  Title: ${titleMatch ? titleMatch[1].trim() : 'N/A'}`);
    console.log(`  Specs: ${specMatch ? specMatch[1].trim() : 'N/A'}`);
    console.log(`  Price: ${priceMatch ? priceMatch[1].trim() : 'N/A'}`);
  });
}
