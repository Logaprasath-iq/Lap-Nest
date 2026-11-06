const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const bsMatch = html.match(/<section id="best-sellers"[\s\S]*?<\/section>/);
if (bsMatch) {
  const cards = bsMatch[0].match(/<article[\s\S]*?<\/article>/g) || [];
  console.log(`Best seller cards: ${cards.length}`);
  cards.forEach((c, i) => {
    const titleMatch = c.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : 'No title';
    console.log(`Card ${i+1}: ${title}`);
  });
}
