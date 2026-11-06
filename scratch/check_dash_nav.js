const fs = require('fs');

if (fs.existsSync('dashboard/index.html')) {
  const content = fs.readFileSync('dashboard/index.html', 'utf8');
  console.log('dashboard/index.html first 500 chars:');
  console.log(content.slice(0, 500));
}
