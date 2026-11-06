const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const bsMatch = html.match(/<section id="best-sellers"[\s\S]*?<\/section>/);
if (bsMatch) {
  console.log(bsMatch[0].substring(0, 1500));
}
