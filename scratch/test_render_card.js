const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('assets/js/products.js', 'utf8');
const context = { window: {}, document: { addEventListener: () => {} } };
vm.createContext(context);
vm.runInContext(code + '\n;globalResult = renderProductCardHTML(LAPNEST_PRODUCTS[0]);', context);

console.log(context.globalResult);
