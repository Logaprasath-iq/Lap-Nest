const fs = require('fs');

const p = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793792420644_5802afd7.png';
if (fs.existsSync(p)) {
  const buf = fs.readFileSync(p);
  console.log(`media_1793792420644_5802afd7.png: ${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}, ${buf.length} bytes`);
}
