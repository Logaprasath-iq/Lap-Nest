const fs = require('fs');

const contact = fs.readFileSync('contact.html', 'utf8');
const lines = contact.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Send an Online Enquiry') || l.includes('Book Hardware Service')) {
    console.log(`Found around line ${i+1}`);
  }
});
