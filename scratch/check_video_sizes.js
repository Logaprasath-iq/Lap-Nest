const fs = require('fs');

const files = fs.readdirSync('assets/videos');
files.forEach(f => {
  const stat = fs.statSync('assets/videos/' + f);
  console.log(`${f.padEnd(25)}: ${stat.size} bytes`);
});
