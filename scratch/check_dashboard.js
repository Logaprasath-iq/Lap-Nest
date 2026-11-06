const fs = require('fs');

if (fs.existsSync('dashboard/index.html')) {
  const content = fs.readFileSync('dashboard/index.html', 'utf8');
  console.log('dashboard/index.html size: ' + content.length);
} else {
  console.log('No dashboard/index.html');
}
