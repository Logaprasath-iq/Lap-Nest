const fs = require('fs');

// Simple PNG pixel reader or check corners
const buf = fs.readFileSync('assets/images/logo/logo-mark-user.png');
console.log('PNG size:', buf.length);
