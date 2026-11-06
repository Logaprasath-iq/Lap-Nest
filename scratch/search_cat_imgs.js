const fs = require('fs');

const targets = ['category-gaming.jpg', 'category-business.jpg', 'category-student.jpg', 'category-pro.jpg'];

function search(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  targets.forEach(t => {
    if (content.includes(t)) {
      console.log(`Found "${t}" in ${file}`);
    }
  });
}

fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(search);
fs.readdirSync('assets/js').filter(f => f.endsWith('.js')).forEach(f => search('assets/js/' + f));
