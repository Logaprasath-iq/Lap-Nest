const fs = require('fs');

const cards = [
  {
    title: "Unwavering Honesty",
    text: "We share full microscopic photographs and schematic readings of diagnosed board issues before quoting a single rupee."
  },
  {
    title: "Technical Rigor",
    text: "Every machine that leaves our facility undergoes rigorous 40-point burn-in stress testing and chip-level thermal benchmarks."
  },
  {
    title: "Zero E-Waste",
    text: "We responsibly recycle dead silicon, salvage functional micro-ICs, and grant renewed second lives to corporate off-lease laptops."
  },
  {
    title: "Lifelong Support",
    text: "Our relationship does not end at the checkout counter. Free thermal checkups and firmware assistance for all customers."
  }
];

cards.forEach(c => {
  console.log(`[${c.title}]: ${c.text.length} chars | ${c.text.split(' ').length} words`);
  console.log(`  "${c.text}"\n`);
});
