const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'products.html',
  'pricing.html',
  'repair-upgrade.html',
  'contact.html',
  'blog.html',
  'home-2.html',
  'order.html'
];

console.log('=== Responsive & Asset Verification ===');

let totalIssues = 0;

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  
  // 1. Check animation scripts
  const hasGsap = html.includes('gsap.min.js');
  const hasScrollTrigger = html.includes('ScrollTrigger.min.js');
  const hasAnimJs = html.includes('animations.js');

  if (!hasGsap || !hasScrollTrigger || !hasAnimJs) {
    console.error(`[ERR] ${p} is missing animation scripts! gsap=${hasGsap}, st=${hasScrollTrigger}, anim=${hasAnimJs}`);
    totalIssues++;
  }

  // 2. Check for missing images
  const imgs = html.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
  imgs.forEach(tag => {
    const src = tag.match(/src=["']([^"']+)["']/i)[1];
    if (!src.startsWith('data:') && !src.startsWith('http')) {
      if (!fs.existsSync(src)) {
        console.error(`[ERR] ${p} references non-existent image: ${src}`);
        totalIssues++;
      }
    }
  });

  // 3. Check for raw checkmarks (should all be orange)
  const rawTicks = (html.match(/✓/g) || []).length;
  const orangeTicks = (html.match(/<span[^>]*text-\[#FD802E\][^>]*>\s*✓\s*<\/span>/g) || []).length;
  if (rawTicks !== orangeTicks) {
    console.error(`[ERR] ${p} has unstyled ticks: total=${rawTicks}, styled=${orangeTicks}`);
    totalIssues++;
  }

  // 4. Check for highlighted social channel buttons in footer
  const hasWaHighlighted = html.includes('border-2 border-[#25D366]');
  const hasInstaHighlighted = html.includes('border-2 border-[#E4405F]');
  const hasXHighlighted = html.includes('border-2 border-white');
  const hasFbHighlighted = html.includes('border-2 border-[#1877F2]');

  if (!hasWaHighlighted || !hasInstaHighlighted || !hasXHighlighted || !hasFbHighlighted) {
    console.error(`[ERR] ${p} footer social buttons not all highlighted! wa=${hasWaHighlighted}, ig=${hasInstaHighlighted}, x=${hasXHighlighted}, fb=${hasFbHighlighted}`);
    totalIssues++;
  }
});

if (totalIssues === 0) {
  console.log('PERFECT! All pages passed all script, image, tick color, and footer social channel checks!');
} else {
  console.log(`Found ${totalIssues} issue(s) to address.`);
}
