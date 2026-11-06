const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Check if gsap is included
  if (!html.includes('gsap.min.js')) {
    // Insert gsap and ScrollTrigger before theme.js or navbar.js or animations.js
    const scriptTarget = html.includes('<script src="assets/js/theme.js">')
      ? '<script src="assets/js/theme.js">'
      : '<script src="assets/js/navbar.js">';
    
    if (html.includes(scriptTarget)) {
      html = html.replace(scriptTarget, `  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>\n` + scriptTarget);
      changed = true;
    }
  } else if (!html.includes('ScrollTrigger.min.js')) {
    html = html.replace(/<script[^>]*gsap\.min\.js[^>]*><\/script>/, (m) => {
      return `${m}\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>`;
    });
    changed = true;
  }

  // Ensure animations.js is included
  if (!html.includes('animations.js')) {
    if (html.includes('<script src="assets/js/main.js"></script>')) {
      html = html.replace('<script src="assets/js/main.js"></script>', '  <script src="assets/js/animations.js"></script>\n  <script src="assets/js/main.js"></script>');
      changed = true;
    } else if (html.includes('</body>')) {
      html = html.replace('</body>', '  <script src="assets/js/animations.js"></script>\n</body>');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(f, html);
    console.log(`Updated animation scripts in ${f}`);
  }
});
