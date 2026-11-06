const http = require('http');

http.get('http://127.0.0.1:3000/contact.html', res => {
  console.log('contact.html status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Has Walk-in Cutoff:', data.includes('Walk-in Cutoff:'));
    console.log('Has Festival Holidays:', data.includes('Festival Holidays:'));
    console.log('Has 24/7 Smart Lockers:', data.includes('24/7 Smart Lockers:'));
    console.log('Has OMR Lab Unit:', data.includes('OMR Lab Unit'));
  });
});
