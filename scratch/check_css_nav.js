const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

console.log('Has .hidden:', css.includes('.hidden'));
console.log('Has .lg\\:flex:', css.includes('.lg\\:flex') || css.includes('lg\\:flex'));
console.log('Has .lg\\:hidden:', css.includes('.lg\\:hidden') || css.includes('lg\\:hidden'));

// Let's search for lg:flex rule
const matchLgFlex = css.match(/@media[^{]+\(min-width:\s*1024px\)[^{]*\{[\s\S]*?\.lg\\:flex[\s\S]*?\}/);
console.log('lg:flex media query match:', matchLgFlex ? matchLgFlex[0].slice(0, 200) : 'none');

// Let's check for any rule hiding nav
const navRules = css.match(/nav[^{]*\{[^}]*\}/g);
console.log('nav rules in css:', navRules);
