const fs = require('fs');

const labCards = [
  {
    id: 'LAB-01',
    text: 'Continuous electrostatic grounding flooring, ionization air showers, and certified dissipative wrist strap validation ensuring zero static discharge damage across microscopic 3nm silicon dies.'
  },
  {
    id: 'LAB-02',
    text: 'Microscopy thermal imaging resolving sub-0.05°C hot spots across 10-layer PCB power rails, allowing instantaneous pinpointing of shorted tantalum capacitors without guessing.'
  },
  {
    id: 'LAB-03',
    text: 'Micro-tweezer and inductive micro-pencil soldering stations with ±1°C PID temperature control for 0201 passives, Type-C controller ICs, and high-density logic sockets.'
  },
  {
    id: 'LAB-04',
    text: 'Triple-zone infrared & hot-air rework system with optical prism alignment for precise reflowing and reballing of NVIDIA RTX GPUs, CPU packages, and VRAM memory banks.'
  },
  {
    id: 'LAB-05',
    text: 'Real-time diagnostic analysis of I2C, SPI, and SMBus communication lines, power sequencing verification, and precision crystal oscillator clock signal jitter inspection for intermittent sleep faults.'
  },
  {
    id: 'LAB-06',
    text: 'Multi-stage ultrasonic chemical cavitation immersion tanks removing all corrosive liquid oxides, acidic coffee residues, and mineral conductive traces trapped deep beneath dense BGA packages.'
  }
];

const policyCards = [
  {
    id: 'POLICY 01',
    text: 'By repairing complex circuit boards at the discrete micro-component level rather than discarding complete factory assemblies, our cleanroom has prevented over 18 metric tons of e-waste from landfills.'
  },
  {
    id: 'POLICY 02',
    text: 'Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.'
  },
  {
    id: 'POLICY 03',
    text: 'We strictly reject counterfeit third-party batteries, cloned charging bricks, and rejected grade-C display panels. Every single replacement component across our retail and rental fleet is certified Grade-A OEM.'
  }
];

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

console.log('=== LAB CARDS WRAPPING ===');
[52, 54, 56, 58].forEach(w => {
  const counts = labCards.map(c => simulateWrap(c.text, w).length);
  console.log(`Width ${w}: [${counts.join(', ')}] lines -> ${counts.every(c => c === 4) ? 'ALL 4 LINES! ✅' : 'MISMATCH ❌'}`);
});

console.log('\n=== POLICY CARDS WRAPPING ===');
[52, 54, 56, 58].forEach(w => {
  const counts = policyCards.map(c => simulateWrap(c.text, w).length);
  console.log(`Width ${w}: [${counts.join(', ')}] lines -> ${counts.every(c => c === 4) ? 'ALL 4 LINES! ✅' : 'MISMATCH ❌'}`);
});
