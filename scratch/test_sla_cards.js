const fs = require('fs');

const cards = [
  {
    num: "01",
    title: "Showroom Sales & Retail",
    desc: "Multi-brand laptop inventory with zero grey-market imports.",
    points: [
      "1-Year Pan-India Onsite Warranty",
      "7-Day Zero-Questions Hardware Exchange",
      "Free Old Laptop Data Migration",
      "100% Original Brand Power Bricks"
    ],
    sla: "SLA: Same-Day Store Handover"
  },
  {
    num: "02",
    title: "Corporate Fleet Leasing",
    desc: "Turnkey computing infrastructure for IT corridors & startups.",
    points: [
      "2-Hour Hot-Swap Machine Delivery in OMR",
      "₹0 Security Deposit for GST Registered Firms",
      "Hardware Refresh Every 18 Months",
      "Pre-Imaged with Custom Corporate MDM"
    ],
    sla: "SLA: 99.8% Fleet Uptime"
  },
  {
    num: "03",
    title: "Cleanroom Micro-Repair",
    desc: "ISO-standard motherboard micro-soldering & component repair.",
    points: [
      "₹0 Diagnostic & Inspection Fee",
      "90-Day Comprehensive Repair Warranty",
      "Strict Zero Data Access Privacy Protocol",
      "Component-Level Fix over Board Replacement"
    ],
    sla: "SLA: 4-Hour Express Bench"
  },
  {
    num: "04",
    title: "Instant Buyback & Exchange",
    desc: "Transparent algorithmic device valuation with immediate payout.",
    points: [
      "15-Minute Instant UPI / Bank Settlement",
      "DoD 5220.22-M Certified Data Destruction",
      "Up to 65% Value Retention on 1-Yr Devices",
      "Exchange Bonus on Store Laptop Purchases"
    ],
    sla: "SLA: Instant Paperless Payout"
  }
];

console.log("Checking line lengths for all 4 cards...");
cards.forEach(c => {
  console.log(`[Card ${c.num} - ${c.title}]:`);
  c.points.forEach((p, i) => console.log(`  P${i+1} (${p.length} chars): ${p}`));
});
