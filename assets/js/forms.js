/**
 * LAPNEST - Interactive Forms Validation, Real-Time Field Sanitization & Dynamic Order Calculation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Helper: Toast notification generator
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item pointer-events-auto flex items-center gap-3 px-4 py-3.5 rounded-xl shadow-xl border text-sm font-semibold transition-all duration-300 transform translate-y-4 opacity-0 ${
      type === 'success'
        ? 'toast-success bg-[#172731] border-[#FD802E] text-white shadow-[#FD802E]/20'
        : 'toast-error bg-red-950/95 border-red-500 text-white shadow-red-500/20'
    }`;

    const icon = type === 'success'
      ? `<svg class="w-5 h-5 text-[#FD802E] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`
      : `<svg class="w-5 h-5 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>`;

    toast.innerHTML = `${icon}<span class="toast-text leading-snug">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  /* ==========================================================================
     GLOBAL FORM VALIDATION & REAL-TIME INPUT RESTRICTIONS
     ========================================================================== */

  // Email regex requiring proper username, '@', valid domain name and at least 2-letter TLD
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Phone regex: Exactly 10 digits starting with 6, 7, 8, or 9 (Indian telecom standard)
  const PHONE_REGEX = /^[6-9]\d{9}$/;
  // PIN code regex: Exactly 6 digits
  const PINCODE_REGEX = /^[1-9]\d{5}$/;
  // Name/City/State regex: Letters, spaces, apostrophes, hyphens, and periods only
  const ALPHA_TEXT_REGEX = /^[A-Za-z\s.'-]+$/;

  /**
   * Determine logical field category from input attributes
   */
  function getInputType(input) {
    const name = (input.name || '').toLowerCase();
    const id = (input.id || '').toLowerCase();
    const type = (input.type || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();

    if (type === 'email' || name.includes('email') || id.includes('email')) {
      return 'email';
    }
    if (type === 'tel' || name.includes('phone') || id.includes('phone') || name.includes('mobile') || id.includes('mobile')) {
      return 'phone';
    }
    if (name.includes('pincode') || id.includes('pincode') || name.includes('pin') || id.includes('pin') || name.includes('postal') || id.includes('postal') || name.includes('zip') || id.includes('zip')) {
      return 'pincode';
    }
    if (name.includes('city') || id.includes('city')) {
      return 'city';
    }
    if (name.includes('state') || id.includes('state')) {
      return 'state';
    }
    if (name.includes('name') || id.includes('name') || placeholder.includes('full name') || placeholder.includes('your name')) {
      return 'name';
    }
    if (name.includes('address') || id.includes('address')) {
      return 'address';
    }
    return 'general';
  }

  /**
   * Display inline error message with red styling
   */
  function showInputError(input, message) {
    input.classList.remove('border-[#233D4C]', 'border-emerald-500');
    input.classList.add('border-red-500', 'focus:border-red-500');

    let errorElem = input.parentElement.querySelector('.field-error-msg');
    if (!errorElem) {
      errorElem = document.createElement('p');
      errorElem.className = 'field-error-msg text-[11px] text-red-400 mt-1 font-medium flex items-center gap-1.5 transition-all';
      input.parentElement.appendChild(errorElem);
    }
    errorElem.innerHTML = `<svg class="w-3.5 h-3.5 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg><span>${message}</span>`;
  }

  /**
   * Clear inline error message and restore standard styling
   */
  function clearInputError(input) {
    input.classList.remove('border-red-500', 'focus:border-red-500');
    input.classList.add('border-[#233D4C]');

    const errorElem = input.parentElement.querySelector('.field-error-msg');
    if (errorElem) {
      errorElem.remove();
    }
  }

  /**
   * Validate a single input field according to strict rules
   * Returns: { valid: boolean, message: string }
   */
  function validateField(input) {
    const val = input.value.trim();
    const fieldType = getInputType(input);
    const isRequired = input.hasAttribute('required');

    if (!val) {
      if (isRequired) {
        return { valid: false, message: 'This field is required.' };
      }
      return { valid: true, message: '' };
    }

    switch (fieldType) {
      case 'name':
        // No numbers allowed, minimum 3 letters
        if (/\d/.test(val)) {
          return { valid: false, message: 'Numbers are not allowed in name. Letters only.' };
        }
        if (!ALPHA_TEXT_REGEX.test(val)) {
          return { valid: false, message: 'Name must contain letters only.' };
        }
        if (val.replace(/[^A-Za-z]/g, '').length < 3) {
          return { valid: false, message: 'Name must have at least 3 letters.' };
        }
        break;

      case 'phone':
        // Digits only, exactly 10 digits, starts with 6-9
        if (/[^0-9]/.test(val)) {
          return { valid: false, message: 'Letters and symbols are not allowed. Numbers only.' };
        }
        if (val.length !== 10) {
          return { valid: false, message: `Phone must be exactly 10 digits (${val.length}/10 entered).` };
        }
        if (!/^[6-9]/.test(val)) {
          return { valid: false, message: 'Mobile number must start with 6, 7, 8, or 9.' };
        }
        break;

      case 'email':
        // Must have '@' and valid domain
        if (!val.includes('@')) {
          return { valid: false, message: "Email must include '@' symbol (e.g. name@domain.com)." };
        }
        if (!EMAIL_REGEX.test(val)) {
          return { valid: false, message: "Please enter a complete valid email (e.g. name@example.com)." };
        }
        break;

      case 'city':
        // Letters only, minimum 2 characters
        if (/\d/.test(val)) {
          return { valid: false, message: 'City cannot contain numbers. Letters only.' };
        }
        if (!ALPHA_TEXT_REGEX.test(val)) {
          return { valid: false, message: 'City must contain letters only.' };
        }
        if (val.length < 2) {
          return { valid: false, message: 'City must be at least 2 characters.' };
        }
        break;

      case 'state':
        // Letters only, minimum 2 characters
        if (/\d/.test(val)) {
          return { valid: false, message: 'State cannot contain numbers. Letters only.' };
        }
        if (!ALPHA_TEXT_REGEX.test(val)) {
          return { valid: false, message: 'State must contain letters only.' };
        }
        if (val.length < 2) {
          return { valid: false, message: 'State must be at least 2 characters.' };
        }
        break;

      case 'pincode':
        // Digits only, exactly 6 digits
        if (/[^0-9]/.test(val)) {
          return { valid: false, message: 'Letters are not allowed in PIN code. Numbers only.' };
        }
        if (val.length !== 6) {
          return { valid: false, message: `PIN code must be exactly 6 digits (${val.length}/6 entered).` };
        }
        if (!PINCODE_REGEX.test(val)) {
          return { valid: false, message: 'Please enter a valid 6-digit Indian PIN code.' };
        }
        break;

      case 'address':
        if (val.length < 5) {
          return { valid: false, message: 'Please enter a full address (at least 5 characters).' };
        }
        break;

      default:
        if (isRequired && val.length < 1) {
          return { valid: false, message: 'This field cannot be empty.' };
        }
        break;
    }

    return { valid: true, message: '' };
  }

  /**
   * Bind real-time input sanitization and validation listeners across all inputs
   */
  function setupInputsValidation(container = document) {
    const inputs = container.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="radio"]):not([type="checkbox"]), textarea');

    inputs.forEach(input => {
      const fieldType = getInputType(input);

      // Real-time keystroke and input sanitization
      input.addEventListener('input', () => {
        let cursor = input.selectionStart;
        const originalVal = input.value;

        if (fieldType === 'name' || fieldType === 'city' || fieldType === 'state') {
          // Strictly prevent / strip any digits from name, city, and state
          const sanitized = originalVal.replace(/[0-9]/g, '');
          if (sanitized !== originalVal) {
            input.value = sanitized;
            if (cursor !== null) input.setSelectionRange(Math.max(0, cursor - 1), Math.max(0, cursor - 1));
          }
        } else if (fieldType === 'phone') {
          // Strictly prevent / strip any non-digit character and limit to 10 digits
          const sanitized = originalVal.replace(/\D/g, '').slice(0, 10);
          if (sanitized !== originalVal) {
            input.value = sanitized;
          }
        } else if (fieldType === 'pincode') {
          // Strictly prevent / strip any non-digit character and limit to 6 digits
          const sanitized = originalVal.replace(/\D/g, '').slice(0, 6);
          if (sanitized !== originalVal) {
            input.value = sanitized;
          }
        }

        // Clear error as user corrects the field
        const check = validateField(input);
        if (check.valid) {
          clearInputError(input);
        }
      });

      // Blur validation
      input.addEventListener('blur', () => {
        const check = validateField(input);
        if (!check.valid) {
          showInputError(input, check.message);
        } else {
          clearInputError(input);
        }
      });
    });
  }

  // Initialize global real-time validation
  setupInputsValidation(document);

  /* ==========================================================================
     1. ORDER PAGE CONTROLLER (order.html)
     ========================================================================== */
  const orderForm = document.getElementById('laptop-order-form');
  if (orderForm) {
    const productSelect = document.getElementById('order-product-select');
    const qtyInput = document.getElementById('order-quantity');
    const summaryImg = document.getElementById('summary-product-img');
    const summaryTitle = document.getElementById('summary-product-title');
    const summarySpecs = document.getElementById('summary-product-specs');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryDiscount = document.getElementById('summary-discount');
    const summaryTotal = document.getElementById('summary-total');
    const couponInput = document.getElementById('order-coupon-code');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponMsg = document.getElementById('coupon-message');

    let appliedDiscountPercent = 0;

    // Check URL parameters for preselected product
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedId = urlParams.get('product') || 'dell-inspiron';

    // Populate Product Dropdown
    if (productSelect && typeof LAPNEST_PRODUCTS !== 'undefined') {
      productSelect.innerHTML = LAPNEST_PRODUCTS.map(p => `
        <option value="${p.id}" ${p.id === preselectedId ? 'selected' : ''}>
          ${p.brand} ${p.model} – ₹${p.price.toLocaleString('en-IN')}
        </option>
      `).join('');
    }

    function updateOrderSummary() {
      if (!productSelect || typeof LAPNEST_PRODUCTS === 'undefined') return;

      const selectedId = productSelect.value;
      const product = LAPNEST_PRODUCTS.find(p => p.id === selectedId) || LAPNEST_PRODUCTS[0];
      const quantity = Math.max(1, parseInt(qtyInput ? qtyInput.value : 1, 10) || 1);

      if (summaryImg) summaryImg.src = product.image;
      if (summaryTitle) summaryTitle.textContent = `${product.brand} ${product.model}`;
      if (summarySpecs) summarySpecs.textContent = `${product.processor} | ${product.ram} | ${product.storage}`;

      const rawSubtotal = product.price * quantity;
      const discountAmount = Math.round(rawSubtotal * (appliedDiscountPercent / 100));
      const finalTotal = rawSubtotal - discountAmount;

      if (summarySubtotal) summarySubtotal.textContent = `₹${rawSubtotal.toLocaleString('en-IN')}`;
      if (summaryDiscount) summaryDiscount.textContent = discountAmount > 0 ? `-₹${discountAmount.toLocaleString('en-IN')}` : '₹0';
      if (summaryTotal) summaryTotal.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
    }

    if (productSelect) productSelect.addEventListener('change', updateOrderSummary);
    if (qtyInput) qtyInput.addEventListener('input', updateOrderSummary);

    // Coupon logic
    if (applyCouponBtn && couponInput) {
      applyCouponBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'LAPNEST10') {
          appliedDiscountPercent = 10;
          if (couponMsg) {
            couponMsg.innerHTML = '<span class="text-emerald-400 font-semibold">10% discount applied successfully!</span>';
          }
          window.showToast('Coupon LAPNEST10 applied! 10% off');
          updateOrderSummary();
        } else if (code === '') {
          appliedDiscountPercent = 0;
          if (couponMsg) couponMsg.textContent = '';
          updateOrderSummary();
        } else {
          appliedDiscountPercent = 0;
          if (couponMsg) {
            couponMsg.innerHTML = '<span class="text-rose-400 font-medium">Invalid coupon code. Try LAPNEST10</span>';
          }
          updateOrderSummary();
        }
      });
    }

    // Initial calculation
    updateOrderSummary();

    // Order Submit Handler with Comprehensive Validation
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const requiredInputs = orderForm.querySelectorAll('input[required], select[required]');
      let firstInvalidInput = null;
      let hasError = false;

      requiredInputs.forEach(input => {
        const check = validateField(input);
        if (!check.valid) {
          showInputError(input, check.message);
          hasError = true;
          if (!firstInvalidInput) firstInvalidInput = input;
        } else {
          clearInputError(input);
        }
      });

      if (hasError) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
          firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.showToast('Please fix the highlighted errors before submitting your order.', 'error');
        return;
      }

      // Generate demo order reference
      const orderId = 'LN-' + Math.floor(100000 + Math.random() * 900000);
      const totalText = summaryTotal ? summaryTotal.textContent : '';
      const prodText = summaryTitle ? summaryTitle.textContent : 'Laptop';

      const modal = document.getElementById('order-success-modal');
      const modalOrderId = document.getElementById('modal-order-id');
      const modalOrderProduct = document.getElementById('modal-order-product');
      const modalOrderTotal = document.getElementById('modal-order-total');

      if (modalOrderId) modalOrderId.textContent = orderId;
      if (modalOrderProduct) modalOrderProduct.textContent = prodText;
      if (modalOrderTotal) modalOrderTotal.textContent = totalText;

      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        window.showToast(`Order #${orderId} demo placed successfully!`);
        orderForm.reset();
        updateOrderSummary();
      }
    });

    // Close Modal Button
    const closeModalBtn = document.getElementById('close-order-modal');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('order-success-modal');
        if (modal) modal.classList.add('hidden');
        document.body.style.overflow = '';
        orderForm.reset();
        updateOrderSummary();
      });
    }
  }

  /* ==========================================================================
     2. REPAIR BOOKING FORMS (repair-upgrade.html, contact.html)
     ========================================================================== */
  const repairForms = document.querySelectorAll('.repair-booking-form');
  repairForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      let firstInvalidInput = null;
      let hasError = false;

      requiredInputs.forEach(input => {
        const check = validateField(input);
        if (!check.valid) {
          showInputError(input, check.message);
          hasError = true;
          if (!firstInvalidInput) firstInvalidInput = input;
        } else {
          clearInputError(input);
        }
      });

      if (hasError) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
          firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.showToast('Please correct the highlighted form errors.', 'error');
        return;
      }

      const bookingId = 'REP-' + Math.floor(1000 + Math.random() * 9000);
      window.showToast(`Repair appointment demo booked! Ticket #${bookingId}`);
      form.reset();
    });
  });

  /* ==========================================================================
     3. CONTACT ENQUIRY FORM (contact.html)
     ========================================================================== */
  const contactForm = document.getElementById('contact-enquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const requiredInputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
      let firstInvalidInput = null;
      let hasError = false;

      requiredInputs.forEach(input => {
        const check = validateField(input);
        if (!check.valid) {
          showInputError(input, check.message);
          hasError = true;
          if (!firstInvalidInput) firstInvalidInput = input;
        } else {
          clearInputError(input);
        }
      });

      if (hasError) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
          firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.showToast('Please correct the highlighted errors before sending.', 'error');
        return;
      }

      window.showToast('Thank you! Your message has been received by our Chennai desk.');
      contactForm.reset();
    });
  }

  /* ==========================================================================
     4. NEWSLETTER SUBSCRIPTION FORMS (index.html, blog.html, coming-soon.html)
     ========================================================================== */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = f.querySelector('input[type="email"]');
      if (emailInput) {
        const check = validateField(emailInput);
        if (!check.valid) {
          showInputError(emailInput, check.message);
          emailInput.focus();
          window.showToast(check.message, 'error');
          return;
        }
        clearInputError(emailInput);
        window.showToast('Subscribed! You’ll receive our exclusive laptop deals.');
        emailInput.value = '';
      }
    });
  });
});
