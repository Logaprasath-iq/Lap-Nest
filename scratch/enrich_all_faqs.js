const fs = require('fs');

// 1. Update assets/js/main.js
let mainJs = fs.readFileSync('assets/js/main.js', 'utf8');

const oldFaqLogicRegex = /\/\/ 2\. FAQ Accordion Components[\s\S]*?\/\/ 3\. Testimonial Carousel/;

const newFaqLogic = `// 2. FAQ Accordion Components (Universal Interactive Click-to-Dropdown)
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

  // 3. Testimonial Carousel`;

mainJs = mainJs.replace(oldFaqLogicRegex, newFaqLogic);
fs.writeFileSync('assets/js/main.js', mainJs);
console.log('Updated FAQ accordion handler in assets/js/main.js');

// 2. Enrich faq.html with comprehensive questions across 5 categories
let faqHtml = fs.readFileSync('faq.html', 'utf8');

const oldFaqContainerRegex = /<div class=\"space-y-10\">[\s\S]*?<\/div>\s*<\/div>\s*<div class=\"mt-16 p-8/;

const newFaqContainer = `<div class="space-y-10">
        
        <!-- Category 1: Purchases & Certified Refurbished -->
        <div>
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E]"></span>
            <span>Laptop Purchases & Certified Refurbished</span>
          </h2>
          <div class="faq-group space-y-3">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Are refurbished laptops thoroughly tested and certified before delivery?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. Every single refurbished laptop undergoes a mandatory 40-point hardware audit: memory parity verification, NVMe SSD SMART health verification, battery cycle check (minimum 85% health guaranteed), display backlight uniformity inspection, and a 3-hour FurMark thermal stress test. All machines include a 1-year replacement warranty.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Can I customize the RAM or SSD before taking delivery?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Absolutely. We configure custom RAM capacities (up to 64GB DDR5) and solid-state drives (up to 4TB Gen4 NVMe) on eligible models in our cleanroom workshop prior to dispatch.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Do you sell brand new, sealed-box factory laptops?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes! We maintain authorized direct distribution inventory of brand-new laptops from Dell, HP, Lenovo, ASUS ROG, Acer, and Apple. All new laptops carry complete manufacturer warranty registered on day of billing.
              </div>
            </div>

          </div>
        </div>

        <!-- Category 2: Laptop Rentals & Corporate Fleets -->
        <div>
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E]"></span>
            <span>Rental Fleets & Corporate Subscriptions</span>
          </h2>
          <div class="faq-group space-y-3">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Is a security deposit required for monthly corporate rentals?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                For GST-registered businesses, software startups, and educational institutions in Chennai, we provide zero security deposit rental agreements upon basic corporate verification.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>What happens if a rented machine experiences technical failure?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                We provide a 2-to-4 hour doorstep hot-swap guarantee across Chennai. Our field technician will arrive at your workplace with a matching replacement unit and assist with transferring your drives or data images on the spot.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Can rental laptops be customized with corporate OS images and software?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. We pre-deploy custom Windows 11 Enterprise, Ubuntu LTS, or macOS corporate images, MDM agents (Intune/Jamf), and development environments before delivering the fleet to your office.
              </div>
            </div>

          </div>
        </div>

        <!-- Category 3: Cleanroom Lab & Chip-Level Repairs -->
        <div>
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E]"></span>
            <span>Cleanroom Lab & Chip-Level Repairs</span>
          </h2>
          <div class="faq-group space-y-3">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Do you charge diagnostic fees if the laptop is deemed unrepairable?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                No! We operate on a strict "No Fix, No Fee" policy. If our engineers cannot successfully resurrect your motherboard or resolve the diagnosed issue, you pay ₹0.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>How long does a logic board or screen replacement usually take?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Screen and battery replacements are typically completed within 60 to 90 minutes while you wait in our showroom lounge. Complex motherboard micro-soldering and liquid damage remediation take between 24 and 48 hours for complete ultrasonic cleaning and thermal stress testing.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Can I remove my SSD and personal data prior to motherboard repair?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes, 100%! We encourage customers to retain their storage drives. We test motherboard logic boards and power rails using our bench diagnostic SSDs.
              </div>
            </div>

          </div>
        </div>

        <!-- Category 4: Pricing, Billing & Tax Credits -->
        <div>
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FD802E]"></span>
            <span>Billing, Invoicing & GST Input Tax Credits</span>
          </h2>
          <div class="faq-group space-y-3">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Do all purchases, rentals, and repair invoices include 18% GST?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. LAPNEST issues formal tax invoices with itemized 18% GST (9% CGST + 9% SGST / 18% IGST) allowing businesses and self-employed professionals to claim full Input Tax Credit (ITC).
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>What payment modes are accepted at your Chennai showroom?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                We accept UPI (GPay, PhonePe, Paytm), Credit & Debit cards (Visa, MasterCard, RuPay, Amex), Net Banking (NEFT/RTGS/IMPS), Corporate Purchase Orders, and No-Cost EMI options on major bank credit cards.
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="mt-16 p-8`;

faqHtml = faqHtml.replace(oldFaqContainerRegex, newFaqContainer);
fs.writeFileSync('faq.html', faqHtml);
console.log('Enriched faq.html with 11 categorized interactive accordions!');

// 3. Add interactive Pricing FAQ Accordion to pricing.html
let pricingHtml = fs.readFileSync('pricing.html', 'utf8');

const oldPricingFaqRegex = /<!-- SECTION 7: FAQ AND CTA -->[\s\S]*?<\/section>\s*<\/main>/;

const newPricingFaq = `<!-- SECTION 7: INTERACTIVE PRICING FAQS AND CTA -->
    <section class="py-20 bg-[#111e26] border-t border-[#233D4C]">
      <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-[#FD802E]">Transparent Rate Policies</span>
          <h2 class="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Pricing Questions</h2>
          <p class="text-xs sm:text-sm text-[#9fb3be] mt-2">Clear answers to pricing questions on purchases, rentals, GST input credits, and diagnostic fees.</p>
        </div>

        <div class="max-w-3xl mx-auto mb-16">
          <div class="faq-group space-y-4">
            
            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Are your listed rates inclusive or exclusive of GST?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                All consumer laptop sales and repair prices are fully transparent. Corporate rental quotes clearly break down the base rental fee and the 18% GST component so your accounts team can easily file for Input Tax Credit.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Do I have to pay if a motherboard or liquid-damaged laptop cannot be fixed?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Zero rupees. We abide by our strict "No Fix, No Fee" policy. If our micro-soldering engineers cannot restore your machine to full working condition, diagnostic and bench labor fees are completely waived.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Can I trade in an older laptop to reduce the price of a purchase or lease?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes! We offer instant algorithmic trade-in valuations at our Chennai showroom. The evaluated value of your old machine can be credited directly against your new laptop purchase or deducted from your initial rental payments.
              </div>
            </div>

            <div class="faq-item rounded-2xl bg-[#172731] border border-[#233D4C] p-5 transition-all">
              <button type="button" class="faq-trigger w-full flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#FD802E] transition-colors focus:outline-none">
                <span>Are there volume discounts for leasing 10 or more laptops?</span>
                <svg class="faq-icon w-4 h-4 text-[#FD802E] transition-transform duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="faq-answer mt-3 pt-3 border-t border-[#233D4C] text-xs text-[#9fb3be] leading-relaxed hidden">
                Yes. Fleets of 10+ machines receive tiered discounts between 10% and 25% off standard monthly rates, along with dedicated on-site standby units and quarterly proactive hardware servicing.
              </div>
            </div>

          </div>
        </div>

        <div class="text-center max-w-xl mx-auto space-y-4 pt-6 border-t border-[#233D4C]/60">
          <h3 class="text-xl font-bold text-white">Need a Customized Institutional Quotation?</h3>
          <p class="text-xs text-[#9fb3be]">Our technical pricing desk provides custom corporate quotations within 30 minutes over WhatsApp and email.</p>
          <div class="flex flex-wrap justify-center gap-4 pt-2">
            <a href="contact.html" class="px-6 py-3 rounded-xl bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-xs shadow-lg shadow-[#FD802E]/25 transition-all">Get Custom Quotation</a>
            <a href="faq.html" class="px-6 py-3 rounded-xl bg-[#172731] hover:bg-[#233D4C] text-white border border-[#233D4C] font-semibold text-xs transition-colors">Read All 20+ FAQs</a>
          </div>
        </div>

      </div>
    </section>
  </main>`;

pricingHtml = pricingHtml.replace(oldPricingFaqRegex, newPricingFaq);
fs.writeFileSync('pricing.html', pricingHtml);
console.log('Added interactive FAQ accordion section to pricing.html!');
