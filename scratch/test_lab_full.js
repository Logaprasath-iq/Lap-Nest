const fs = require('fs');

const labCards = [
  {
    id: 'LAB-01',
    text: 'Continuous electrostatic grounding flooring, ionization air showers, and dissipative wrist strap validation ensuring zero static discharge damage across microscopic 3nm silicon dies.'
  },
  {
    id: 'LAB-02',
    text: 'Microscopy thermal imaging resolving sub-0.05°C hot spots across 10-layer PCB power rails, allowing instantaneous pinpointing of shorted tantalum capacitors without guesswork.'
  },
  {
    id: 'LAB-03',
    text: 'Micro-tweezer and inductive micro-pencil soldering stations with ±1°C PID temperature control for precision 0201 passives, Type-C controller ICs, and high-density logic sockets.'
  },
  {
    id: 'LAB-04',
    text: 'Triple-zone infrared & hot-air rework system with optical prism alignment for precise reflowing and certified reballing of NVIDIA RTX GPUs, CPU packages, and VRAM memory banks.'
  },
  {
    id: 'LAB-05',
    text: 'Real-time diagnostic analysis of I2C, SPI, and SMBus communication lines, power sequencing verification, and crystal oscillator clock signal jitter inspection for intermittent sleep faults.'
  },
  {
    id: 'LAB-06',
    text: 'Multi-stage ultrasonic chemical cavitation immersion tanks removing all corrosive liquid oxides, acidic coffee residues, and conductive traces beneath dense logic BGA packages.'
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

for (const w of [50, 52, 54, 56, 58, 60]) {
  const counts = labCards.map(c => simulateWrap(c.text, w).length);
  const pass = counts.every(c => c === 4);
  console.log(`Width ${w}: [${counts.join(', ')}] -> ${pass ? 'PASS ✅' : 'FAIL ❌'}`);
}
