const fs = require('fs');

const targets = ['client-1', 'client-2', 'Anand Krishnan', 'Pooja Ramanathan', 'Vignesh Sundaram'];

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
