const fs = require('fs');
const content = fs.readFileSync('order.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('dell-inspiron')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
