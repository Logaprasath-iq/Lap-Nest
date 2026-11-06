const fs = require('fs');
const js = fs.readFileSync('assets/js/products.js', 'utf8');

const idx = js.indexOf('container.innerHTML = filtered.map');
if (idx !== -1) {
  console.log(js.substring(idx, idx + 2500));
} else {
  const mapIdx = js.indexOf('.map(');
  console.log(js.substring(mapIdx, mapIdx + 2500));
}
