const fs = require('fs');

const forms = fs.readFileSync('assets/js/forms.js', 'utf8');
const lines = forms.split('\n');
lines.forEach((l, i) => {
  if (l.includes('contact-enquiry') || l.includes('repair-booking') || l.includes('contact.html')) {
    console.log(`L${i+1}: ${l}`);
  }
});
