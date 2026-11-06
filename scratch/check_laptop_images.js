const fs = require('fs');

const heroFiles = fs.readdirSync('assets/images/hero');
console.log('Hero files:', heroFiles);

const allImages = fs.readdirSync('assets/images', { recursive: true });
console.log('Matching laptop images:', allImages.filter(f => typeof f === 'string' && (f.includes('laptop') || f.includes('orbital') || f.includes('rotate'))));
