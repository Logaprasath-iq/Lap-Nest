const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const match = js.match(/function renderProducts[\s\S]*?<\/div>`/);
if (match) {
  console.log(match[0].substring(0, 1500));
} else {
  // search for html string
  const idx = js.indexOf('container.innerHTML');
  console.log(js.substring(idx - 500, idx + 1000));
}
