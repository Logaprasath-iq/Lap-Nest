const fs = require('fs');

const p1_options = [
  "By repairing circuit boards at the micro-component level rather than discarding full assemblies, our team has prevented over 18 metric tons of toxic electronic waste from entering regional landfills.",
  "By repairing circuit boards at the micro-component level rather than discarding full assemblies, our cleanroom team has prevented over 18 metric tons of electronic waste from entering landfills every year.",
  "By repairing circuit boards at the micro-component level rather than discarding full assemblies, our engineering team has prevented over 18 metric tons of toxic electronic waste from entering regional landfills."
];

const p2 = "Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.";
const p3 = "We strictly reject counterfeit batteries, cloned charging adapters, and rejected grade-C display panels. Every replacement component in our retail and rental fleet is certified Grade-A OEM.";

function simulateWrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) {
      cur = (cur + ' ' + w).trim();
    } else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

p1_options.forEach((opt, idx) => {
  console.log(`Option ${idx + 1} (${opt.length} chars):`);
  for (const w of [56, 58, 60, 62, 64]) {
    const l1 = simulateWrap(opt, w).length;
    const l2 = simulateWrap(p2, w).length;
    const l3 = simulateWrap(p3, w).length;
    console.log(`  Width ${w}: P1=${l1}, P2=${l2}, P3=${l3} -> ${l1 === 4 && l2 === 4 && l3 === 4 ? 'ALL 4! ✅' : 'MISMATCH'}`);
  }
  console.log();
});
