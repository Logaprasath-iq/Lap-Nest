const fs = require('fs');

const html = fs.readFileSync('blog.html', 'utf8');

// Parse buttons
const btnRegex = /<button[^>]*data-category="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g;
let bMatch;
const buttons = [];
while ((bMatch = btnRegex.exec(html)) !== null) {
  buttons.push({ category: bMatch[1], label: bMatch[2].trim() });
}

// Parse articles
const artRegex = /<article\s+data-category="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g;
let aMatch;
const articles = [];
while ((aMatch = artRegex.exec(html)) !== null) {
  articles.push({ category: aMatch[1], title: aMatch[2].trim().replace(/\s+/g, ' ') });
}

console.log('--- FILTER BUTTONS ---');
buttons.forEach(b => console.log(`  [${b.category}]: ${b.label}`));

console.log('\n--- ARTICLES PER CATEGORY ---');
buttons.forEach(b => {
  const matching = articles.filter(a => b.category === 'all' || a.category === b.category);
  console.log(`Button "${b.label}" (${b.category}) -> ${matching.length} articles:`);
  matching.forEach(m => console.log(`   * ${m.title}`));
});
