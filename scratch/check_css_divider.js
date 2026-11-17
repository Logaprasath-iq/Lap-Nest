const fs = require('fs');
const css = fs.readFileSync('assets/css/input.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('DIVIDER') || l.includes('divider') || l.includes('MISSION') || l.includes('HERITAGE') || l.includes('0e181f')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
