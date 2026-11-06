const fs = require('fs');

const repairHtml = fs.readFileSync('repair-upgrade.html', 'utf8');

['Common Hardware Symptoms', 'Schedule Your Laptop Repair', 'Software & Firmware Calibration'].forEach(t => {
  const idx = repairHtml.indexOf(t);
  if (idx !== -1) {
    console.log(`\n=== "${t}" ===`);
    console.log(repairHtml.substring(Math.max(0, idx - 200), idx + 200));
  }
});
