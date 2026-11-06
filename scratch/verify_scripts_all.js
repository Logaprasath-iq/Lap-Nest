const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const hasGsap = html.includes('gsap.min.js');
  const hasST = html.includes('ScrollTrigger.min.js');
  const hasAnim = html.includes('animations.js');
  console.log(`${f}: gsap=${hasGsap}, ST=${hasST}, anim=${hasAnim}`);
});
