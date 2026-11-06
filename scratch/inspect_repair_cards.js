const fs = require('fs');

const repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');
console.log(repairHtml.substring(17188, 21500));
