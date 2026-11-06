const fs = require('fs');
const path = require('path');

const exts = ['.html', '.js', '.css'];
const searchHColors = ['252628', '1f1d22', '19171b', '353639', 'b5b5b5', '2a2b2d', '1e1e20', '262626', '2d2d30'];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === '.system_generated') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else {
      if (exts.includes(path.extname(file))) {
        const content = fs.readFileSync(full, 'utf8');
        searchHColors.forEach(h => {
          const regex = new RegExp(h, 'gi');
          const matches = content.match(regex);
          if (matches) {
            console.log(`Found ${matches.length} matches of #${h} in ${full}`);
          }
        });
      }
    }
  }
}

walk('.');
