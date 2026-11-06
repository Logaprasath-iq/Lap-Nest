const fs = require('fs');
const path = require('path');

const targets = [
  'dashboard/blogs.html',
  'dashboard/bookings.html',
  'dashboard/customers.html',
  'dashboard/enquiries.html',
  'dashboard/orders.html',
  'dashboard/products.html',
  'dashboard/services.html',
  'dashboard/settings.html',
  'documentation/index.html',
  'assets/js/dashboard.js'
];

targets.forEach(rel => {
  if (!fs.existsSync(rel)) return;
  let content = fs.readFileSync(rel, 'utf8');
  let original = content;

  // Replacements
  content = content.replace(/252628/g, '172731');
  content = content.replace(/353639/g, '233D4C');
  content = content.replace(/19171b/g, '111e26');
  content = content.replace(/1f1d22/g, '111e26');
  content = content.replace(/b5b5b5/g, '9fb3be');

  if (content !== original) {
    fs.writeFileSync(rel, content, 'utf8');
    console.log(`Updated ${rel}`);
  }
});
