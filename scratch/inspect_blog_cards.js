const fs = require('fs');

const blogHtml = fs.readFileSync('blog.html', 'utf8');

const regex = /<article[^>]*class="[^"]*"[^>]*>/g;
let match;
while ((match = regex.exec(blogHtml)) !== null) {
  console.log('Blog article found:', blogHtml.substring(match.index, match.index + 400));
}
