const fs = require('fs');

let animJs = fs.readFileSync('assets/js/animations.js', 'utf8');

const oldBlock = `    // --- FEATURE 5: Sticky Scroll Diagnostics Architecture (Image 2 & 3 Fix) ---
    const stickySection = document.getElementById('sticky-diagnostic-section');
    const stickyStepCards = document.querySelectorAll('.sticky-step-card');
    const stickyLaptopWrapper = document.getElementById('sticky-laptop-wrapper');
    const stickyPhaseBadge = document.getElementById('sticky-phase-badge');
    const stickyTargetName = document.getElementById('sticky-target-name');
    const stickyProgressFill = document.getElementById('sticky-progress-fill');
    const pulsePoints = [
      document.getElementById('pulse-point-1'),
      document.getElementById('pulse-point-2'),
      document.getElementById('pulse-point-3'),
      document.getElementById('pulse-point-4')
    ];

    if (stickySection && stickyStepCards.length) {
      stickyStepCards.forEach((stepCard, i) => {
        ScrollTrigger.create({
          trigger: stepCard,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => activateStickyStep(i + 1, stepCard),
          onEnterBack: () => activateStickyStep(i + 1, stepCard)
        });
      });

      function activateStickyStep(stepNum, cardEl) {
        // Highlight active step card styling
        stickyStepCards.forEach(c => {
          c.classList.remove('border-[#FD802E]', 'bg-[#1a2f3d]', 'shadow-lg');
          c.classList.add('border-[#233D4C]', 'bg-[#172731]');
        });
        cardEl.classList.remove('border-[#233D4C]', 'bg-[#172731]');
        cardEl.classList.add('border-[#FD802E]', 'bg-[#1a2f3d]', 'shadow-lg');

        // Update telemetry data
        if (stickyPhaseBadge) stickyPhaseBadge.textContent = \`Phase 0\${stepNum} Active\`;
        if (stickyTargetName) stickyTargetName.textContent = cardEl.getAttribute('data-title') || '';
        if (stickyProgressFill) stickyProgressFill.style.width = cardEl.getAttribute('data-progress') || \`\${stepNum * 25}%\`;

        // Switch pulse target points
        pulsePoints.forEach((point, pIdx) => {
          if (!point) return;
          if (pIdx === (stepNum - 1)) {
            point.classList.remove('opacity-0');
            point.classList.add('opacity-100');
          } else {
            point.classList.add('opacity-0');
            point.classList.remove('opacity-100');
          }
        });

        // 3D perspective shift on laptop wrapper based on step
        if (stickyLaptopWrapper && isDesktop) {
          const angles = [
            { rx: 10, ry: -12, s: 1 },
            { rx: 22, ry: 2, s: 1.05 },
            { rx: 14, ry: 16, s: 1.02 },
            { rx: 6, ry: -16, s: 0.98 }
          ];
          const a = angles[stepNum - 1] || angles[0];
          gsap.to(stickyLaptopWrapper, {
            rotateX: a.rx,
            rotateY: a.ry,
            scale: a.s,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      }
    }`;

const newBlock = `    // --- FEATURE 5: Hardware Diagnostic Laboratory (2 Left Cards: Phase 1,2 & 3,4) ---
    const stickySection = document.getElementById('sticky-diagnostic-section');
    const stickyStepCards = document.querySelectorAll('.sticky-step-card');
    const leftCard1 = document.getElementById('diagnostic-card-phase-1-2');
    const leftCard2 = document.getElementById('diagnostic-card-phase-3-4');

    if (stickySection && stickyStepCards.length) {
      stickyStepCards.forEach((stepCard, i) => {
        ScrollTrigger.create({
          trigger: stepCard,
          start: 'top 65%',
          end: 'bottom 35%',
          onEnter: () => activateStepHighlight(i + 1, stepCard),
          onEnterBack: () => activateStepHighlight(i + 1, stepCard)
        });
      });

      function activateStepHighlight(stepNum, cardEl) {
        // Highlight active step card on right
        stickyStepCards.forEach(c => {
          c.classList.remove('border-[#FD802E]', 'bg-[#1a2f3d]', 'shadow-lg');
          c.classList.add('border-[#233D4C]', 'bg-[#172731]');
        });
        cardEl.classList.remove('border-[#233D4C]', 'bg-[#172731]');
        cardEl.classList.add('border-[#FD802E]', 'bg-[#1a2f3d]', 'shadow-lg');

        // Dynamically highlight corresponding left card
        if (stepNum <= 2) {
          if (leftCard1) {
            leftCard1.classList.add('border-[#FD802E]', 'shadow-2xl', 'shadow-[#FD802E]/20');
            leftCard1.classList.remove('border-[#233D4C]');
          }
          if (leftCard2) {
            leftCard2.classList.remove('border-[#FD802E]', 'shadow-2xl', 'shadow-[#FD802E]/20');
            leftCard2.classList.add('border-[#233D4C]');
          }
        } else {
          if (leftCard2) {
            leftCard2.classList.add('border-[#FD802E]', 'shadow-2xl', 'shadow-[#FD802E]/20');
            leftCard2.classList.remove('border-[#233D4C]');
          }
          if (leftCard1) {
            leftCard1.classList.remove('border-[#FD802E]', 'shadow-2xl', 'shadow-[#FD802E]/20');
            leftCard1.classList.add('border-[#233D4C]');
          }
        }
      }
    }`;

if (animJs.includes(oldBlock)) {
  animJs = animJs.replace(oldBlock, newBlock);
  fs.writeFileSync('assets/js/animations.js', animJs, 'utf8');
  console.log('Successfully updated animations.js for 2 diagnostic laboratory cards!');
} else {
  console.log('Old block not found directly in animations.js, checking...');
}
