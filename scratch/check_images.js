const fs = require('fs');

console.log('--- PRODUCTS.JS ---');
const prodJs = fs.readFileSync('assets/js/products.js', 'utf8');
const pMatches = prodJs.match(/image:\s*['"][^'"]+['"]/g);
console.log(pMatches);

console.log('--- INDEX.HTML IMAGES ---');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const imgMatches = indexHtml.match(/src=["']assets\/images\/[^"']+["']/g);
console.log([...new Set(imgMatches)]);

console.log('--- ABOUT.HTML IMAGES ---');
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const aMatches = aboutHtml.match(/src=["']assets\/images\/[^"']+["']/g);
console.log([...new Set(aMatches)]);
