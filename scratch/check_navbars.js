const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const headerMatch = content.match(/<header id="main-navbar"[\s\S]*?<\/header>/);
  if (!headerMatch) {
    console.log(`${f}: NO HEADER FOUND!`);
  } else {
    const header = headerMatch[0];
    const hasNav = header.includes('<nav');
    const hasHome = header.includes('Home');
    const hasAbout = header.includes('About');
    const hasProducts = header.includes('Products');
    const hasPricing = header.includes('Pricing');
    const hasRepair = header.includes('Repair');
    const hasBlog = header.includes('Blog');
    const hasContact = header.includes('Contact');
    const navClassMatch = header.match(/<nav class="([^"]+)"/);
    const navClass = navClassMatch ? navClassMatch[1] : 'none';
    console.log(`${f}: hasNav=${hasNav}, allLinks=${hasHome && hasAbout && hasProducts && hasPricing && hasRepair && hasBlog && hasContact}, navClass="${navClass}"`);
  }
});
