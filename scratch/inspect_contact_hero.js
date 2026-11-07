const fs = require('fs');

// Let's inspect contact.html around the hero card
const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
for (let i = 150; i < 210; i++) {
  console.log((i+1) + ': ' + lines[i]);
}
