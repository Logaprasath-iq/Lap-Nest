const http = require('http');

http.get('http://127.0.0.1:3000/about.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('about.html status:', res.statusCode);
    const lab01 = data.includes('zero static discharge damage across microscopic 3nm silicon dies');
    const lab05 = data.includes('Real-time diagnostic analysis of I2C, SPI, and SMBus');
    const lab06 = data.includes('Multi-stage ultrasonic chemical cavitation immersion tanks');
    const pol01 = data.includes('By repairing circuit boards at the micro-component level rather than discarding full assemblies');
    const pol03 = data.includes('We strictly reject counterfeit batteries, cloned charging adapters');
    console.log('LAB-01 updated:', lab01);
    console.log('LAB-05 updated:', lab05);
    console.log('LAB-06 updated:', lab06);
    console.log('POLICY 01 updated:', pol01);
    console.log('POLICY 03 updated:', pol03);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
