const fs = require('fs');

const html = fs.readFileSync('blog.html', 'utf8');

const regex = /<article\s+data-category="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g;
let match;
const articles = [];
while ((match = regex.exec(html)) !== null) {
  articles.push({
    category: match[1],
    title: match[2].trim().replace(/\s+/g, ' ')
  });
}

console.log(`Found ${articles.length} articles in blog.html:`);
articles.forEach((a, i) => console.log(`  ${i+1}. [${a.category}] ${a.title}`));

const categories = ['all', 'buying-guides', 'hardware-upgrades', 'maintenance'];

categories.forEach(cat => {
  const matches = articles.filter(a => cat === 'all' || a.category === cat);
  console.log(`\nFilter '${cat}' matches ${matches.length} articles:`);
  matches.forEach(m => console.log(`   - ${m.title}`));
});
