const fs = require('fs');

const sample = fs.readFileSync('index.html', 'utf8').match(/<!-- Column 4: CHENNAI OUTPOST[\s\S]*?<\/div>\s*<\/div>/)[0];
console.log(sample);
