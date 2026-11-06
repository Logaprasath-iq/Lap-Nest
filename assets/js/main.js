/**
 * LAPNEST - Core Website Utilities, Back-To-Top, FAQ Accordion & Testimonial Sliders
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. FAQ Accordion Components (Universal Interactive Click-to-Dropdown)
  function initFaqAccordions() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
      // Remove any existing clone listeners by replacing element or flagging
      if (trigger.dataset.faqBound) return;
      trigger.dataset.faqBound = "true";

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const item = trigger.closest('.faq-item');
        if (!item) return;
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        if (!answer) return;

        const isClosed = answer.classList.contains('hidden');

        // Close sibling accordions in same group for clean UX
        const group = item.closest('.faq-group');
        if (group) {
          group.querySelectorAll('.faq-item').forEach(sibling => {
            if (sibling !== item) {
              const sibAns = sibling.querySelector('.faq-answer');
              const sibIcon = sibling.querySelector('.faq-icon');
              const sibTrig = sibling.querySelector('.faq-trigger');
              if (sibAns) sibAns.classList.add('hidden');
              if (sibIcon) {
                sibIcon.classList.remove('rotate-180', 'text-[#FD802E]');
              }
              if (sibTrig) sibTrig.classList.remove('text-[#FD802E]');
            }
          });
        }

        if (isClosed) {
          answer.classList.remove('hidden');
          if (icon) {
            icon.classList.add('rotate-180', 'text-[#FD802E]');
          }
          trigger.classList.add('text-[#FD802E]');
        } else {
          answer.classList.add('hidden');
          if (icon) {
            icon.classList.remove('rotate-180', 'text-[#FD802E]');
          }
          trigger.classList.remove('text-[#FD802E]');
        }
      });
    });
  }

  initFaqAccordions();

  // 3. Testimonial Carousel
  const testimonialContainer = document.getElementById('testimonial-slider');
  if (testimonialContainer) {
    const slides = testimonialContainer.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, idx) => {
        if (idx === index) {
          slide.classList.remove('hidden', 'opacity-0');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.add('hidden', 'opacity-0');
          slide.classList.remove('opacity-100');
        }
      });
    }

    if (slides.length > 0) {
      showSlide(0);

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        });
      }

      // Auto rotation every 6 seconds
      setInterval(() => {
        if (!document.hidden && testimonialContainer.offsetParent !== null) {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }
      }, 6000);
    }
  }

  // 4. Pricing Billing Period Switcher (Monthly vs Quarterly)
  const billingToggle = document.getElementById('rental-billing-toggle');
  if (billingToggle) {
    const monthlyPrices = document.querySelectorAll('.rental-price-monthly');
    const quarterlyPrices = document.querySelectorAll('.rental-price-quarterly');

    billingToggle.addEventListener('change', () => {
      const isQuarterly = billingToggle.checked;
      if (isQuarterly) {
        monthlyPrices.forEach(el => el.classList.add('hidden'));
        quarterlyPrices.forEach(el => el.classList.remove('hidden'));
      } else {
        monthlyPrices.forEach(el => el.classList.remove('hidden'));
        quarterlyPrices.forEach(el => el.classList.add('hidden'));
      }
    });
  }

  // 5. Countdown timer for coming-soon.html
  const countdownContainer = document.getElementById('countdown-timer');
  if (countdownContainer) {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 18); // 18 days from now

    function updateTimer() {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById('count-days');
      const hoursEl = document.getElementById('count-hours');
      const minsEl = document.getElementById('count-mins');
      const secsEl = document.getElementById('count-secs');

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 6. Hero Video Autoplay Assurance
  const heroVideo = document.getElementById('hero-laptop-video');
  if (heroVideo) {
    heroVideo.muted = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback, ensure muted and retry on first interaction
        heroVideo.muted = true;
        const startVideo = () => {
          heroVideo.play().catch(() => {});
          document.removeEventListener('click', startVideo);
          document.removeEventListener('touchstart', startVideo);
        };
        document.addEventListener('click', startVideo, { once: true });
        document.addEventListener('touchstart', startVideo, { once: true });
      });
    }
  }
});
