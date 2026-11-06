const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('Repair & Upgrade Services');
if (sIdx !== -1) {
  console.log('Found Repair & Upgrade Services at:', sIdx);
  console.log(indexHtml.substring(sIdx - 200, sIdx + 400));
} else {
  console.log('Not found in index.html, checking all HTML files...');
  const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes('Repair & Upgrade Services')) {
      console.log(`Found in ${f}`);
    }
  });
}
