const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log(`Auditing ${htmlFiles.length} HTML files...\n`);

let totalIssues = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const issues = [];

  // Check 1: GSAP & animations.js presence
  if (!content.includes('animations.js')) issues.push('Missing animations.js');
  if (!content.includes('gsap.min.js')) issues.push('Missing gsap.min.js');
  if (!content.includes('ScrollTrigger.min.js')) issues.push('Missing ScrollTrigger.min.js');

  // Check 2: Checkmark color check - raw green or non-orange tick check
  const tickMatches = content.match(/✓/g) || [];
  const orangeTickMatches = content.match(/text-\[#FD802E\][^>]*>✓/g) || [];
  if (tickMatches.length !== orangeTickMatches.length) {
    issues.push(`Ticks mismatch: total ${tickMatches.length} vs orange ${orangeTickMatches.length}`);
  }

  // Check 3: Check social channels in footer
  const hasWhatsapp = content.includes('whatsapp') || content.includes('WhatsApp') || content.includes('wa.me');
  const hasInstagram = content.includes('instagram') || content.includes('Instagram');
  const hasX = content.includes('x.com') || content.includes('twitter');
  const hasFacebook = content.includes('facebook') || content.includes('Facebook');
  if (!hasWhatsapp || !hasInstagram || !hasX || !hasFacebook) {
    issues.push('Missing one or more footer social channels');
  }

  // Check 4: Check if any yellow buttons remain
  if (content.includes('#F5A623') || content.includes('#E5A93C') || content.includes('#D48B28')) {
    issues.push('Found legacy yellow color hex');
  }

  if (file === 'index.html') {
    // Specific checks for index.html:
    if (content.includes('Scroll to Glide')) issues.push('index.html still has "Scroll to Glide"');
    const flagshipCards = (content.match(/01 \/ 03/g) || []).length;
    if (flagshipCards === 0) issues.push('index.html missing 01 / 03 in flagship');

    // Sticky diagnostics: 2 balanced left cards (Phase 1,2 with diagnostic video & Phase 3,4 with thermal burn-in video)
    if (!content.includes('diagnostic-card-phase-1-2')) issues.push('index.html missing diagnostic-card-phase-1-2');
    if (!content.includes('diagnostic-card-phase-3-4')) issues.push('index.html missing diagnostic-card-phase-3-4');
    if (!content.includes('diagnostic-lab.mp4')) issues.push('index.html missing diagnostic-lab.mp4 video');
    if (!content.includes('thermal-burnin-lab.mp4')) issues.push('index.html missing thermal-burnin-lab.mp4 video');

    // Testimonials: check real author images & removed prev/next buttons
    if (!content.includes('client-1.jpg') || !content.includes('client-2.jpg') || !content.includes('client-3.jpg')) {
      issues.push('index.html testimonials missing real author images');
    }
    if (content.includes('id="prev-testimonial"') || content.includes('id="next-testimonial"')) {
      issues.push('index.html testimonials still has prev/next arrow buttons (Image 4)');
    }
  }

  if (issues.length > 0) {
    console.log(`❌ ${file}:`);
    issues.forEach(i => console.log(`   - ${i}`));
    totalIssues += issues.length;
  } else {
    console.log(`✅ ${file}: 100% Passed`);
  }
});

console.log(`\nAudit complete. Total issues found: ${totalIssues}`);
