const fs = require('fs');
const c = fs.readFileSync('about.html', 'utf8');

const regex = /<h3 class="text-base font-bold text-white mb-2">(.*?)<\/h3>\s*<p class="text-xs text-\[#9fb3be\] leading-relaxed">(.*?)<\/p>/g;
let m;
while ((m = regex.exec(c)) !== null) {
  console.log(`${m[1]}: ${m[2].length} chars`);
}
