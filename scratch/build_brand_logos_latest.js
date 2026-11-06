const fs = require('fs');

const transPng = fs.readFileSync('assets/images/logo/logo-laptop-orbit-trans.png');
const base64Data = transPng.toString('base64');
const dataUri = `data:image/png;base64,${base64Data}`;

// Write favicon.png
fs.writeFileSync('favicon.png', transPng);

// Build dark logo SVG with 490x92 viewBox and clear spacing for T and tagline
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 92" fill="none" class="lapnest-logo">
  <!-- Brand Emblem: 3D Laptop with Dual-Tone Orange & Charcoal Orbital Rings -->
  <g transform="translate(4, 7)">
    <image href="${dataUri}" x="0" y="0" width="114" height="78" preserveAspectRatio="xMidYMid meet" />
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

// Build light logo SVG
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 92" fill="none" class="lapnest-logo">
  <!-- Brand Emblem: 3D Laptop with Dual-Tone Orbital Rings -->
  <g transform="translate(4, 7)">
    <image href="${dataUri}" x="0" y="0" width="114" height="78" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="126" y1="12" x2="126" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Light theme: Dark Charcoal) -->
  <g>
    <text x="142" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#111e26">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged, Bold & Highly Legible) -->
    <text x="144" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">BUY</text>
    <circle cx="200" cy="72" r="3.5" fill="#FD802E" />
    <text x="216" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">SELL</text>
    <circle cx="274" cy="72" r="3.5" fill="#FD802E" />
    <text x="290" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">REPAIR</text>
    <circle cx="378" cy="72" r="3.5" fill="#FD802E" />
    <text x="394" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">RENT</text>
  </g>
</svg>`;

// Build favicon & compact SVG (square with squircle frame)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#0e181f" />
  <rect x="2" y="2" width="124" height="124" rx="26" stroke="#FD802E" stroke-width="2" />
  <image href="${dataUri}" x="10" y="20" width="108" height="88" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDarkSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-compact.svg', faviconSvg, 'utf8');
fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');

console.log('Successfully generated latest logo-dark.svg, logo-light.svg, logo-compact.svg, favicon.svg, and favicon.png from the latest uploaded image!');
