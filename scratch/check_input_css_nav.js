const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');

const lines = css.split('\n');
lines.forEach((line, i) => {
  if (line.includes('mobile-menu-btn') || line.includes('nav a') || line.includes('#main-navbar') || line.includes('hidden')) {
    console.log(`${i+1}: ${line}`);
  }
});
