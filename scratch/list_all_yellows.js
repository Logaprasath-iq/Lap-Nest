const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const allJs = fs.readdirSync('assets/js').map(f => 'assets/js/' + f);
const files = [...allHtml, ...allJs];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const e5 = (content.match(/#e5b232/gi) || []).length;
    const d2 = (content.match(/#d29f22/gi) || []).length;
    if (e5 > 0 || d2 > 0) {
      console.log(`${f}: #e5b232=${e5}, #d29f22=${d2}`);
    }
  }
});
