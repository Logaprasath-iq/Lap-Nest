const fs = require('fs');

const uploadsDir = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/';
const files = [
  'media_1793857188905_ca731e4f.png',
  'media_1793857309207_aa796fb8.png',
  'media_1793857346277_72c5ab71.png',
  'media_1793857610628_db30421f.png'
];

files.forEach(f => {
  const p = uploadsDir + f;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`${f}: size = ${stat.size} bytes`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
});
