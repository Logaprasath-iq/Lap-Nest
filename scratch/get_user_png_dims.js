const fs = require('fs');

function getPngDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.toString('ascii', 1, 4) === 'PNG') {
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { width, height };
  }
  return null;
}

const uploadsDir = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/';
console.log('img 3:', getPngDimensions(uploadsDir + 'media_1793857346277_72c5ab71.png'));
console.log('img 4:', getPngDimensions(uploadsDir + 'media_1793857610628_db30421f.png'));
