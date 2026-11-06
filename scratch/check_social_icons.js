const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const match = content.match(/Official Channels[\s\S]*?<\/div>\s*<\/div>/i);
if (match) {
  console.log(match[0]);
}
