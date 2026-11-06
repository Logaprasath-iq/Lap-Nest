const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hasGsap = c.includes('gsap');
  const hasScrollTrigger = c.includes('ScrollTrigger');
  const hasAnimationsJs = c.includes('animations.js');
  console.log(f + ': gsap=' + hasGsap + ', scrollTrigger=' + hasScrollTrigger + ', animations.js=' + hasAnimationsJs);
});
