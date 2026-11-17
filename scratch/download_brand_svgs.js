const https = require('https');
const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'assets', 'images', 'brands');
if (!fs.existsSync(brandsDir)) {
  fs.mkdirSync(brandsDir, { recursive: true });
}

const icons = [
  { name: 'apple', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg' },
  { name: 'dell', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dell.svg' },
  { name: 'lenovo', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lenovo.svg' },
  { name: 'hp', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hp.svg' },
  { name: 'asus', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/asus.svg' },
  { name: 'acer', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/acer.svg' },
];

let completed = 0;
const svgContents = {};

icons.forEach(icon => {
  https.get(icon.url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (res.statusCode === 200) {
        // Ensure fill="currentColor" so it works dynamically with Tailwind classes (text-white, group-hover:text-[#FD802E], light mode dark text, etc.)
        let processed = data;
        if (!processed.includes('fill=')) {
          processed = processed.replace('<path ', '<path fill="currentColor" ');
        } else {
          processed = processed.replace(/fill="[^"]*"/g, 'fill="currentColor"');
        }
        const filePath = path.join(brandsDir, `${icon.name}.svg`);
        fs.writeFileSync(filePath, processed, 'utf8');
        svgContents[icon.name] = processed;
        console.log(`Saved ${icon.name}.svg (${processed.length} bytes)`);
      } else {
        console.error(`Failed to download ${icon.name}: ${res.statusCode}`);
      }
      if (++completed === icons.length) {
        console.log('All brand SVGs saved successfully!');
        fs.writeFileSync(path.join(__dirname, 'brand_svgs.json'), JSON.stringify(svgContents, null, 2), 'utf8');
      }
    });
  }).on('error', err => {
    console.error(`Error downloading ${icon.name}:`, err.message);
  });
});
