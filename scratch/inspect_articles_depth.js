const fs = require('fs');

const code = fs.readFileSync('assets/js/blog-details.js', 'utf8');
const start = code.indexOf('const BLOG_ARTICLES = {');
const end = code.indexOf('function getQueryParam(');
const articlesCode = code.slice(start, end).replace('const BLOG_ARTICLES =', 'global.BLOG_ARTICLES =');

eval(articlesCode);

for (const [id, art] of Object.entries(global.BLOG_ARTICLES)) {
  const secCount = art.sections.length;
  let pCount = 0;
  art.sections.forEach(s => pCount += s.content.length);
  console.log(`[${id}]: ${secCount} sections, ${pCount} paragraphs`);
}
