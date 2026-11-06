const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract the 5 category cards
const catSection = indexHtml.match(/<section id="featured-categories"[\s\S]*?<\/section>/)[0];
const cards = catSection.match(/<!-- Category \d:[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g);

console.log(`Found ${cards ? cards.length : 0} category cards.`);

cards.forEach((card, idx) => {
  const titleMatch = card.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : 'N/A';
  const descMatch = card.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const desc = descMatch ? descMatch[1].trim() : 'N/A';
  const hasMinH = card.includes('min-h-[3.25rem]');
  const hasDescMinH = card.includes('min-h-[3.75rem]');
  const hasMtAuto = card.includes('mt-auto');

  console.log(`\nCard ${idx + 1}: ${title}`);
  console.log(`  Desc: "${desc}" (${desc.length} chars)`);
  console.log(`  Title min-h-3.25rem: ${hasMinH}`);
  console.log(`  Desc min-h-3.75rem: ${hasDescMinH}`);
  console.log(`  Footer mt-auto: ${hasMtAuto}`);
});
