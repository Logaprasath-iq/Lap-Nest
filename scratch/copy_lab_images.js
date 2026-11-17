const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf';
const destDir = path.join(__dirname, '..', 'assets', 'images', 'lab');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = [
  { prefix: 'lab_01_esd', dest: 'lab-01-esd.jpg' },
  { prefix: 'lab_02_flir', dest: 'lab-02-flir.jpg' },
  { prefix: 'lab_03_soldering', dest: 'lab-03-soldering.jpg' },
  { prefix: 'lab_04_bga', dest: 'lab-04-bga.jpg' },
  { prefix: 'lab_05_oscilloscope', dest: 'lab-05-oscilloscope.jpg' },
  { prefix: 'lab_06_ultrasonic', dest: 'lab-06-ultrasonic.jpg' }
];

const files = fs.readdirSync(srcDir);

mapping.forEach(m => {
  const match = files.find(f => f.startsWith(m.prefix) && f.endsWith('.jpg'));
  if (match) {
    const srcFile = path.join(srcDir, match);
    const destFile = path.join(destDir, m.dest);
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${match} -> ${destFile} (${fs.statSync(destFile).size} bytes)`);
  } else {
    console.warn(`Could not find file matching ${m.prefix}`);
  }
});
