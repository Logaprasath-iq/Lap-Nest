const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const lines = indexHtml.split('\n');

// Find navbar right side items
lines.slice(60, 95).forEach((l, i) => {
  console.log(`L${61+i}: ${l}`);
});
