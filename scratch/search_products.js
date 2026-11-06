const fs = require('fs');

function search(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  ['Inspiron 15 3520', 'Pavilion Gaming 15', 'ThinkPad X1 Carbon'].forEach(term => {
    if (content.includes(term)) {
      console.log(`Found "${term}" in ${file}`);
    }
  });
}

fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(search);
if (fs.existsSync('assets/js')) {
  fs.readdirSync('assets/js').filter(f => f.endsWith('.js')).forEach(f => search('assets/js/' + f));
}
