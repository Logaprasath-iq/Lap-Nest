const fs = require('fs');

let css = fs.readFileSync('assets/css/input.css', 'utf8');

const slaRefinements = `
/* SLA Guarantee Cards & Number Badges in Light Mode */
html.light .w-10.h-10.bg-\\[\\#0e181f\\],
.light .w-10.h-10.bg-\\[\\#0e181f\\] {
  background-color: #f1f5f9 !important;
  border-color: #cbd5e1 !important;
  color: #FD802E !important;
}

html.light #service-guarantees .equal-card,
.light #service-guarantees .equal-card {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05) !important;
}
`;

if (!css.includes('SLA Guarantee Cards & Number Badges in Light Mode')) {
  css += slaRefinements;
  fs.writeFileSync('assets/css/input.css', css, 'utf8');
  console.log('Appended SLA refinements to input.css');
}
