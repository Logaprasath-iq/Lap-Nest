/**
 * LAPNEST - Realistic 3D Visual Effects Engine
 * CSS 3D Transforms, Perspective, Mouse Parallax, 3D Card Tilt & Interactive Hero Laptop
 */

(function () {
  'use strict';

  // Check if device is touch or reduced motion
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Interactive 3D Product & Feature Card Tilt
     ========================================================================== */
  function init3DTiltCards() {
    if (isTouchDevice || prefersReducedMotion) return;

    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
      // Add reflection highlight element if not present
      let reflection = card.querySelector('.tilt-card-reflection');
      if (!reflection) {
        reflection = document.createElement('div');
        reflection.className = 'tilt-card-reflection';
        card.appendChild(reflection);
      }

      let rafId = null;

      function onMouseMove(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        // Max tilt angles
        const maxAngle = 12;
        const rotateX = -percentY * maxAngle;
        const rotateY = percentX * maxAngle;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

          // Adjust specular reflection position and brightness
          if (reflection) {
            const posX = (x / rect.width) * 100;
            const posY = (y / rect.height) * 100;
            reflection.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255, 255, 255, 0.18) 0%, rgba(253, 128, 46, 0.15) 35%, transparent 70%)`;
            reflection.style.opacity = '1';
          }
        });
      }

      function onMouseLeave() {
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease';
        if (reflection) {
          reflection.style.opacity = '0';
        }
      }

      function onMouseEnter() {
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease';
      }

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }

  /* ==========================================================================
     2. Interactive 3D Hero Laptop Model
     ========================================================================== */
  function init3DHeroLaptop() {
    const heroSection = document.getElementById('hero-section') || document.querySelector('.hero-3d-container');
    const laptopModel = document.getElementById('hero-3d-laptop');
    if (!laptopModel || prefersReducedMotion) return;

    let targetRotX = 14;
    let targetRotY = -18;
    let currentRotX = 14;
    let currentRotY = -18;
    let targetTransZ = 0;
    let currentTransZ = 0;

    let isHovering = false;

    if (!isTouchDevice && heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        isHovering = true;
        const rect = heroSection.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
        const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        // Dynamic 3D rotation according to mouse
        targetRotX = 14 - normY * 16;
        targetRotY = -18 + normX * 22;
        targetTransZ = Math.abs(normX * 25);
      });

      heroSection.addEventListener('mouseleave', () => {
        isHovering = false;
        targetRotX = 14;
        targetRotY = -18;
        targetTransZ = 0;
      });
    }

    // Smooth physics loop (lerp)
    function renderLoop() {
      const ease = isHovering ? 0.08 : 0.04;

      // Add gentle autonomous floating when idle
      const time = Date.now() * 0.0015;
      const idleFloatX = isHovering ? 0 : Math.sin(time) * 3;
      const idleFloatY = isHovering ? 0 : Math.cos(time * 0.8) * 4;
      const idleTransY = Math.sin(time) * 10;

      currentRotX += (targetRotX + idleFloatX - currentRotX) * ease;
      currentRotY += (targetRotY + idleFloatY - currentRotY) * ease;
      currentTransZ += (targetTransZ - currentTransZ) * ease;

      laptopModel.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(${currentTransZ.toFixed(2)}px) translateY(${idleTransY.toFixed(1)}px)`;

      requestAnimationFrame(renderLoop);
    }

    renderLoop();
  }

  /* ==========================================================================
     3. 3D Flip Card Interactive Handling
     ========================================================================== */
  function init3DFlipCards() {
    const flipContainers = document.querySelectorAll('.flip-card-container');
    flipContainers.forEach(container => {
      const card = container.querySelector('.flip-card');
      const flipBtn = container.querySelector('.flip-toggle-btn');

      if (flipBtn && card) {
        flipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          card.classList.toggle('is-flipped');
        });
      }

      if (isTouchDevice && card) {
        container.addEventListener('click', () => {
          card.classList.toggle('is-flipped');
        });
      }
    });
  }

  /* ==========================================================================
     4. Interactive Canvas Micro-Particles for Hero
     ========================================================================== */
  function initHeroParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const count = window.innerWidth < 768 ? 25 : 55;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(210, 159, 34, ${(1 - dist / 110) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(p => {
        // Subtle mouse attraction / repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 159, 34, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FD802E';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    init3DTiltCards();
    init3DHeroLaptop();
    init3DFlipCards();
    initHeroParticles();
  });

  // Export for dynamic content rendering
  window.init3DTiltCards = init3DTiltCards;
})();
