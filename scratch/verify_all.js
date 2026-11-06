const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasCartInNav = content.includes('title="Orders & Cart"');
  const hasDoubleRtl = content.includes('⇄ RTL') || content.includes('⇄ LTR');
  const hasBalancedFooter = content.includes('Official Channels') && content.includes('CHENNAI OUTPOST');
  console.log(`${f}: hasCartInNav=${hasCartInNav}, hasDoubleRtl=${hasDoubleRtl}, hasBalancedFooter=${hasBalancedFooter}`);
});
