const fs = require('fs');

const srv = fs.readFileSync('scratch/server.js', 'utf8');
console.log(srv);
