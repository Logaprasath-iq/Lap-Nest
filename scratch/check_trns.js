const fs = require('fs');

const buf = fs.readFileSync('assets/images/hero/hero-laptop-floating.png');
console.log('Contains tRNS chunk:', buf.includes(Buffer.from('tRNS')));
