const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const match = css.match(/[^{}]*\.hidden[^{]*\{[^}]*\}/g);
console.log('Matches for .hidden in style.css:', match);

const navRules = css.match(/#main-navbar nav\{[^}]*\}/g);
console.log('#main-navbar nav rules:', navRules);

const lgNavRules = css.match(/@media[^{]+\(min-width:\s*1024px\)[^{]*\{[^}]*#main-navbar nav[^}]*\}/g);
console.log('lg nav rules:', lgNavRules);
