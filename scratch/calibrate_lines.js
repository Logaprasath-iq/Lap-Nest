const fs = require('fs');

function test(labCards, policyCards) {
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

  let allGood = true;
  for (const w of [52, 54, 56, 58]) {
    const labCounts = labCards.map(c => simulateWrap(c.text, w).length);
    const polCounts = policyCards.map(c => simulateWrap(c.text, w).length);
    const labOk = labCounts.every(c => c === 4);
    const polOk = polCounts.every(c => c === 4);
    if (!labOk || !polOk) allGood = false;
    console.log(`Width ${w}: LAB [${labCounts.join(', ')}] (${labOk ? '✅' : '❌'}), POL [${polCounts.join(', ')}] (${polOk ? '✅' : '❌'})`);
  }
  return allGood;
}

// Current text lengths:
// LAB-01: 184 chars
// LAB-02: 174 chars
// LAB-03: 167 chars -> let's expand slightly to 178 chars
// LAB-04: 166 chars -> let's expand slightly to 180 chars
// LAB-05: 178 chars -> let's adjust to 182 chars
// LAB-06: 154 chars -> let's adjust to 180 chars

const labCards = [
  {
    id: 'LAB-01',
    text: 'Continuous electrostatic grounding flooring, ionization air showers, and dissipative wrist strap validation ensuring zero static discharge damage across microscopic 3nm silicon dies.'
    // 184 chars
  },
  {
    id: 'LAB-02',
    text: 'Microscopy thermal imaging resolving sub-0.05°C hot spots across 10-layer PCB power rails, allowing instantaneous pinpointing of shorted tantalum capacitors without guesswork.'
    // 175 chars
  },
  {
    id: 'LAB-03',
    text: 'Micro-tweezer and inductive micro-pencil soldering stations with ±1°C PID temperature control for precision 0201 passives, Type-C controller ICs, and high-density logic sockets.'
    // 177 chars
  },
  {
    id: 'LAB-04',
    text: 'Triple-zone infrared & hot-air rework system with optical prism alignment for precise reflowing and certified reballing of NVIDIA RTX GPUs, CPU packages, and VRAM memory banks.'
    // 176 chars
  },
  {
    id: 'LAB-05',
    text: 'Real-time diagnostic analysis of I2C, SPI, and SMBus communication lines, power sequencing verification, and crystal oscillator clock signal jitter inspection for intermittent sleep faults.'
    // 188 chars
  },
  {
    id: 'LAB-06',
    text: 'Multi-stage ultrasonic chemical cavitation immersion tanks removing all corrosive liquid oxides, acidic coffee residues, and conductive traces beneath dense logic BGA packages.'
    // 178 chars
  }
];

const policyCards = [
  {
    id: 'POLICY 01',
    text: 'By repairing complex circuit boards at the micro-component level rather than discarding complete assemblies, our cleanroom has prevented over 18 metric tons of e-waste from entering landfills.'
    // 194 chars
  },
  {
    id: 'POLICY 02',
    text: 'Every trade-in laptop undergoes US Department of Defense certified 3-pass cryptographic wipe routines, ensuring client confidential information is permanently unrecoverable.'
    // 177 chars
  },
  {
    id: 'POLICY 03',
    text: 'We strictly reject counterfeit batteries, cloned charging adapters, and rejected grade-C display panels. Every replacement component in our retail and rental fleet is certified Grade-A OEM.'
    // 191 chars
  }
];

test(labCards, policyCards);
