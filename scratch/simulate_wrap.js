const fs = require('fs');

const card1 = "We share full microscopic photographs and schematic readings of diagnosed board issues before quoting a single rupee.";
const card2 = "Every machine that leaves our facility undergoes rigorous 40-point burn-in stress testing and chip-level thermal benchmarks.";
const card3 = "We responsibly recycle dead silicon, salvage functional micro-ICs, and grant renewed second lives to corporate off-lease machines.";
const card4 = "Our relationship does not end at the checkout counter. Free thermal checkups and firmware assistance for all customers.";

function simulateWrap(text, maxCharsPerLine = 38) {
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

[card1, card2, card3, card4].forEach((c, idx) => {
  const wrapped = simulateWrap(c);
  console.log(`Card ${idx + 1} (${wrapped.length} lines):`);
  wrapped.forEach((l, i) => console.log(`  Line ${i + 1}: ${l}`));
  console.log();
});
