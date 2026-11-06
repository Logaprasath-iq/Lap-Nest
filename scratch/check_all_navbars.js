const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasNavbar = content.includes('id="main-navbar"');
  const headerMatch = content.match(/<header[^>]*id="main-navbar"[^>]*>([\s\S]*?)<\/header>/);
  if (headerMatch) {
    const containerMatch = headerMatch[1].match(/<div class="([^"]*)">/);
    const navMatch = headerMatch[1].match(/<nav class="([^"]*)">/);
    const controlsMatch = headerMatch[1].match(/<!-- Right Controls[\s\S]*?<div class="([^"]*)">/);
    console.log(f, '=> Container:', containerMatch ? containerMatch[1] : 'none');
    console.log('   Nav:', navMatch ? navMatch[1] : 'none');
    console.log('   Controls:', controlsMatch ? controlsMatch[1] : 'none');
  } else {
    console.log(f, '=> NO main-navbar');
  }
});
