const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const headerMatch = content.match(/<header id="main-navbar"[\s\S]*?<\/header>/);
  if (headerMatch) {
    const text = headerMatch[0];
    const brandLink = text.match(/<a href="index\.html" class="([^"]*)">/);
    const containerDiv = text.match(/<header id="main-navbar"[^>]*>\s*<div class="([^"]*)">/);
    const navTag = text.match(/<nav class="([^"]*)">/);
    const rightControls = text.match(/<!-- Right Controls[\s\S]*?<div class="([^"]*)">/);
    console.log(f, ':');
    console.log('  Container:', containerDiv ? containerDiv[1] : 'NOT FOUND');
    console.log('  Logo link:', brandLink ? brandLink[1] : 'NOT FOUND');
    console.log('  Nav:', navTag ? navTag[1] : 'NOT FOUND');
    console.log('  Right Controls:', rightControls ? rightControls[1] : 'NOT FOUND');
  }
});
