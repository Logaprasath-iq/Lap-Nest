const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

let pos = 0;
while ((pos = indexHtml.indexOf('Scroll to Glide', pos)) !== -1) {
  console.log('Found "Scroll to Glide" at position', pos);
  console.log(indexHtml.substring(pos - 60, pos + 100));
  pos += 15;
}
