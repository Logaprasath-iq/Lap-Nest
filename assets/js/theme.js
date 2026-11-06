/**
 * LAPNEST - Theme Manager (Dark / Light Mode)
 * Default: Dark Mode (#19171b)
 * Persisted in localStorage
 */

(function () {
  'use strict';

  const THEME_KEY = 'lapnest_theme';
  const htmlElement = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlElement.classList.add('light', 'light-theme');
      htmlElement.classList.remove('dark');
      if (document.body) {
        document.body.classList.add('light', 'light-theme');
        document.body.classList.remove('dark');
      }
    } else {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light', 'light-theme');
      if (document.body) {
        document.body.classList.add('dark');
        document.body.classList.remove('light', 'light-theme');
      }
    }
  }

  // Initialize theme immediately to prevent FOUC
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');

  function updateLogoForTheme(theme) {
    const brandLogos = document.querySelectorAll('.brand-logo-img');
    brandLogos.forEach(logo => {
      if (logo.closest('footer')) {
        logo.src = 'assets/images/logo/logo-dark.svg';
        return;
      }
      if (theme === 'light') {
        logo.src = logo.dataset.light || 'assets/images/logo/logo-light.svg';
      } else {
        logo.src = logo.dataset.dark || 'assets/images/logo/logo-dark.svg';
      }
    });
  }

  function updateToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        if (theme === 'light') {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        } else {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      }
    });
  }

  window.toggleTheme = function () {
    const isDark = !htmlElement.classList.contains('light');
    const newTheme = isDark ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateLogoForTheme(newTheme);
    updateToggleButtons(newTheme);

    // Notify any active charts or 3D scenes
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
  };

  document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = htmlElement.classList.contains('light') ? 'light' : 'dark';
    applyTheme(currentTheme);
    updateLogoForTheme(currentTheme);
    updateToggleButtons(currentTheme);

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  });
})();
