/**
 * LAPNEST - Sticky Navbar, Mobile Drawer, Search Modal & Active Links
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const searchModal = document.getElementById('search-modal');
  const openSearchBtns = document.querySelectorAll('.open-search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');

  // Sticky Navbar scroll effect
  function handleNavbarScroll() {
    if (!navbar) return;
    const isLight = document.documentElement.classList.contains('light');
    if (window.scrollY > 30) {
      if (isLight) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-[#233D4C]/30');
        navbar.classList.remove('bg-[#0e181f]/95', 'bg-[#0e181f]/90', 'bg-transparent', 'border-transparent');
      } else {
        navbar.classList.add('bg-[#0e181f]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#233D4C]');
        navbar.classList.remove('bg-white/95', 'bg-white/90', 'bg-transparent', 'border-transparent');
      }
    } else {
      if (isLight) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-[#233D4C]/25');
        navbar.classList.remove('bg-[#0e181f]/90', 'bg-[#0e181f]/95', 'bg-transparent', 'border-transparent', 'shadow-md', 'shadow-lg');
      } else {
        navbar.classList.add('bg-[#0e181f]/90', 'backdrop-blur-md', 'border-b', 'border-[#233D4C]');
        navbar.classList.remove('bg-white/90', 'bg-white/95', 'bg-transparent', 'border-transparent', 'shadow-md', 'shadow-lg');
      }
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  window.addEventListener('themeChanged', handleNavbarScroll);
  handleNavbarScroll();

  // Desktop Navigation Dropdowns (Home Dropdown with Zero-Gap Hover & Click Persistence)
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdownContainers.forEach(container => {
    const btn = container.querySelector('.dropdown-btn') || container.querySelector('button');
    const menuWrapper = container.querySelector('.dropdown-menu-wrapper') || container.querySelector('.dropdown-menu');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = container.classList.contains('is-open');
        // Close other dropdowns
        dropdownContainers.forEach(c => {
          if (c !== container) c.classList.remove('is-open');
        });
        container.classList.toggle('is-open', !isOpen);
      });
    }

    // Keep menu open smoothly on mouse enter, with small close delay to avoid early dismissal
    let closeTimeout;
    container.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
    });

    container.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        container.classList.remove('is-open');
      }, 250);
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      dropdownContainers.forEach(c => c.classList.remove('is-open'));
    }
  });

  // Highlight active page link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-[#FD802E]', 'font-bold');
      link.classList.remove('text-[#9fb3be]', 'text-gray-300', 'text-white');
    }
  });

  // Highlight active home in dropdown and mobile drawer
  const isHome2 = currentPath === 'home-2.html';
  const isHome1 = currentPath === 'index.html' || currentPath === '' || currentPath.endsWith('/');

  document.querySelectorAll('.dropdown-menu-wrapper').forEach(wrapper => {
    const h1 = wrapper.querySelector('a[href="index.html"]');
    const h2 = wrapper.querySelector('a[href="home-2.html"]');
    if (h1 && h2) {
      const dot1 = h1.querySelector('span.rounded-full');
      const dot2 = h2.querySelector('span.rounded-full');
      if (isHome2) {
        if (dot1) dot1.className = 'w-2 h-2 rounded-full bg-[#233D4C]';
        if (dot2) dot2.className = 'w-2 h-2 rounded-full bg-[#FD802E]';
        h1.classList.remove('text-white', 'is-active-home');
        h1.classList.add('text-[#9fb3be]');
        h2.classList.remove('text-[#9fb3be]');
        h2.classList.add('text-white', 'is-active-home');
      } else if (isHome1) {
        if (dot1) dot1.className = 'w-2 h-2 rounded-full bg-[#FD802E]';
        if (dot2) dot2.className = 'w-2 h-2 rounded-full bg-[#233D4C]';
        h1.classList.remove('text-[#9fb3be]');
        h1.classList.add('text-white', 'is-active-home');
        h2.classList.remove('text-white', 'is-active-home');
        h2.classList.add('text-[#9fb3be]');
      }
    }
  });

  // Highlight in mobile home accordion
  document.querySelectorAll('.mobile-dropdown-trigger + div').forEach(box => {
    const mobH1 = box.querySelector('a[href="index.html"]');
    const mobH2 = box.querySelector('a[href="home-2.html"]');
    if (mobH1 && mobH2) {
      if (isHome2) {
        mobH1.className = 'block py-2 px-3 text-sm text-[#9fb3be] hover:text-white hover:bg-[#172731] rounded-md';
        mobH2.className = 'block py-2 px-3 text-sm text-[#FD802E] font-semibold hover:bg-[#172731] rounded-md';
      } else if (isHome1) {
        mobH1.className = 'block py-2 px-3 text-sm text-[#FD802E] font-semibold hover:bg-[#172731] rounded-md';
        mobH2.className = 'block py-2 px-3 text-sm text-[#9fb3be] hover:text-white hover:bg-[#172731] rounded-md';
      }
    }
  });

  // Mobile Drawer
  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-full', '-translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.classList.remove('hidden', 'opacity-0');
      mobileDrawerBackdrop.classList.add('opacity-100');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add(isRtl ? '-translate-x-full' : 'translate-x-full');
    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.classList.remove('opacity-100');
      mobileDrawerBackdrop.classList.add('opacity-0');
      setTimeout(() => {
        mobileDrawerBackdrop.classList.add('hidden');
      }, 300);
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Mobile submenu accordions
  const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
  mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetMenu = trigger.nextElementSibling;
      const arrow = trigger.querySelector('.dropdown-arrow');
      if (targetMenu) {
        targetMenu.classList.toggle('hidden');
        if (arrow) {
          arrow.classList.toggle('rotate-180');
        }
      }
    });
  });

  // Global Quick Search (if trigger present in page or keyboard shortcut Ctrl+K)
  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('hidden');
    setTimeout(() => {
      searchModal.classList.remove('opacity-0');
      if (searchInput) searchInput.focus();
    }, 10);
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.add('opacity-0');
    setTimeout(() => {
      searchModal.classList.add('hidden');
      if (searchInput) searchInput.value = '';
    }, 200);
  }

  openSearchBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', closeSearch);
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // Keyboard shortcut Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal && !searchModal.classList.contains('hidden')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape') {
      closeSearch();
      closeMobileMenu();
      dropdownContainers.forEach(c => c.classList.remove('is-open'));
    }
  });

  // Search input filtering demo
  if (searchInput && searchResults) {
    const catalogIndex = [
      { title: 'Dell Inspiron 15 (Core i5 13th Gen, 16GB)', category: 'Laptops', url: 'product-details.html?id=1' },
      { title: 'Lenovo ThinkPad E14 (AMD Ryzen 7, 16GB)', category: 'Business', url: 'product-details.html?id=3' },
      { title: 'ASUS ROG Strix G16 (RTX 4060, 165Hz)', category: 'Gaming', url: 'product-details.html?id=4' },
      { title: 'Apple MacBook Air M2 (16GB Unified, 512GB)', category: 'Ultrabook', url: 'product-details.html?id=6' },
      { title: 'Screen & Panel Replacement (Same Day)', category: 'Repair', url: 'service-details.html?service=screen' },
      { title: 'NVMe SSD Speed Upgrade (500GB / 1TB / 2TB)', category: 'Upgrade', url: 'service-details.html?service=ssd' },
      { title: 'Enterprise Laptop Rental Program', category: 'Rentals', url: 'pricing.html#rentals' }
    ];

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = '<div class="p-6 text-center text-[#9fb3be] text-sm">Type to search laptops, repair services, rental plans and accessories...</div>';
        return;
      }
      const matched = catalogIndex.filter(item => 
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );

      if (matched.length === 0) {
        searchResults.innerHTML = `<div class="p-6 text-center text-[#9fb3be] text-sm">No results found for "${q}". Try "ThinkPad", "Screen", or "MacBook".</div>`;
      } else {
        searchResults.innerHTML = matched.map(m => `
          <a href="${m.url}" class="flex items-center justify-between p-3 rounded-xl hover:bg-[#233D4C] transition-colors border-b border-[#233D4C]/30 text-left">
            <div>
              <p class="text-sm font-semibold text-white">${m.title}</p>
              <span class="text-[10px] text-[#FD802E] font-medium tracking-wide uppercase">${m.category}</span>
            </div>
            <span class="text-xs text-[#FD802E] font-medium">View ↗</span>
          </a>
        `).join('');
      }
    });
  }
});
