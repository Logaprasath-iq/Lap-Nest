const fs = require('fs');

// 1. assets/js/products.js
let prodJs = fs.readFileSync('assets/js/products.js', 'utf8');
// replace button
prodJs = prodJs.replace(
  'class="px-3 py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#d29f22] hover:bg-[#e5b232] text-[#19171b] shadow-gold-sm transition-all duration-200">',
  'class="px-3 py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#FD802E] hover:bg-[#ff9248] text-white shadow-lg shadow-[#FD802E]/25 transition-all duration-200">'
);
// replace badge
prodJs = prodJs.replace(
  'class="px-2.5 py-1 text-xs font-bold rounded-md bg-[#d29f22] text-[#19171b] shadow-sm uppercase tracking-wider"',
  'class="px-2.5 py-1 text-xs font-bold rounded-md bg-[#FD802E] text-white shadow-sm uppercase tracking-wider"'
);
// replace clear filter inline button
prodJs = prodJs.replace(
  'class="mt-4 px-4 py-2 bg-[#d29f22] text-[#19171b] rounded-xl font-bold text-sm"',
  'class="mt-4 px-4 py-2 bg-[#FD802E] hover:bg-[#ff9248] text-white rounded-xl font-bold text-sm shadow-md shadow-[#FD802E]/25"'
);
// replace all remaining #d29f22 in products.js
prodJs = prodJs.replace(/#d29f22/g, '#FD802E');
prodJs = prodJs.replace(/#e5b232/g, '#ff9248');
fs.writeFileSync('assets/js/products.js', prodJs);
console.log('Updated assets/js/products.js');

// 2. assets/js/main.js
let mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
mainJs = mainJs.replace(/#d29f22/g, '#FD802E');
mainJs = mainJs.replace(/#e5b232/g, '#ff9248');
fs.writeFileSync('assets/js/main.js', mainJs);
console.log('Updated assets/js/main.js');

// 3. assets/js/forms.js
let formsJs = fs.readFileSync('assets/js/forms.js', 'utf8');
formsJs = formsJs.replace(/#d29f22/g, '#FD802E');
formsJs = formsJs.replace(/#e5b232/g, '#ff9248');
fs.writeFileSync('assets/js/forms.js', formsJs);
console.log('Updated assets/js/forms.js');

// 4. assets/js/dashboard.js
let dashJs = fs.readFileSync('assets/js/dashboard.js', 'utf8');
dashJs = dashJs.replace(/#d29f22/g, '#FD802E');
dashJs = dashJs.replace(/#e5b232/g, '#ff9248');
fs.writeFileSync('assets/js/dashboard.js', dashJs);
console.log('Updated assets/js/dashboard.js');

// 5. assets/js/three-d.js
let threeJs = fs.readFileSync('assets/js/three-d.js', 'utf8');
threeJs = threeJs.replace(/#d29f22/g, '#FD802E');
threeJs = threeJs.replace(/#e5b232/g, '#ff9248');
fs.writeFileSync('assets/js/three-d.js', threeJs);
console.log('Updated assets/js/three-d.js');
