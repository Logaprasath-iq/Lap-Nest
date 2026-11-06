const fs = require('fs');

const repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');

const regex = /<div class="grid [^"]*">/g;
let match;
while ((match = regex.exec(repairHtml)) !== null) {
  console.log(`Grid found at ${match.index}: ${match[0]}`);
  console.log(repairHtml.substring(match.index, match.index + 250));
}
