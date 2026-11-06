const fs = require('fs');

// Create the exact SVG for the brand logo mark matching user image 1:
// - White laptop outline with folded origami screen interior
// - Laptop base with trackpad
// - Glowing orange swoosh crescent curving around bottom-left under the base
// - Vertical separator line
// - Wordmark LAPNEST
// - Tagline: BUY • SELL • REPAIR • RENT

const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" fill="none" class="lapnest-logo">
  <defs>
    <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- LAPNEST LOGO MARK (Exact recreation of user icon) -->
  <g class="brand-symbol" transform="translate(10, 10)">
    
    <!-- Glowing Orange Swoosh Crescent -->
    <!-- Arc swooshing from mid-left, under the laptop base, tapering on the bottom-right -->
    <path d="M 12 58 C 4 72 8 92 36 102 C 64 112 110 108 140 92 C 112 99 68 98 44 88 C 22 79 18 68 28 54 Z" 
          fill="#FD802E" filter="url(#orange-glow)" />
    <path d="M 12 58 C 4 72 8 92 36 102 C 64 112 110 108 140 92 C 112 99 68 98 44 88 C 22 79 18 68 28 54 Z" 
          fill="#FD802E" />

    <!-- Secondary subtle inner swoosh highlight -->
    <path d="M 60 95 C 88 95 118 89 136 82 C 114 87 84 90 60 90 Z" fill="#ff9248" />

    <!-- White Laptop Icon -->
    <!-- Screen Outline -->
    <path d="M 38 72 L 38 28 C 38 22 42 18 48 18 L 110 18 C 116 18 120 22 120 28 L 120 72" 
          stroke="#ffffff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    
    <!-- Folded Screen Interior Sheet (Sharp folded polygon) -->
    <path d="M 52 26 L 102 14 L 66 68 Z" fill="#ffffff" />
    <path d="M 102 14 L 114 20 L 78 70 L 52 26 Z" fill="#ffffff" fill-opacity="0.95" />

    <!-- Laptop Base with Trackpad Notch -->
    <path d="M 28 80 C 28 76 32 74 38 74 L 120 74 C 126 74 130 76 130 80 L 126 88 C 124 90 120 91 116 91 L 42 91 C 38 91 34 90 32 88 Z" 
          fill="#ffffff" />
    <!-- Trackpad cutout -->
    <rect x="70" y="77" width="18" height="4" rx="2" fill="#0e181f" />
  </g>

  <!-- Pumpkin Vertical Separator -->
  <line x1="168" y1="20" x2="168" y2="100" stroke="#FD802E" stroke-width="4.5" stroke-linecap="round" />

  <!-- LAPNEST Brand Wordmark (Dark theme: White) -->
  <g transform="translate(192, 22)">
    <text x="0" y="46" font-family="'Outfit', 'Plus Jakarta Sans', -apple-system, sans-serif" font-size="48" font-weight="900" letter-spacing="3.5" fill="#ffffff">LAPNEST</text>
    <text x="340" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#FD802E">®</text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT -->
    <g transform="translate(2, 70)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#ffffff">BUY</text>
      <circle cx="50" cy="-4" r="3" fill="#FD802E" />
      <text x="64" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#ffffff">SELL</text>
      <circle cx="122" cy="-4" r="3" fill="#FD802E" />
      <text x="136" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#ffffff">REPAIR</text>
      <circle cx="218" cy="-4" r="3" fill="#FD802E" />
      <text x="232" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#ffffff">RENT</text>
    </g>
  </g>
</svg>`;

const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" fill="none" class="lapnest-logo">
  <defs>
    <filter id="orange-glow-light" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- LAPNEST LOGO MARK (Light theme: Dark Charcoal & Orange Swoosh) -->
  <g class="brand-symbol" transform="translate(10, 10)">
    <!-- Glowing Orange Swoosh Crescent -->
    <path d="M 12 58 C 4 72 8 92 36 102 C 64 112 110 108 140 92 C 112 99 68 98 44 88 C 22 79 18 68 28 54 Z" 
          fill="#FD802E" filter="url(#orange-glow-light)" />
    <path d="M 12 58 C 4 72 8 92 36 102 C 64 112 110 108 140 92 C 112 99 68 98 44 88 C 22 79 18 68 28 54 Z" 
          fill="#FD802E" />

    <!-- Dark Charcoal Laptop Icon -->
    <path d="M 38 72 L 38 28 C 38 22 42 18 48 18 L 110 18 C 116 18 120 22 120 28 L 120 72" 
          stroke="#111e26" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    
    <path d="M 52 26 L 102 14 L 66 68 Z" fill="#111e26" />
    <path d="M 102 14 L 114 20 L 78 70 L 52 26 Z" fill="#233D4C" />

    <path d="M 28 80 C 28 76 32 74 38 74 L 120 74 C 126 74 130 76 130 80 L 126 88 C 124 90 120 91 116 91 L 42 91 C 38 91 34 90 32 88 Z" 
          fill="#111e26" />
    <rect x="70" y="77" width="18" height="4" rx="2" fill="#ffffff" />
  </g>

  <!-- Pumpkin Vertical Separator -->
  <line x1="168" y1="20" x2="168" y2="100" stroke="#FD802E" stroke-width="4.5" stroke-linecap="round" />

  <!-- LAPNEST Brand Wordmark (Light theme: Dark Charcoal) -->
  <g transform="translate(192, 22)">
    <text x="0" y="46" font-family="'Outfit', 'Plus Jakarta Sans', -apple-system, sans-serif" font-size="48" font-weight="900" letter-spacing="3.5" fill="#111e26">LAPNEST</text>
    <text x="340" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#FD802E">®</text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT -->
    <g transform="translate(2, 70)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#233D4C">BUY</text>
      <circle cx="50" cy="-4" r="3" fill="#FD802E" />
      <text x="64" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#233D4C">SELL</text>
      <circle cx="122" cy="-4" r="3" fill="#FD802E" />
      <text x="136" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#233D4C">REPAIR</text>
      <circle cx="218" cy="-4" r="3" fill="#FD802E" />
      <text x="232" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#233D4C">RENT</text>
    </g>
  </g>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#0e181f" />
  <rect x="2" y="2" width="124" height="124" rx="26" stroke="#233D4C" stroke-width="2" />
  
  <!-- Glowing Orange Crescent Swoosh -->
  <path d="M 16 70 C 8 86 12 108 42 118 C 72 128 116 120 124 100 C 96 112 58 112 36 100 C 18 90 14 78 26 64 Z" 
        fill="#FD802E" />

  <!-- White Laptop Icon -->
  <path d="M 38 78 L 38 34 C 38 28 42 24 48 24 L 98 24 C 104 24 108 28 108 34 L 108 78" 
        stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 50 32 L 92 22 L 62 74 Z" fill="#ffffff" />
  <path d="M 92 22 L 102 26 L 72 76 L 50 32 Z" fill="#ffffff" fill-opacity="0.9" />
  <path d="M 28 86 C 28 82 32 80 38 80 L 108 80 C 114 80 118 82 118 86 L 114 94 C 112 96 108 97 104 97 L 42 97 C 38 97 34 96 32 94 Z" 
        fill="#ffffff" />
  <rect x="66" y="83" width="14" height="3" rx="1.5" fill="#0e181f" />
</svg>`;

const logoCompactSvg = faviconSvg;

fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDarkSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-compact.svg', logoCompactSvg, 'utf8');
fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');

console.log('Successfully created updated logo-dark.svg, logo-light.svg, logo-compact.svg, and favicon.svg');
