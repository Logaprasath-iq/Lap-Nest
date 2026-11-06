const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const regex = /<section[\s\S]*?(?=<section|<\/main|$)/gi;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  const sectionText = match[0];
  const idMatch = sectionText.match(/id="([^"]+)"/);
  const id = idMatch ? idMatch[1] : 'no-id';
  const hMatch = sectionText.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
  const heading = hMatch ? hMatch[1].replace(/<[^>]+>/g, '').trim() : 'no heading';
  console.log(`${i}. ID: "${id}" | Heading: "${heading}" | Length: ${sectionText.length}`);
}
