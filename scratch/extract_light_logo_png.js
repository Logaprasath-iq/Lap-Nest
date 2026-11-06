const fs = require('fs');

const lightSvg = fs.readFileSync('assets/images/logo/logo-light.svg', 'utf8');

const imgHrefMatch = lightSvg.match(/href="data:image\/png;base64,([^"]+)"/);
if (imgHrefMatch) {
  const base64Data = imgHrefMatch[1];
  const buf = Buffer.from(base64Data, 'base64');
  fs.writeFileSync('scratch/extracted_light_logo_embedded.png', buf);
  console.log('Extracted embedded PNG from logo-light.svg, size:', buf.length);
  
  // check dimensions
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  console.log(`Embedded PNG dims: ${width}x${height}`);
} else {
  console.log('No base64 data found in logo-light.svg');
}
