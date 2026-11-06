const http = require('http');

http.get('http://127.0.0.1:3000/contact.html', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('contact.html Status:', res.statusCode);
    const hasTimingsCard = html.includes('Monday – Friday:');
    const hasEmergencyCard = html.includes('Open WhatsApp Emergency Desk');
    const hasItemsStretch = html.includes('items-stretch');
    console.log('Has Timings Card:', hasTimingsCard);
    console.log('Has Emergency Card:', hasEmergencyCard);
    console.log('Grid has items-stretch:', hasItemsStretch);
  });
});
