const fs = require('fs');

const videoSrc = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793863852902_ef4bff77.mp4';
const stat = fs.statSync(videoSrc);
console.log('Video size:', stat.size, 'bytes');

// Check assets/videos directory
if (!fs.existsSync('assets/videos')) {
  fs.mkdirSync('assets/videos', { recursive: true });
}

// Copy video to assets/videos/diagnostic-lab.mp4
const destPath = 'assets/videos/diagnostic-lab.mp4';
fs.copyFileSync(videoSrc, destPath);
console.log('Copied video to', destPath);

// List assets/videos
console.log('assets/videos contents:', fs.readdirSync('assets/videos'));
