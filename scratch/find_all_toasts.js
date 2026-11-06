const fs = require('fs');

const files = fs.readdirSync('assets/js').filter(f => f.endsWith('.js'));

files.forEach(f => {
  const content = fs.readFileSync(`assets/js/${f}`, 'utf8');
  if (content.includes('showToast') || content.includes('toast')) {
    console.log(`Found toast in assets/js/${f}`);
  }
});
