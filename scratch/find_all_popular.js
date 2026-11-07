const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const matches = [];
const regex = /popular/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  matches.push({
    index: m.index,
    snippet: html.slice(Math.max(0, m.index - 50), Math.min(html.length, m.index + 80))
  });
}
console.log('Matches for popular in pricing.html:', matches);
