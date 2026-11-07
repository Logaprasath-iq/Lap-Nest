const fs = require('fs');

const cards = [
  "We share full microscopic photographs and schematic readings of diagnosed board issues before quoting a single rupee.",
  "Every machine that leaves our facility undergoes rigorous 40-point burn-in stress testing and chip-level thermal benchmarks.",
  "We responsibly recycle dead silicon, salvage functional micro-ICs, and grant renewed second lives to corporate off-lease machines.",
  "Our relationship does not end at the checkout counter. Free thermal checkups and firmware assistance for all customers."
];

function simulateWrap(text, maxCharsPerLine) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

[36, 37, 38, 39, 40].forEach(w => {
  const lineCounts = cards.map(c => simulateWrap(c, w).length);
  console.log(`Width ${w} chars: [${lineCounts.join(', ')}] lines`);
});
