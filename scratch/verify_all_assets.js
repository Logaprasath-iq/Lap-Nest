const fs = require('fs');
const path = require('path');

const files = [
  // Products
  'assets/images/products/dell-inspiron.jpg',
  'assets/images/products/hp-pavilion.jpg',
  'assets/images/products/lenovo-thinkpad.jpg',
  'assets/images/products/asus-rog.jpg',
  'assets/images/products/acer-nitro.jpg',
  'assets/images/products/apple-macbook.jpg',
  'assets/images/products/macbook-air.jpg',
  'assets/images/products/dell-latitude.jpg',
  'assets/images/products/thinkpad-t480.jpg',
  'assets/images/products/accessory-mouse.jpg',
  'assets/images/products/accessory-keyboard.jpg',
  'assets/images/products/accessory-stand.jpg',
  // Services
  'assets/images/services/screen-repair.jpg',
  'assets/images/services/battery-replace.jpg',
  'assets/images/services/motherboard-repair.jpg',
  'assets/images/services/ssd-upgrade.jpg',
  'assets/images/services/ram-upgrade.jpg',
  'assets/images/services/keyboard-repair.jpg',
  // General / About / Categories / Deals
  'assets/images/general/cleanroom.jpg',
  'assets/images/general/category-gaming.jpg',
  'assets/images/general/category-business.jpg',
  'assets/images/general/category-student.jpg',
  'assets/images/general/category-pro.jpg',
  'assets/images/general/category-accessories.jpg',
  'assets/images/general/deals-gaming.jpg',
  'assets/images/general/deals-student.jpg',
  'assets/images/general/deals-refurbished.jpg',
  'assets/images/general/deals-rental.jpg',
  // Clients
  'assets/images/clients/client-1.jpg',
  'assets/images/clients/client-2.jpg',
  'assets/images/clients/client-3.jpg'
];

files.forEach(f => {
  const full = path.join('c:/Users/Lenovo/Desktop/Lapnest', f);
  if (fs.existsSync(full)) {
    const stat = fs.statSync(full);
    console.log(`${f} -> Size: ${stat.size} bytes | Mtime: ${stat.mtime.toISOString()}`);
  } else {
    console.log(`MISSING: ${f}`);
  }
});
