const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const match = content.match(/<a href="https:\/\/wa\.me\/919840012345" target="_blank" rel="noopener noreferrer" class="w-10 h-10[\s\S]*?<\/a>/);
if (match) {
  console.log(match[0]);
}
