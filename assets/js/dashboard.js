/**
 * LAPNEST - Admin Dashboard Management Engine
 * Functional CRUD demonstrations, Chart.js integrations & real-time search
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Chart.js Revenue & Orders Charts
  const revenueChartCanvas = document.getElementById('dashboard-revenue-chart');
  if (revenueChartCanvas && typeof Chart !== 'undefined') {
    const isLight = document.documentElement.classList.contains('light');
    const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)';
    const textColor = isLight ? '#6b7280' : '#9fb3be';

    const ctx = revenueChartCanvas.getContext('2d');
    const goldGradient = ctx.createLinearGradient(0, 0, 0, 300);
    goldGradient.addColorStop(0, 'rgba(210, 159, 34, 0.35)');
    goldGradient.addColorStop(1, 'rgba(210, 159, 34, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Monthly Revenue (₹ Lakhs)',
            data: [12.4, 15.2, 14.8, 18.5, 22.0, 26.4, 24.1, 29.5, 33.2, 38.6, 42.1, 46.8],
            borderColor: '#FD802E',
            backgroundColor: goldGradient,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#FD802E',
            pointBorderColor: '#111e26',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#111e26',
            titleColor: '#ffffff',
            bodyColor: '#FD802E',
            borderColor: '#233D4C',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function (context) {
                return ` Revenue: ₹${context.raw} Lakhs`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: 'Plus Jakarta Sans' } }
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { family: 'Plus Jakarta Sans' },
              callback: function (val) { return '₹' + val + 'L'; }
            }
          }
        }
      }
    });
  }

  // 2. Orders Category Doughnut Chart
  const categoryChartCanvas = document.getElementById('dashboard-category-chart');
  if (categoryChartCanvas && typeof Chart !== 'undefined') {
    new Chart(categoryChartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Gaming Laptops', 'Business Laptops', 'Repair Services', 'Rentals', 'Accessories'],
        datasets: [
          {
            data: [38, 28, 16, 12, 6],
            backgroundColor: [
              '#FD802E',
              '#f5cf6d',
              '#845ec2',
              '#008f7a',
              '#4b4453'
            ],
            borderColor: '#111e26',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#9fb3be',
              font: { family: 'Plus Jakarta Sans', size: 11 },
              padding: 12
            }
          }
        },
        cutout: '72%'
      }
    });
  }

  // 3. Generic Table Search Filtering
  const tableSearchInputs = document.querySelectorAll('.dashboard-table-search');
  tableSearchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const targetTable = document.querySelector(input.dataset.table || 'table');
      if (!targetTable) return;

      const rows = targetTable.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  });

  // 4. Modal Open/Close Controls
  const modalOpenTriggers = document.querySelectorAll('[data-open-modal]');
  modalOpenTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const modalCloseTriggers = document.querySelectorAll('[data-close-modal]');
  modalCloseTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.dashboard-modal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // 5. Product Add/Edit Form submit handling
  const addProductForm = document.getElementById('add-product-form');
  if (addProductForm) {
    addProductForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.showToast('Demo product added to catalog successfully!');
      addProductForm.reset();
      const modal = addProductForm.closest('.dashboard-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // 6. Delete Row simulation
  document.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.demo-delete-btn');
    if (deleteBtn) {
      if (confirm('Are you sure you want to delete this record?')) {
        const row = deleteBtn.closest('tr') || deleteBtn.closest('.card-item');
        if (row) {
          row.style.opacity = '0';
          setTimeout(() => {
            row.remove();
            window.showToast('Record deleted successfully!');
          }, 250);
        }
      }
    }
  });

  // 7. Status badge dropdown toggle
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('status-select')) {
      const newStatus = e.target.value;
      window.showToast(`Order status updated to: ${newStatus}`);
    }
  });

  // 8. Mobile Sidebar Toggle for Dashboard
  const dashSidebarToggle = document.getElementById('dash-sidebar-toggle');
  const dashSidebar = document.getElementById('dash-sidebar');
  const dashSidebarClose = document.getElementById('dash-sidebar-close');

  if (dashSidebarToggle && dashSidebar) {
    dashSidebarToggle.addEventListener('click', () => {
      dashSidebar.classList.remove('-translate-x-full');
      dashSidebar.classList.add('translate-x-0');
    });
  }

  if (dashSidebarClose && dashSidebar) {
    dashSidebarClose.addEventListener('click', () => {
      dashSidebar.classList.add('-translate-x-full');
      dashSidebar.classList.remove('translate-x-0');
    });
  }
});
