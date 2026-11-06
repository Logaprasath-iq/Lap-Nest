const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('<!-- Column 4: CHENNAI OUTPOST');
const end = html.indexOf('</div>\n      </div>\n    </div>\n\n    <!-- Bottom Legal Bar');
console.log(html.slice(start, end));
