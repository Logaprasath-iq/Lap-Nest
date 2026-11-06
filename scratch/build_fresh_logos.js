const fs = require('fs');

const cropBuf = fs.readFileSync('assets/images/logo/logo-orbital-crop.png');
const base64Data = 'data:image/png;base64,' + cropBuf.toString('base64');

// 1. logo-dark.svg
const logoDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 92" fill="none" class="lapnest-logo">
  <!-- Brand Emblem: 3D Laptop with Dual-Tone Orange & Charcoal Orbital Rings -->
  <g transform="translate(4, 7)">
    <image href="${base64Data}" x="0" y="0" width="114" height="78" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="126" y1="12" x2="126" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST with ® perfectly positioned after T without collision -->
  <g>
    <text x="142" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#ffffff">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged, Bold & Highly Legible) -->
    <text x="144" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">BUY</text>
    <circle cx="200" cy="72" r="3.5" fill="#FD802E" />
    <text x="216" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">SELL</text>
    <circle cx="274" cy="72" r="3.5" fill="#FD802E" />
    <text x="290" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">REPAIR</text>
    <circle cx="378" cy="72" r="3.5" fill="#FD802E" />
    <text x="394" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">RENT</text>
  </g>
</svg>`;

// 2. logo-light.svg
const logoLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 92" fill="none" class="lapnest-logo">
  <!-- Brand Emblem: 3D Laptop with Dual-Tone Orbital Rings -->
  <g transform="translate(4, 7)">
    <image href="${base64Data}" x="0" y="0" width="114" height="78" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="126" y1="12" x2="126" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Light Theme: Charcoal Text) -->
  <g>
    <text x="142" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#0e181f">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (High Contrast) -->
    <text x="144" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#172731">BUY</text>
    <circle cx="200" cy="72" r="3.5" fill="#FD802E" />
    <text x="216" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#172731">SELL</text>
    <circle cx="274" cy="72" r="3.5" fill="#FD802E" />
    <text x="290" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#172731">REPAIR</text>
    <circle cx="378" cy="72" r="3.5" fill="#FD802E" />
    <text x="394" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#172731">RENT</text>
  </g>
</svg>`;

// 3. logo-compact.svg
const logoCompact = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90" fill="none">
  <image href="${base64Data}" x="2" y="5" width="116" height="80" preserveAspectRatio="xMidYMid meet" />
</svg>`;

// 4. favicon.svg
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <circle cx="64" cy="64" r="62" fill="#0e181f" stroke="#FD802E" stroke-width="4" />
  <image href="${base64Data}" x="14" y="24" width="100" height="80" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDark);
fs.writeFileSync('assets/images/logo/logo-light.svg', logoLight);
fs.writeFileSync('assets/images/logo/logo-compact.svg', logoCompact);
fs.writeFileSync('assets/images/logo/favicon.svg', faviconSvg);
fs.writeFileSync('favicon.svg', faviconSvg);

console.log('Successfully updated logo-dark.svg, logo-light.svg, logo-compact.svg, favicon.svg and root favicon.svg!');
