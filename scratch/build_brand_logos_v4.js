const fs = require('fs');

const croppedPng = fs.readFileSync('assets/images/logo/logo-4th-cropped.png');
const base64Data = croppedPng.toString('base64');
const dataUri = `data:image/png;base64,${base64Data}`;

// Write favicon.png
fs.writeFileSync('favicon.png', croppedPng);

// Build dark logo SVG with 480x92 viewBox and clear spacing for T and tagline
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 92" fill="none" class="lapnest-logo">
  <!-- 4th Image Brand Emblem: Premium 3D Laptop with Dual-Tone Orbital Rings -->
  <g transform="translate(6, 6)">
    <image href="${dataUri}" x="0" y="0" width="105" height="80" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="122" y1="12" x2="122" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST with ® perfectly positioned after T without collision -->
  <g>
    <text x="138" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#ffffff">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged, Bold & Highly Legible) -->
    <text x="140" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">BUY</text>
    <circle cx="196" cy="72" r="3.5" fill="#FD802E" />
    <text x="212" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">SELL</text>
    <circle cx="270" cy="72" r="3.5" fill="#FD802E" />
    <text x="286" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">REPAIR</text>
    <circle cx="374" cy="72" r="3.5" fill="#FD802E" />
    <text x="390" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#ffffff">RENT</text>
  </g>
</svg>`;

// Build light logo SVG
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 92" fill="none" class="lapnest-logo">
  <!-- 4th Image Brand Emblem -->
  <g transform="translate(6, 6)">
    <image href="${dataUri}" x="0" y="0" width="105" height="80" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="122" y1="12" x2="122" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Light theme: Dark Charcoal) -->
  <g>
    <text x="138" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#111e26">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (Enlarged, Bold & Highly Legible) -->
    <text x="140" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">BUY</text>
    <circle cx="196" cy="72" r="3.5" fill="#FD802E" />
    <text x="212" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">SELL</text>
    <circle cx="270" cy="72" r="3.5" fill="#FD802E" />
    <text x="286" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">REPAIR</text>
    <circle cx="374" cy="72" r="3.5" fill="#FD802E" />
    <text x="390" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#111e26">RENT</text>
  </g>
</svg>`;

// Build favicon & compact SVG (square with squircle frame)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#0e181f" />
  <rect x="2" y="2" width="124" height="124" rx="26" stroke="#FD802E" stroke-width="2" />
  <image href="${dataUri}" x="12" y="14" width="104" height="100" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDarkSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg, 'utf8');
fs.writeFileSync('assets/images/logo/logo-compact.svg', faviconSvg, 'utf8');
fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');

console.log('Successfully written brand logos and favicons from the 4th image!');
