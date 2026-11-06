const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const inputPath = 'assets/images/logo/logo-3d-laptop.png';
  const outputPath = 'assets/images/logo/logo-icon-3d.png';

  console.log('Processing 3D logo from:', inputPath);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height);

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Background removal: the background is pure white #ffffff
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const brightness = (r + g + b) / 3;
    const diff = Math.max(Math.abs(r - 255), Math.abs(g - 255), Math.abs(b - 255));

    if (brightness > 248 && diff < 10) {
      data[i + 3] = 0;
    } else if (brightness > 230 && diff < 25) {
      const t = (brightness - 230) / (248 - 230);
      data[i + 3] = Math.round(255 * (1 - t));
    }
  }

  // Trim transparent edges and resize cleanly
  const trimmed = await sharp(data, {
    raw: { width, height, channels: 4 }
  })
    .trim()
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(outputPath, trimmed);
  console.log('Saved transparent 3D logo to:', outputPath, trimmed.length, 'bytes');

  // Also create a 128x128 favicon.png
  const faviconBuffer = await sharp(trimmed)
    .resize(128, 128)
    .png()
    .toBuffer();
  fs.writeFileSync('favicon.png', faviconBuffer);
  console.log('Saved favicon.png, size:', faviconBuffer.length);

  // Convert trimmed PNG to base64
  const base64Data = trimmed.toString('base64');
  const dataUri = `data:image/png;base64,${base64Data}`;

  // Create logo-dark.svg with the 3D laptop icon embedded
  const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" fill="none" class="lapnest-logo">
  <!-- 3D Laptop Gear Icon (from user Image 3) -->
  <g transform="translate(10, 8)">
    <image href="${dataUri}" x="0" y="0" width="104" height="104" />
  </g>

  <!-- Pumpkin Vertical Divider -->
  <line x1="140" y1="20" x2="140" y2="100" stroke="#FD802E" stroke-width="4.5" stroke-linecap="round" />

  <!-- LAPNEST Brand Wordmark (Dark theme: White) -->
  <g transform="translate(165, 22)">
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

  // Create logo-light.svg with the 3D laptop icon embedded
  const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" fill="none" class="lapnest-logo">
  <g transform="translate(10, 8)">
    <image href="${dataUri}" x="0" y="0" width="104" height="104" />
  </g>

  <line x1="140" y1="20" x2="140" y2="100" stroke="#FD802E" stroke-width="4.5" stroke-linecap="round" />

  <g transform="translate(165, 22)">
    <text x="0" y="46" font-family="'Outfit', 'Plus Jakarta Sans', -apple-system, sans-serif" font-size="48" font-weight="900" letter-spacing="3.5" fill="#111e26">LAPNEST</text>
    <text x="340" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#FD802E">®</text>

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

  // Create favicon.svg
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#0e181f" />
  <rect x="2" y="2" width="124" height="124" rx="26" stroke="#233D4C" stroke-width="2" />
  <image href="${dataUri}" x="12" y="12" width="104" height="104" />
</svg>`;

  fs.writeFileSync('assets/images/logo/logo-dark.svg', logoDarkSvg, 'utf8');
  fs.writeFileSync('assets/images/logo/logo-light.svg', logoLightSvg, 'utf8');
  fs.writeFileSync('assets/images/logo/logo-compact.svg', faviconSvg, 'utf8');
  fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');

  console.log('Successfully updated logo-dark.svg, logo-light.svg, logo-compact.svg, and favicon.svg with 3D laptop gear icon!');
}

processLogo().catch(console.error);
