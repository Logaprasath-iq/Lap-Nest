const fs = require('fs');

const svg = fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8');
console.log(svg.slice(0, 500));
const lines = svg.split('\n');
console.log('Total lines:', lines.length);
lines.forEach((l, i) => {
  if (l.includes('<text') || l.includes('<image') || l.includes('<circle') || l.includes('<line')) {
    console.log(`${i}: ${l.trim().slice(0, 100)}`);
  }
});
