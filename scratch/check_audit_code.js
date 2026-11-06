const fs = require('fs');

const audit = fs.readFileSync('scratch/audit_full_website_compliance.js', 'utf8');
const lines = audit.split('\n');
lines.forEach((l, i) => {
  if (l.includes('testimonial') || l.includes('author')) {
    console.log(`L${i+1}: ${l}`);
  }
});
