const fs = require('fs');

const lightBuf = fs.readFileSync('assets/images/logo/logo-orbital-crop-light.png');
const base64Data = 'data:image/png;base64,' + lightBuf.toString('base64');

const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 92" fill="none" class="lapnest-logo">
  <!-- Brand Emblem: 3D Laptop in Solid Black/Charcoal for Light Mode -->
  <g transform="translate(4, 7)">
    <image href="${base64Data}" x="0" y="0" width="114" height="78" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Pumpkin Divider Line -->
  <line x1="126" y1="12" x2="126" y2="80" stroke="#FD802E" stroke-width="3.5" stroke-linecap="round" />

  <!-- Brand Wordmark LAPNEST (Light Theme: Solid Black/Charcoal Text) -->
  <g>
    <text x="142" y="46" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="2" fill="#0e181f">LAPNEST<tspan dx="8" dy="-18" font-size="13" font-weight="800" fill="#FD802E">®</tspan></text>

    <!-- Tagline: BUY • SELL • REPAIR • RENT (High Contrast Black) -->
    <text x="144" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#0e181f">BUY</text>
    <circle cx="200" cy="72" r="3.5" fill="#FD802E" />
    <text x="216" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#0e181f">SELL</text>
    <circle cx="274" cy="72" r="3.5" fill="#FD802E" />
    <text x="290" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#0e181f">REPAIR</text>
    <circle cx="378" cy="72" r="3.5" fill="#FD802E" />
    <text x="394" y="78" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" font-size="16" font-weight="900" letter-spacing="3" fill="#0e181f">RENT</text>
  </g>
</svg>`;

fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg);
console.log('Successfully updated logo-light.svg with solid black/charcoal laptop emblem!');
