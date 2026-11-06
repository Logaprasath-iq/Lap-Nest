const fs = require('fs');

const blogHtml = fs.readFileSync('blog.html', 'utf8');

const regex = /<article[\s\S]*?<\/article>/g;
let match;
let count = 0;
while ((match = regex.exec(blogHtml)) !== null && count < 3) {
  count++;
  console.log(`\n--- Blog card ${count} ---`);
  console.log(match[0]);
}
