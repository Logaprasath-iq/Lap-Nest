const fs = require('fs');

const src = 'C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.user_uploaded/media_1793795265366_225869e6.mp4';

if (!fs.existsSync('assets/videos')) {
  fs.mkdirSync('assets/videos', { recursive: true });
}

fs.copyFileSync(src, 'assets/videos/home1.mp4');
fs.copyFileSync(src, 'assets/videos/hero-laptop.mp4');
fs.copyFileSync(src, 'assets/videos/hero-video.mp4');

console.log('Successfully copied home1.mp4 to assets/videos/:');
console.log(' - assets/videos/home1.mp4:', fs.statSync('assets/videos/home1.mp4').size, 'bytes');
console.log(' - assets/videos/hero-laptop.mp4:', fs.statSync('assets/videos/hero-laptop.mp4').size, 'bytes');
console.log(' - assets/videos/hero-video.mp4:', fs.statSync('assets/videos/hero-video.mp4').size, 'bytes');
