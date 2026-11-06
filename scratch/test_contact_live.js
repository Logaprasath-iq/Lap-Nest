const http = require('http');

http.get('http://127.0.0.1:3000/contact.html', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('contact.html HTTP Status:', res.statusCode);
    const hasRow3Grid1 = html.includes('Preferred Response Via');
    const hasRow3Grid2 = html.includes('Preferred Visit / Pickup Date');
    const hasRow4Textarea = html.includes('Fault Symptoms / Additional Details');
    console.log('Has row 3 in enquiry form:', hasRow3Grid1);
    console.log('Has row 3 in booking form:', hasRow3Grid2);
    console.log('Has row 4 textarea in booking form:', hasRow4Textarea);
  });
});
