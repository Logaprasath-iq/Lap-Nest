const fs = require('fs');

function testPolicy(p1, p2, p3) {
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

  const pCards = [{ id: 'P1', text: p1 }, { id: 'P2', text: p2 }, { id: 'P3', text: p3 }];
  let ok = true;
  for (const w of [50, 52, 54, 56, 58, 60]) {
    const counts = pCards.map(c => simulateWrap(c.text, w).length);
    const pass = counts.every(c => c === 4);
    if (!pass) ok = false;
    console.log(`Width ${w}: [${counts.join(', ')}] -> ${pass ? 'PASS ✅' : 'FAIL ❌'}`);
  }
  return ok;
}

const p1 = "By repairing circuit boards at the micro-component level rather than discarding full assemblies, our team has prevented over 18 metric tons of electronic waste from entering landfills.";
const p2 = "Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.";
const p3 = "We strictly reject counterfeit batteries, cloned charging adapters, and rejected grade-C display panels. Every replacement component in our retail and rental fleet is certified Grade-A OEM.";

console.log('Testing policy candidates:');
testPolicy(p1, p2, p3);
