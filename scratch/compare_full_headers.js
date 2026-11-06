const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const indexContent = fs.readFileSync('index.html', 'utf8');
const indexHeader = indexContent.match(/<header id="main-navbar"[\s\S]*?<\/header>/)[0];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<header id="main-navbar"[\s\S]*?<\/header>/);
  if (match) {
    if (match[0] === indexHeader) {
      console.log(f, ': EXACT MATCH');
    } else {
      console.log(f, ': DIFFERS');
      // check diff length
      console.log('   indexHeader length:', indexHeader.length, 'this length:', match[0].length);
    }
  } else {
    console.log(f, ': NO HEADER');
  }
});
