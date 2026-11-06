const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

// Check if text-[#9fb3be]/80 exists in style.css and what color it gets in light mode
const m1 = css.match(/\.text-\\\[\\#9fb3be\\\]\\\/80\{[^}]*\}/);
console.log('text-[#9fb3be]/80 rule:', m1 ? m1[0] : 'not found');

const m2 = css.match(/html\.light [^{]*text-\\\[\\#9fb3be\\\][^{]*\{[^}]*\}/g);
console.log('html.light text-[#9fb3be] rules:', m2);
