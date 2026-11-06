const fs = require('fs');

if (fs.existsSync('assets/js/three-d.js')) {
  console.log(fs.readFileSync('assets/js/three-d.js', 'utf8'));
} else {
  console.log('three-d.js does not exist');
}
