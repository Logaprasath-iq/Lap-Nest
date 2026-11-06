const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasGsap = content.includes('gsap.min.js');
  const hasScrollTrigger = content.includes('ScrollTrigger.min.js');
  const hasAnimationsJs = content.includes('animations.js');
  console.log(`${file.padEnd(22)}: gsap=${hasGsap ? 'YES' : 'NO'}, ScrollTrigger=${hasScrollTrigger ? 'YES' : 'NO'}, animations.js=${hasAnimationsJs ? 'YES' : 'NO'}`);
});
