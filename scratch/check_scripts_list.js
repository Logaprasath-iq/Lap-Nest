const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const sIdx = indexHtml.indexOf('<script src=');
const scripts = indexHtml.match(/<script[^>]*src=[^>]*>[\s\S]*?<\/script>/gi);
console.log('Scripts:', scripts);
