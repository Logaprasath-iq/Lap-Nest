const fs = require('fs');

console.log('=== UPDATING BLOG-DETAILS.HTML AND ASSETS/JS/BLOG-DETAILS.JS FOR EQUAL HEIGHT & ALIGNMENT ===\n');

// 1. UPDATE ASSETS/JS/BLOG-DETAILS.JS
let jsContent = fs.readFileSync('assets/js/blog-details.js', 'utf8');

// Replace liquid-damage-guide with enriched 5-section version
const oldLiquid = `    'liquid-damage-guide': {
      id: 'liquid-damage-guide',
      breadcrumb: 'Liquid Damage First Aid',
      category: 'Maintenance',
      categoryClass: 'bg-[#FD802E] text-white',
      publishDate: 'Published on Sep 28, 2026',
      readTime: '4 Min Read',
      title: 'Spilled Chai on Your Laptop? 3 Critical Steps To Take in 60 Seconds',
      author: {
        name: 'Priya Swaminathan',
        role: 'Senior Motherboard Recovery Specialist',
        avatar: 'assets/images/team/team-2.jpg'
      },
      image: 'assets/images/blog/blog-6.jpg',
      imageAlt: 'Micro-soldering repair for liquid damaged motherboard trace',
      lead: 'Liquid spills are the #1 emergency at our Chennai lab during monsoon and workday hours. In less than 60 seconds, mineral salts in tea, coffee, or water combine with the 19V laptop charger voltage to trigger destructive electrolytic corrosion. Here is what you MUST do right now.',
      sections: [
        {
          id: 'sec-1',
          heading: '1. The 60-Second Emergency Checklist: Hard Power Disconnect',
          content: [
            'Do NOT spend 30 seconds gracefully clicking Windows Start > Shut Down. Instantly press and hold the physical power button for 10 continuous seconds until all lights extinguish.',
            'Immediately pull the AC charging cable from the wall and laptop. If your laptop features an external latch battery, pop it out instantly. Every second power flows through wet traces dissolves copper tracks.'
          ],
          callout: '<strong>CRITICAL WARNING:</strong> NEVER plug the charger back in "just to see if it turns on". 90% of irreparable logic board fires happen during post-spill test plugging.'
        },
        {
          id: 'sec-2',
          heading: '2. The Inverted Tent Position: Gravity as Your Shield',
          content: [
            'Open the laptop display to a 90-degree right angle and turn it upside-down like a pitched camping tent onto a thick dry microfiber towel or cotton cloth.',
            'This leverages gravity to draw liquid down through the keyboard weep holes and away from the delicate motherboard and battery connector sitting underneath the palm rest.'
          ]
        },
        {
          id: 'sec-3',
          heading: '3. The Rice Myth vs Cleanroom Ultrasonic De-Oxidation',
          content: [
            'Placing a laptop in uncooked rice is a hazardous myth. Rice dust and starch enter fan ducts, gum up thermal grease, and do nothing to neutralize conductive sugar and milk salts corroding solder joints.',
            'Bring the unit to our Sholinganallur cleanroom within 24 hours. We disassemble the logic board and submerge it in an ultrasonic bath with 99.9% electronic-grade anhydrous isopropyl alcohol, rescuing 95% of liquid-spilled machines.'
          ]
        }
      ],
      cta: {
        title: 'Emergency Liquid Spill Hotline',
        desc: 'Walk in directly for priority emergency disassembly, ultrasonic de-oxidation & diagnostic report.',
        btnText: 'Call Emergency Lab: +91 98400 12345',
        btnHref: 'contact.html'
      }
    },`;

const newLiquid = `    'liquid-damage-guide': {
      id: 'liquid-damage-guide',
      breadcrumb: 'Liquid Damage First Aid',
      category: 'Maintenance',
      categoryClass: 'bg-[#FD802E] text-white',
      publishDate: 'Published on Sep 28, 2026',
      readTime: '6 Min Read',
      title: 'Spilled Chai on Your Laptop? 3 Critical Steps To Take in 60 Seconds',
      author: {
        name: 'Priya Swaminathan',
        role: 'Senior Motherboard Recovery Specialist',
        avatar: 'assets/images/team/team-2.jpg'
      },
      image: 'assets/images/blog/blog-6.jpg',
      imageAlt: 'Micro-soldering repair for liquid damaged motherboard trace',
      lead: 'Liquid spills are the #1 emergency at our Chennai lab during monsoon and workday hours. In less than 60 seconds, mineral salts in tea, coffee, or water combine with the 19V laptop charger voltage to trigger destructive electrolytic corrosion. Here is what you MUST do right now.',
      sections: [
        {
          id: 'sec-1',
          heading: '1. The 60-Second Emergency Checklist: Hard Power Disconnect',
          content: [
            'Do NOT spend 30 seconds gracefully clicking Windows Start > Shut Down. Instantly press and hold the physical power button for 10 continuous seconds until all lights extinguish.',
            'Immediately pull the AC charging cable from the wall and laptop. If your laptop features an external latch battery, pop it out instantly. Every second power flows through wet traces dissolves copper tracks.'
          ],
          callout: '<strong>CRITICAL WARNING:</strong> NEVER plug the charger back in "just to see if it turns on". 90% of irreparable logic board fires happen during post-spill test plugging.'
        },
        {
          id: 'sec-2',
          heading: '2. The Inverted Tent Position: Gravity as Your Shield',
          content: [
            'Open the laptop display to a 90-degree right angle and turn it upside-down like a pitched camping tent onto a thick dry microfiber towel or cotton cloth.',
            'This leverages gravity to draw liquid down through the keyboard weep holes and away from the delicate motherboard and battery connector sitting underneath the palm rest.'
          ]
        },
        {
          id: 'sec-3',
          heading: '3. The Rice Myth vs Cleanroom Ultrasonic De-Oxidation',
          content: [
            'Placing a laptop in uncooked rice is a hazardous myth. Rice dust and starch enter fan ducts, gum up thermal grease, and do nothing to neutralize conductive sugar and milk salts corroding solder joints.',
            'Bring the unit to our Sholinganallur cleanroom within 24 hours. We disassemble the logic board and submerge it in an ultrasonic bath with 99.9% electronic-grade anhydrous isopropyl alcohol, rescuing 95% of liquid-spilled machines.'
          ]
        },
        {
          id: 'sec-4',
          heading: '4. Identifying Secondary Electrolytic Damage: Power Rails & MOSFETs',
          content: [
            'When mineralized liquid bridges the high-voltage 19V DC-in rail to adjacent 1.05V CPU or GPU data lines, destructive over-voltage instantly penetrates sensitive silicon controllers.',
            'Even after the external casing appears dry, microscopic dendritic copper growth continues to bridge micro-vias beneath BGA chips over subsequent weeks. Professional diagnostic scopes must inspect impedance across every major coil before safe power injection.'
          ],
          callout: '<strong>Lab Inspection Data:</strong> 72% of liquid-damaged laptops that "worked for two days after air drying" suffer sudden catastrophic logic board failure when corroded surface capacitors short to ground.'
        },
        {
          id: 'sec-5',
          heading: '5. The 48-Hour Recovery Window & Cleanroom Warranty',
          content: [
            'Time is the single most critical factor in liquid spill recovery. Within 24 to 48 hours, cleanroom ultrasonic cavitation completely lifts mineral crusts before solder pads permanently dissolve.',
            'Our Sholinganallur facility provides precision micro-trace jumping under 40x magnification, conformal coating re-insulation, and thermal load validation backed by our unconditional 90-day cleanroom warranty.'
          ]
        }
      ],
      cta: {
        title: 'Emergency Liquid Spill Hotline',
        desc: 'Walk in directly for priority emergency disassembly, ultrasonic de-oxidation & diagnostic report.',
        btnText: 'Call Emergency Lab: +91 98400 12345',
        btnHref: 'contact.html'
      }
    },`;

if (jsContent.includes(oldLiquid)) {
  jsContent = jsContent.replace(oldLiquid, newLiquid);
  console.log('Successfully updated liquid-damage-guide to 5 rich sections!');
} else {
  console.log('Warning: oldLiquid exact match not found in blog-details.js');
}

// Also enrich ssd-benchmark with sections 4 and 5
const oldSsd = `        {
          id: 'sec-3',
          heading: '3. Thermal Considerations in Chennai Summers',
          content: [
            'Speed generates heat. A Gen4 SSD under full write load can peak at 78°C. Without proper silicone thermal pads connecting the drive controller to the laptop\\'s aluminum base chassis, the drive will severely throttle speeds down to SATA levels after 90 seconds.',
            'At LAPNEST, all SSD installations include high-conductivity copper-graphene thermal dispersion foils and mil-spec silicone thermal pads to maintain sub-55°C operation under heavy ambient tropical heat.'
          ]
        }
      ],`;

const newSsd = `        {
          id: 'sec-3',
          heading: '3. Thermal Considerations in Chennai Summers',
          content: [
            'Speed generates heat. A Gen4 SSD under full write load can peak at 78°C. Without proper silicone thermal pads connecting the drive controller to the laptop\\'s aluminum base chassis, the drive will severely throttle speeds down to SATA levels after 90 seconds.',
            'At LAPNEST, all SSD installations include high-conductivity copper-graphene thermal dispersion foils and mil-spec silicone thermal pads to maintain sub-55°C operation under heavy ambient tropical heat.'
          ]
        },
        {
          id: 'sec-4',
          heading: '4. DRAM-Cache vs Host Memory Buffer (HMB)',
          content: [
            'Budget DRAM-less SSDs offload index mapping to system RAM via HMB. Under sustained sequential writes exceeding 40GB, dynamic SLC caching exhausts and transfer speeds plummet down to 45 MB/s.',
            'LAPNEST exclusively equips high-workload upgrades with onboard LPDDR4 DRAM-cached drives, maintaining unbreakable multi-gigabyte transfer stability during 4K video rendering and large Docker builds.'
          ],
          callout: '<strong>Lab Endurance Metric:</strong> Drives with dedicated DRAM maintain 98% sustained throughput during continuous 100GB 4K raw video rendering workloads.'
        },
        {
          id: 'sec-5',
          heading: '5. 4-Step Cleanroom Clone & Upgrade Protocol',
          content: [
            'Our lab performs zero-loss bit-level drive cloning preserving Windows activation, developer environment variables, and hidden EFI recovery partitions.',
            'Every drive is partitioned with 10% OP (Over-Provisioning) to maximize NAND flash write-endurance over a 5-year operating life, complete with a 30-minute express walk-in turnaround.'
          ]
        }
      ],`;

if (jsContent.includes(oldSsd)) {
  jsContent = jsContent.replace(oldSsd, newSsd);
  console.log('Successfully updated ssd-benchmark to 5 rich sections!');
}

// Update renderArticle in assets/js/blog-details.js to include Cleanroom Assurance card and mt-auto
const oldRenderArticleContent = `    // 6. Update Article Content
    const contentEl = document.getElementById('blog-article-content');
    if (contentEl) {
      let html = \`<p class="text-base text-white font-medium leading-relaxed">\${article.lead}</p>\`;

      article.sections.forEach((sec, idx) => {
        html += \`
          <h2 id="\${sec.id}" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">
            \${sec.heading}
          </h2>
        \`;

        sec.content.forEach(p => {
          html += \`<p class="leading-relaxed">\${p}</p>\`;
        });

        if (sec.callout) {
          html += \`
            <div class="p-4 rounded-xl bg-[#172731] border-l-4 border-[#FD802E] my-4 text-xs text-white shadow-md">
              \${sec.callout}
            </div>
          \`;
        }
      });

      // Social Share bar at bottom of article
      const shareUrl = encodeURIComponent(window.location.href);
      const shareText = encodeURIComponent(article.title + ' via @LAPNEST');
      html += \`
        <div class="mt-8 pt-8 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">
          <span class="text-xs font-bold text-white uppercase tracking-wider">Share This Technical Guide:</span>
          <div class="flex gap-2">
            <a href="https://twitter.com/intent/tweet?text=\${shareText}&url=\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">X / Twitter</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">LinkedIn</a>
            <a href="https://wa.me/?text=\${shareText}%20\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#25D366] hover:text-white border border-[#233D4C] text-xs transition-colors">WhatsApp</a>
          </div>
        </div>
      \`;

      contentEl.innerHTML = html;
    }`;

const newRenderArticleContent = `    // 6. Update Article Content with Equal Bottom Baseline
    const contentEl = document.getElementById('blog-article-content');
    if (contentEl) {
      let html = \`
        <div class="space-y-6">
          <p class="text-base text-white font-medium leading-relaxed">\${article.lead}</p>
      \`;

      article.sections.forEach((sec, idx) => {
        html += \`
          <h2 id="\${sec.id}" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">
            \${sec.heading}
          </h2>
        \`;

        sec.content.forEach(p => {
          html += \`<p class="leading-relaxed">\${p}</p>\`;
        });

        if (sec.callout) {
          html += \`
            <div class="p-4 rounded-xl bg-[#172731] border-l-4 border-[#FD802E] my-4 text-xs text-white shadow-md">
              \${sec.callout}
            </div>
          \`;
        }
      });

      // Bottom section: Cleanroom Verification Assurance & Social Share (Flush at bottom via mt-auto)
      const shareUrl = encodeURIComponent(window.location.href);
      const shareText = encodeURIComponent(article.title + ' via @LAPNEST');
      html += \`
        </div>
        <div class="mt-auto pt-8 space-y-6">
          
          <!-- Cleanroom Verification Assurance Box -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex items-start gap-4 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center shrink-0 text-[#FD802E]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <span>LAPNEST Cleanroom Verification Assurance</span>
                <span class="text-[10px] font-mono font-normal text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded border border-[#25D366]/20">ISO-Class 5 Certified</span>
              </h4>
              <p class="text-xs text-[#9fb3be] leading-relaxed">
                Every motherboard repair, BGA reballing, and hardware upgrade performed in our Sholinganallur cleanroom is verified with FLIR thermal imaging, 40-point rail impedance diagnostics, and backed by our unconditional 90-day parts and labor warranty.
              </p>
            </div>
          </div>

          <!-- Social Share Bar -->
          <div class="pt-6 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs font-bold text-white uppercase tracking-wider">Share This Technical Guide:</span>
            <div class="flex gap-2">
              <a href="https://twitter.com/intent/tweet?text=\${shareText}&url=\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">X / Twitter</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">LinkedIn</a>
              <a href="https://wa.me/?text=\${shareText}%20\${shareUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#25D366] hover:text-white border border-[#233D4C] text-xs transition-colors">WhatsApp</a>
            </div>
          </div>

        </div>
      \`;

      contentEl.innerHTML = html;
    }`;

if (jsContent.includes(oldRenderArticleContent)) {
  jsContent = jsContent.replace(oldRenderArticleContent, newRenderArticleContent);
  console.log('Successfully updated renderArticle in assets/js/blog-details.js!');
} else {
  console.log('Warning: oldRenderArticleContent exact match not found');
}

fs.writeFileSync('assets/js/blog-details.js', jsContent, 'utf8');


// 2. UPDATE BLOG-DETAILS.HTML
let htmlContent = fs.readFileSync('blog-details.html', 'utf8');

// Replace grid container and article/aside structure
const oldLayoutRegex = /<!-- Layout: Content \+ Sticky Sidebar \(4 Cards\) -->[\s\S]*?<\/aside>\s*<\/div>/;

const newLayout = `<!-- Layout: Content + Sticky Sidebar (4 Cards) Equal Alignment & Height -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
        
        <!-- Main Article Content (8 Cols, flex-col with mt-auto to align bottoms) -->
        <article id="blog-article-content" class="lg:col-span-8 flex flex-col justify-between text-xs sm:text-sm text-[#9fb3be] leading-relaxed">
          
          <div class="space-y-6">
            <p class="text-base text-white font-medium leading-relaxed">
              In our laptop repair laboratory in Sholinganallur, Chennai, the single most requested upgrade from slow laptop owners is storage replacement. But with marketing terms like PCIe 4.0, NVMe, QLC, TLC and DRAM-cache thrown around, what is the genuine measurable difference in everyday Indian computing?
            </p>

            <h2 id="sec-1" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">1. The Bus Architecture: SATA III vs PCIe Lane Bandwidth</h2>
            <p>
              Traditional 2.5-inch SATA III solid state drives are physically throttled by the legacy AHCI controller protocol, topping out at roughly 550 MB/s sequential read and write speeds.
            </p>
            <p>
              In contrast, modern M.2 NVMe drives utilize four direct PCIe lanes communicating natively with the CPU socket. A Gen4 NVMe drive effortlessly achieves between 3,500 MB/s and 7,000 MB/s—over 12 times the raw data throughput.
            </p>

            <div class="p-4 rounded-xl bg-[#172731] border-l-4 border-[#FD802E] my-4 text-xs text-white shadow-md">
              <strong>Lab Benchmark Result:</strong> Windows 11 cold boot time dropped from 38.4 seconds on SATA to 6.2 seconds on a Gen4 Crucial P3 Plus NVMe drive.
            </div>

            <h2 id="sec-2" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">2. Heavy Workloads: Video Rendering & Coding</h2>
            <p>
              Where users notice monumental gains is sustained input/output queues. Compiling large C++ codebases or rendering 4K 10-bit H.265 video in DaVinci Resolve requires constant reading of cache scratches. The IOPS (Input/Output Operations Per Second) on Gen4 NVMe reach 650,000 IOPS compared to just 90,000 IOPS on legacy drives.
            </p>

            <h2 id="sec-3" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">3. Thermal Considerations in Chennai Summers</h2>
            <p>
              Speed generates heat. A Gen4 SSD under full write load can peak at 78°C. Without proper silicone thermal pads connecting the drive controller to the laptop's aluminum base chassis, the drive will severely throttle speeds down to SATA levels after 90 seconds. At LAPNEST, all SSD installations include high-conductivity copper-graphene thermal dispersion foils.
            </p>

            <h2 id="sec-4" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">4. DRAM-Cache vs Host Memory Buffer (HMB)</h2>
            <p>
              Budget DRAM-less SSDs offload index mapping to system RAM via HMB. Under sustained sequential writes exceeding 40GB, SLC caching exhausts and speeds plummet to 45 MB/s. LAPNEST exclusively equips workstation upgrades with onboard LPDDR4 DRAM-cached drives for unbreakable transfer stability.
            </p>

            <h2 id="sec-5" class="text-xl font-bold text-white text-base sm:text-xl mt-8 pt-6 border-t border-[#233D4C]">5. 4-Step Cleanroom Clone & Upgrade Protocol</h2>
            <p>
              Our lab performs zero-loss bit-level drive cloning preserving Windows activation, developer environment variables, and hidden EFI recovery partitions. Every drive is partitioned with 10% OP (Over-Provisioning) to maximize NAND flash write-endurance over a 5-year operating life.
            </p>
          </div>

          <!-- Bottom: Cleanroom Assurance Card & Social Sharing (Sticks flush to bottom via mt-auto) -->
          <div class="mt-auto pt-8 space-y-6">
            <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] flex items-start gap-4 shadow-lg">
              <div class="w-12 h-12 rounded-xl bg-[#FD802E]/10 border border-[#FD802E]/30 flex items-center justify-center shrink-0 text-[#FD802E]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <span>LAPNEST Cleanroom Verification Assurance</span>
                  <span class="text-[10px] font-mono font-normal text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded border border-[#25D366]/20">ISO-Class 5 Certified</span>
                </h4>
                <p class="text-xs text-[#9fb3be] leading-relaxed">
                  Every motherboard repair, BGA reballing, and hardware upgrade performed in our Sholinganallur cleanroom is verified with FLIR thermal imaging, 40-point rail impedance diagnostics, and backed by our unconditional 90-day parts and labor warranty.
                </p>
              </div>
            </div>

            <!-- Social Sharing -->
            <div class="pt-6 border-t border-[#233D4C] flex flex-wrap items-center justify-between gap-3">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Share This Technical Guide:</span>
              <div class="flex gap-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">X / Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#FD802E] hover:text-white border border-[#233D4C] text-xs transition-colors">LinkedIn</a>
                <a href="https://wa.me/?text=Check+out+this+laptop+SSD+guide" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#172731] hover:bg-[#25D366] hover:text-white border border-[#233D4C] text-xs transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>

        </article>

        <!-- Sidebar: 4 Cards with Equal Height & Bottom Baseline Alignment -->
        <aside id="blog-sidebar" class="lg:col-span-4 flex flex-col justify-between space-y-6">
          
          <!-- Card 1: Table of Contents -->
          <div id="blog-toc-card" class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider text-[#FD802E]">Table of Contents</h4>
            <ul id="blog-toc-list" class="space-y-2 text-xs text-[#9fb3be]">
              <li><a href="#sec-1" class="hover:text-[#FD802E] transition-colors block py-0.5">1. SATA III vs PCIe Lane Bandwidth</a></li>
              <li><a href="#sec-2" class="hover:text-[#FD802E] transition-colors block py-0.5">2. Heavy Workloads: Video & Code</a></li>
              <li><a href="#sec-3" class="hover:text-[#FD802E] transition-colors block py-0.5">3. Thermal Considerations in Chennai</a></li>
              <li><a href="#sec-4" class="hover:text-[#FD802E] transition-colors block py-0.5">4. DRAM-Cache vs HMB Architecture</a></li>
              <li><a href="#sec-5" class="hover:text-[#FD802E] transition-colors block py-0.5">5. 4-Step Cleanroom Clone Protocol</a></li>
            </ul>
          </div>

          <!-- Card 2: Upgrade CTA -->
          <div id="blog-sidebar-cta" class="p-6 rounded-2xl bg-gradient-to-b from-[#172731] to-[#0e181f] border border-[#FD802E]/40 text-center space-y-3">
            <h4 id="blog-cta-title" class="text-sm font-bold text-white">Upgrade Your Laptop's SSD</h4>
            <p id="blog-cta-desc" class="text-xs text-[#9fb3be]">Includes free data cloning. 30-minute turnaround in Chennai showroom.</p>
            <a id="blog-cta-btn" href="service-details.html?service=ssd" class="block w-full py-2.5 rounded-xl bg-[#FD802E] hover:bg-[#ff9248] text-white font-bold text-xs shadow-md shadow-[#FD802E]/25 transition-all">
              SSD Upgrade Plans from ₹1,999
            </a>
          </div>

          <!-- Card 3: Related Engineering Guides -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-4">
            <div class="flex items-center justify-between border-b border-[#233D4C] pb-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider text-[#FD802E]">Related Guides</h4>
              <a href="blog.html" class="text-[11px] font-semibold text-[#9fb3be] hover:text-[#FD802E] transition-colors">View All</a>
            </div>
            <div id="blog-sidebar-related" class="space-y-3.5">
              <a href="blog-details.html?id=thermal-paste-guide" class="group flex items-start gap-3 p-1.5 rounded-xl hover:bg-[#0e181f]/60 transition-colors">
                <img src="assets/images/blog/blog-2.jpg" alt="Thermal Paste" class="w-16 h-12 rounded-lg object-cover border border-[#233D4C] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div class="space-y-1 min-w-0">
                  <span class="text-[10px] font-bold text-[#FD802E] uppercase tracking-wider block">Maintenance</span>
                  <h5 class="text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors line-clamp-2 leading-snug">Why Replacing Thermal Paste Every 18 Months Saves Your GPU</h5>
                  <span class="text-[10px] text-[#9fb3be] block">6 Min Read</span>
                </div>
              </a>
              <a href="blog-details.html?id=student-guide" class="group flex items-start gap-3 p-1.5 rounded-xl hover:bg-[#0e181f]/60 transition-colors">
                <img src="assets/images/blog/blog-3.jpg" alt="Student Laptops" class="w-16 h-12 rounded-lg object-cover border border-[#233D4C] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div class="space-y-1 min-w-0">
                  <span class="text-[10px] font-bold text-[#FD802E] uppercase tracking-wider block">Buying Guides</span>
                  <h5 class="text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors line-clamp-2 leading-snug">Best Laptops for Anna University Engineering Students</h5>
                  <span class="text-[10px] text-[#9fb3be] block">10 Min Read</span>
                </div>
              </a>
              <a href="blog-details.html?id=apple-vs-intel" class="group flex items-start gap-3 p-1.5 rounded-xl hover:bg-[#0e181f]/60 transition-colors">
                <img src="assets/images/blog/blog-4.jpg" alt="Apple M3 vs Intel" class="w-16 h-12 rounded-lg object-cover border border-[#233D4C] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div class="space-y-1 min-w-0">
                  <span class="text-[10px] font-bold text-[#FD802E] uppercase tracking-wider block">Hardware</span>
                  <h5 class="text-xs font-bold text-white group-hover:text-[#FD802E] transition-colors line-clamp-2 leading-snug">Apple M3 Pro vs Intel Core i9: Battery vs Raw Throughput</h5>
                  <span class="text-[10px] text-[#9fb3be] block">7 Min Read</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Card 4: Need Expert Help / Cleanroom Consultation (mt-auto aligns flush to bottom) -->
          <div class="p-6 rounded-2xl bg-[#172731] border border-[#233D4C] space-y-3.5 mt-auto">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0e181f] border border-[#233D4C] text-[10px] font-bold text-[#FD802E]">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ENGINEERS ACTIVE • CHENNAI</span>
            </div>
            <h4 class="text-sm font-bold text-white leading-snug">Have a Complex Logic Board or Thermal Issue?</h4>
            <p class="text-xs text-[#9fb3be] leading-relaxed">
              Talk directly with our chip-level engineers at OMR Sholinganallur. Free 15-minute diagnostic consultation.
            </p>
            <div class="pt-1 space-y-2">
              <a href="https://wa.me/919840012345?text=Hi%20LAPNEST%20team%2C%20I%20have%20a%20laptop%20hardware%20query" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-[#25D366]/20 transition-all">
                <svg class="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>WhatsApp an Engineer</span>
              </a>
              <a href="contact.html" class="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-[#0e181f] hover:bg-[#233D4C] text-[#9fb3be] hover:text-white border border-[#233D4C] font-semibold text-xs transition-colors">
                <span>Book Storefront Consultation</span>
                <svg class="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

        </aside>
      </div>`;

if (oldLayoutRegex.test(htmlContent)) {
  htmlContent = htmlContent.replace(oldLayoutRegex, newLayout);
  console.log('Successfully updated blog-details.html layout to equal height and alignment!');
} else {
  console.log('Warning: oldLayoutRegex not matched in blog-details.html');
}

fs.writeFileSync('blog-details.html', htmlContent, 'utf8');

console.log('\n=== COMPLETED SUCCESSFULLY ===');
