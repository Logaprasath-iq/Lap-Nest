const fs = require('fs');

['media_1793796814940_8ce1facd.png', 'media_1793796948066_1064efce.png'].forEach(name => {
  const p = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/' + name;
  const dest = 'assets/images/' + name;
  fs.copyFileSync(p, dest);
  console.log(`Copied ${name} to ${dest}`);
});
