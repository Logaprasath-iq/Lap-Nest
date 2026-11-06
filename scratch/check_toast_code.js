const fs = require('fs');

const forms = fs.readFileSync('assets/js/forms.js', 'utf8');
const lines = forms.split('\n');
lines.slice(5, 45).forEach((l, i) => console.log(`L${6+i}: ${l}`));
