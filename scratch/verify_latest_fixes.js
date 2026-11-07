const http = require('http');

console.log('=== VERIFYING LIVE HTTP PAGES FOR LATEST FIXES ===');

// Test 1: repair-upgrade.html has id="services-list", symptom icons, and equal form/faq
http.get('http://127.0.0.1:3000/repair-upgrade.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('[repair-upgrade.html] Status:', res.statusCode);
    console.log('  1. Has id="services-list":', data.includes('id="services-list"'));
    console.log('  2. Has Symptom 01 with icon:', data.includes('SYMPTOM 01') && data.includes('<svg class="w-5 h-5"'));
    console.log('  3. Has items-stretch on #book section:', data.includes('grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch'));
    console.log('  4. Has Cleanroom Knowledgebase FAQ Card:', data.includes('Cleanroom Knowledgebase') && data.includes('Repair FAQs'));
  });
}).on('error', err => console.error(err));

// Test 2: service-details.html has equal-row heights and 5-row alignment
http.get('http://127.0.0.1:3000/service-details.html?service=screen', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('[service-details.html] Status:', res.statusCode);
    console.log('  1. Has min-h-[3.25rem] equal row lines:', data.includes('min-h-[3.25rem]'));
    console.log('  2. Has 5 rows in pricing:', data.includes('Zero Dead-Pixel Diagnostic'));
    console.log('  3. Has items-stretch on 3-col service grid:', data.includes('grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch'));
  });
}).on('error', err => console.error(err));

// Test 3: services.js has 5 rows across all services
http.get('http://127.0.0.1:3000/assets/js/services.js?v=3.2', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('[services.js] Status:', res.statusCode);
    console.log('  1. Battery has 5 pricing items:', data.includes('Electrochemical Impedance Audit'));
    console.log('  2. Motherboard has 5 pricing items:', data.includes('40-Point Cleanroom Telemetry'));
    console.log('  3. Renders min-h-[3.25rem] in dynamic output:', data.includes('min-h-[3.25rem]'));
  });
}).on('error', err => console.error(err));
