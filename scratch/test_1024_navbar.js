const fs = require('fs');
const content = fs.readFileSync('contact.html', 'utf8');

const lines = content.split('\n');
for (let i = 20; i < 95; i++) {
  console.log((i+1) + ': ' + lines[i]);
}
