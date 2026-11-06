const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Send an Online Enquiry') || content.includes('Book Hardware Service')) {
    console.log(`Found in ${f}`);
  }
});
