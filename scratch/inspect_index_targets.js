const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

function findSnippet(label, query, len = 400) {
  const idx = indexHtml.indexOf(query);
  console.log(`\n=== ${label} (pos: ${idx}) ===`);
  if (idx !== -1) {
    console.log(indexHtml.substring(idx, idx + len));
  } else {
    console.log('NOT FOUND');
  }
}

findSnippet('Sticky Diagnostic', 'id="sticky-diagnostic-section"');
findSnippet('Services Heading', 'id="services"');
findSnippet('Best Sellers Heading', 'id="best-sellers"');
findSnippet('Flagship Showcase Heading', 'id="flagship-showcase-section"');
findSnippet('Testimonials Heading', 'id="testimonials"');
findSnippet('Testimonial Arrows', 'id="prev-testimonial"');
findSnippet('Newsletter CTA', 'Ready to Upgrade Your Technology?');
