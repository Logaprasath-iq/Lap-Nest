const fs = require('fs');

['assets/images/logo/laptop-orbit-clean.png',
 'assets/images/logo/logo-5th.png',
 'assets/images/logo/logo-orbital.png',
 'assets/images/logo/logo-original.png'].forEach(f => {
  if (fs.existsSync(f)) {
    const buf = fs.readFileSync(f);
    console.log(`${f}: ${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}, ${buf.length} bytes`);
  }
});
