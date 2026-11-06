const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
let m;
while ((m = regex.exec(indexHtml)) !== null) {
  const headingText = m[1].trim().replace(/\s+/g, ' ');
  // Look backwards for parent container div
  const snippet = indexHtml.substring(Math.max(0, m.index - 500), m.index);
  const lastDiv = snippet.substring(snippet.lastIndexOf('<div'));
  console.log(`\nHeading: "${headingText}"`);
  console.log('Parent div snippet:', lastDiv);
}
