const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');

const lines = css.split('\n');
lines.forEach((line, i) => {
  if (line.includes('hidden') && line.includes('!important')) {
    console.log(`${i+1}: ${line}`);
  }
});
