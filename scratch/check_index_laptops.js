const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('dell-inspiron.jpg') || line.includes('hp-pavilion.jpg') || line.includes('lenovo-thinkpad.jpg')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
