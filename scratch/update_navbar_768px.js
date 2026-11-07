const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('id="main-navbar"')) {
    let original = content;

    // 1. RTL button: replace 'hidden sm:inline-flex' with 'hidden lg:inline-flex' inside rtl-toggle-btn
    content = content.replace(/(class="rtl-toggle-btn[^"]*?)hidden sm:inline-flex([^"]*?")/, '$1hidden lg:inline-flex$2');

    // 2. Theme button: replace 'hidden sm:inline-flex' with 'hidden lg:inline-flex' inside theme-toggle-btn
    content = content.replace(/(class="theme-toggle-btn[^"]*?)hidden sm:inline-flex([^"]*?")/, '$1hidden lg:inline-flex$2');

    // 3. Order button: replace 'hidden sm:inline-flex' with 'hidden lg:inline-flex' inside the header order button
    // It's inside the header before id="mobile-menu-btn"
    content = content.replace(/(<header id="main-navbar"[\s\S]*?)hidden sm:inline-flex( items-center justify-center gap-2 h-10 px-4 xl:px-5[^>]*>[\s\S]*?<span>Order Now<\/span>[\s\S]*?<\/header>)/, '$1hidden lg:inline-flex$2');

    if (content !== original) {
      fs.writeFileSync(f, content, 'utf8');
      updatedCount++;
      console.log(`Updated navbar controls in: ${f}`);
    } else {
      console.log(`NO changes made in: ${f}`);
    }
  }
});

console.log(`\nFinished updating navbar controls in ${updatedCount} files.`);
