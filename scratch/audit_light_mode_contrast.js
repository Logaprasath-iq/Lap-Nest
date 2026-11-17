const fs = require('fs');
const html = fs.readFileSync('home-2.html', 'utf8');

// Find all sections and their background colors in home-2.html
const sectionRegex = /<!--\s*(SECTION [^>]+)-->[\s\S]*?(?=<!--\s*SECTION|<\/main>|<footer)/g;
let m;
while ((m = sectionRegex.exec(html)) !== null) {
  const title = m[1];
  const content = m[0];
  const bgMatch = content.match(/class="[^"]*bg-\[([^\]]+)\]/);
  console.log(title, '-> Bg:', bgMatch ? bgMatch[1] : 'none');
}
