const fs = require('fs');

const dIdx = fs.readFileSync('dashboard/index.html', 'utf8');
const hexMatches = dIdx.match(/bg-\[#[a-fA-F0-9]{3,6}\]/g) || [];
console.log('dashboard/index.html bgs:', [...new Set(hexMatches)]);
