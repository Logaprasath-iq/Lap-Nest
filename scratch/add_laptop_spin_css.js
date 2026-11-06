const fs = require('fs');

let css = fs.readFileSync('assets/css/input.css', 'utf8');

const laptopSpinCss = `
/* 3D Rotating & Floating Laptop Showcase Animation */
@keyframes laptop3DSpin {
  0% {
    transform: perspective(1000px) rotateY(-14deg) rotateX(8deg) translateY(0px);
  }
  25% {
    transform: perspective(1000px) rotateY(-2deg) rotateX(14deg) translateY(-8px);
  }
  50% {
    transform: perspective(1000px) rotateY(14deg) rotateX(8deg) translateY(0px);
  }
  75% {
    transform: perspective(1000px) rotateY(-2deg) rotateX(4deg) translateY(8px);
  }
  100% {
    transform: perspective(1000px) rotateY(-14deg) rotateX(8deg) translateY(0px);
  }
}

.animate-laptop-spin {
  animation: laptop3DSpin 9s ease-in-out infinite;
  transform-style: preserve-3d;
  will-change: transform;
}
`;

if (!css.includes('animate-laptop-spin')) {
  css += laptopSpinCss;
  fs.writeFileSync('assets/css/input.css', css, 'utf8');
  console.log('Appended animate-laptop-spin to input.css');
} else {
  console.log('animate-laptop-spin already in input.css');
}
