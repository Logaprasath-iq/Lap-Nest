const fs = require('fs');

const croppedPng = fs.readFileSync('assets/images/logo/logo-5th-cropped.png');
const base64Data = croppedPng.toString('base64');
const dataUri = `data:image/png;base64,${base64Data}`;

// Write favicon.png
fs.writeFileSync('favicon.png', croppedPng);

// Build dark logo SVG with 465x92 tight viewBox
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465 92" fill="none" class="lapnest-logo">
  <!-- 5th Image Brand Emblem (Tightly Cropped) -->
  <g transform="translate(2, 6)">
    <image href="${dataUri}" x="0" y="0" width="120" height="80" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="130" y1="10" x2="130" y2="82" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Dark theme: Crisp White) -->
  <g>
    <text x="144" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#ffffff">LAPNEST</text>
    <text x="330" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="900" fill="#FD802E">®</text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged & Ultra-Legible) -->
    <text x="145" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#ffffff">BUY</text>
    <circle cx="202" cy="72" r="3.5" fill="#FD802E" />
    <text x="218" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#ffffff">SELL</text>
    <circle cx="278" cy="72" r="3.5" fill="#FD802E" />
    <text x="294" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#ffffff">REPAIR</text>
    <circle cx="384" cy="72" r="3.5" fill="#FD802E" />
    <text x="400" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#ffffff">RENT</text>
  </g>
</svg>`;

// Build light logo SVG
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465 92" fill="none" class="lapnest-logo">
  <!-- 5th Image Brand Emblem -->
  <g transform="translate(2, 6)">
    <image href="${dataUri}" x="0" y="0" width="120" height="80" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="130" y1="10" x2="130" y2="82" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Light theme: Dark Charcoal) -->
  <g>
    <text x="144" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#111e26">LAPNEST</text>
    <text x="330" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="900" fill="#FD802E">®</text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged & Ultra-Legible) -->
    <text x="145" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#111e26">BUY</text>
    <circle cx="202" cy="72" r="3.5" fill="#FD802E" />
    <text x="218" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#111e26">SELL</text>
    <circle cx="278" cy="72" r="3.5" fill="#FD802E" />
    <text x="294" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#111e26">REPAIR</text>
    <circle cx="384" cy="72" r="3.5" fill="#FD802E" />
    <text x="400" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="#111e26">RENT</text>
  </g>
</svg>`;

// Build favicon & compact SVG (square with subtle squircle background)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#0e181f" />
  <rect x="2" y="2" width="124" height="124" rx="26" stroke="#FD802E" stroke-width="2" />
  <image href="${dataUri}" x="6" y="16" width="116" height="96" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDarkSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-compact.svg', faviconSvg, 'utf8');
fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');

console.log('Successfully written optimized logo SVGs and favicons with 465x92 tight viewBox!');
