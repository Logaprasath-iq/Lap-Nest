/**
 * LAPNEST - Master GSAP & ScrollTrigger Animation Engine
 * Universal, High-Performance, Mobile-Optimized Scroll Animations
 * Features:
 *  1. Scroll Reveal (Sections, Headings, Subtitles, Cards)
 *  2. Staggered Animations (Product, Service & Blog Grids)
 *  3. 3D Scroll Perspective Transforms (Laptop Products & Diagnostic Visuals)
 *  4. Parallax Scrolling (Ambient Orbs & Background Tech Elements)
 *  5. Sticky Scroll Diagnostic Architecture (Pinned 3D Visual with Step Transitions)
 *  6. Image Reveal & Smooth Transitions
 *  7. Reverse Animation (Natural Easing & Smooth Reversible Entrance/Exit)
 *  8. Bulletproof Fail-Safe (No blank/disappearing cards across 360px, 768px, 1024px)
 *  9. Dynamic Re-init Support (For products.js filtering and DOM updates)
 */

(function () {
  'use strict';

  // Check if reduced motion is requested by user
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll Progress Bar
  function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
          progressBar.style.width = scrolled + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. Animated Number Counters
  function initCounters() {
    const counters = document.querySelectorAll('.counter-val');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target.toLocaleString('en-IN') + (counter.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current).toLocaleString('en-IN') + (counter.getAttribute('data-suffix') || '');
            }
          }, stepTime);

          obs.unobserve(counter);
        }
      });
    }, { threshold: 0.15 });

    counters.forEach(counter => observer.observe(counter));
  }

  // 3. Main GSAP & ScrollTrigger Architecture
  function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      initFallbackAnimations();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // If user prefers reduced motion, ensure everything is visible without animation
    if (prefersReducedMotion) {
      document.querySelectorAll('.gsap-fade-up, .equal-card, .tilt-card, .horizontal-card, article').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 768;

    // --- FEATURE 1 & 2: Staggered Scroll Reveal for Card Grids ---
    const mainSections = document.querySelectorAll('main section, section');
    mainSections.forEach(section => {
      const grids = section.querySelectorAll('.grid, #products-grid-container, .equal-card-grid');
      grids.forEach(grid => {
        if (grid.closest('.equal-card') || grid.closest('.tilt-card') || grid.closest('article')) return;
        
        const cards = Array.from(grid.children).filter(child => {
          return child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE' && window.getComputedStyle(child).display !== 'none';
        });

        if (cards.length >= 2) {
          gsap.fromTo(cards,
            {
              opacity: 0,
              y: 35,
              scale: 0.98
            },
            {
              scrollTrigger: {
                trigger: grid,
                start: 'top 88%',
                toggleActions: 'play none none reverse'
              },
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: 'power2.out',
              clearProps: 'transform'
            }
          );
        }
      });
    });

    // --- FEATURE 3: 3D Scroll Perspective Transforms on Laptop Cards ---
    if (isDesktop) {
      const tiltCards = document.querySelectorAll('.tilt-card');
      tiltCards.forEach(card => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'bottom 5%',
            scrub: 1.2
          },
          rotationX: 2,
          rotationY: -2,
          ease: 'none'
        });
      });
    }

    // --- FEATURE 4: Parallax Background Orbs ---
    const ambientOrbs = document.querySelectorAll('.blur-3xl, .blur-2xl');
    ambientOrbs.forEach((orb, i) => {
      const speed = (i % 2 === 0) ? -40 : 40;
      gsap.to(orb, {
        scrollTrigger: {
          trigger: orb.parentElement || orb,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        y: speed,
        ease: 'none'
      });
    });

    // --- FEATURE 5: Hardware Diagnostic Laboratory (2 Left Cards: Phase 1,2 & 3,4) ---
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
    }

    // --- FEATURE 6: Image Reveal with Natural Brightness & Scale ---
    const imageRevealWrappers = document.querySelectorAll('.aspect-\[16\/10\], .aspect-\[4\/3\], .deal-card .overflow-hidden');
    imageRevealWrappers.forEach(wrap => {
      const img = wrap.querySelector('img');
      if (!img) return;

      gsap.fromTo(img,
        {
          scale: 1.08,
          filter: 'brightness(0.92)'
        },
        {
          scrollTrigger: {
            trigger: wrap,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          },
          scale: 1,
          filter: 'brightness(1)',
          duration: 0.7,
          ease: 'power2.out'
        }
      );
    });

    // --- FEATURE 7: Heading & Text Scroll Reveal ---
    const textRevealElements = document.querySelectorAll('.gsap-fade-up');
    textRevealElements.forEach(el => {
      if (el.closest('.hero-section')) return;

      gsap.fromTo(el,
        {
          opacity: 0,
          y: 30
        },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform'
        }
      );
    });

    // --- FEATURE 8: Automated Safety Fail-Safe (Ensures Zero Blank/Hidden Elements) ---
    setTimeout(() => {
      document.querySelectorAll('.gsap-fade-up, .equal-card, .tilt-card').forEach(el => {
        if (window.getComputedStyle(el).opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
    }, 600);
  }

  // Fallback IntersectionObserver animation engine (Mobile or No-GSAP)
  function initFallbackAnimations() {
    const cards = document.querySelectorAll('.equal-card, .tilt-card, .horizontal-card, .gsap-fade-up');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    cards.forEach(card => {
      card.style.opacity = '1';
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      observer.observe(card);
    });
  }

  function init() {
    initScrollProgressBar();
    initCounters();
    initGSAPAnimations();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose re-init for dynamic filters or window resizing
  window.reinitScrollAnimations = function () {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
    const dynamicCards = document.querySelectorAll('#products-grid-container > article');
    if (dynamicCards.length && typeof gsap !== 'undefined') {
      gsap.fromTo(dynamicCards,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out', clearProps: 'transform' }
      );
    }
    if (window.init3DTiltCards) {
      window.init3DTiltCards();
    }
  };

  // Debounced resize handler for ScrollTrigger recalculations
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 250);
  });

})();
