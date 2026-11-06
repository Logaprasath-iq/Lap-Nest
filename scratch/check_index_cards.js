const fs = require('fs');

const idx = fs.readFileSync('index.html', 'utf8');

// Check if index.html has static product cards or uses products.js
const lines = idx.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Inspiron') || l.includes('Pavilion') || l.includes('252628') || l.includes('172731')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 100)}`);
  }
});
