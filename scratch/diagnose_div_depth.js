const fs = require('fs');

function checkFileDivs(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  let depth = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = (line.match(/<div(\s|>)/gi) || []).length;
    const closes = (line.match(/<\/div>/gi) || []).length;
    depth += opens - closes;
    if (depth < 0) {
      console.log(`${filename} Line ${i + 1} went below 0! Current depth: ${depth}`);
      console.log('Line content:', line);
      depth = 0; // reset
    }
  }
  console.log(`${filename} final depth:`, depth);
}

checkFileDivs('contact.html');
checkFileDivs('order.html');
