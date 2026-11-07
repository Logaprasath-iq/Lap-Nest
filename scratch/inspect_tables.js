const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const table1Match = html.match(/Transparent bench labor[\s\S]*?<\/table>/);
if (table1Match) {
  console.log('TABLE 1 (Rate Card):\n', table1Match[0].slice(0, 1000));
}

const table2Match = html.match(/How LAPNEST Compares[\s\S]*?<\/table>/);
if (table2Match) {
  console.log('TABLE 2 (Comparison):\n', table2Match[0].slice(0, 1000));
}
