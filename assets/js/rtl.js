/**
 * LAPNEST - RTL / LTR Direction Manager
 * Persisted in localStorage
 */

(function () {
  'use strict';

  const RTL_KEY = 'lapnest_dir';
  const htmlElement = document.documentElement;

  // Initialize direction immediately
  const savedDir = localStorage.getItem(RTL_KEY);
  if (savedDir === 'rtl') {
    htmlElement.setAttribute('dir', 'rtl');
  } else {
    htmlElement.setAttribute('dir', 'ltr');
  }

  function updateToggleButtons(dir) {
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      const badge = btn.querySelector('.dir-badge');
      if (badge) {
        badge.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }

  window.toggleRTL = function () {
    const currentDir = htmlElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

    htmlElement.setAttribute('dir', newDir);
    localStorage.setItem(RTL_KEY, newDir);
    updateToggleButtons(newDir);

    window.dispatchEvent(new CustomEvent('directionChanged', { detail: { dir: newDir } }));
  };

  document.addEventListener('DOMContentLoaded', () => {
    const currentDir = htmlElement.getAttribute('dir') || 'ltr';
    updateToggleButtons(currentDir);

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleRTL();
      });
    });
  });
})();
