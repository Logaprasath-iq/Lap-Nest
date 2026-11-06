const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

function showSection(name, marker, len = 600) {
  console.log(`\n=================== ${name} ===================`);
  const idx = indexHtml.indexOf(marker);
  if (idx === -1) {
    console.log(`Marker "${marker}" not found!`);
  } else {
    console.log(indexHtml.substring(idx, idx + len));
  }
}

showSection('Flagship Section', 'id="flagship-showcase-section"');
showSection('Sticky Diagnostic Section', 'id="sticky-diagnostic-section"');
showSection('Testimonials Section', 'id="testimonials"');

const animJs = fs.readFileSync('assets/js/animations.js', 'utf8');
console.log('\n=================== animations.js (first 500 chars) ===================');
console.log(animJs.substring(0, 500));
