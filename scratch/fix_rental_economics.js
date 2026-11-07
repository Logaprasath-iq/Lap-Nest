const fs = require('fs');

let jsContent = fs.readFileSync('assets/js/blog-details.js', 'utf8');

const target = "heading: '3. Scaling with Project Cycles and Summer Intern Squads',";
const idx = jsContent.indexOf(target);

if (idx !== -1) {
  const closeBracket = jsContent.indexOf("],\n      cta: {", idx);
  if (closeBracket !== -1) {
    const before = jsContent.slice(0, closeBracket);
    const after = jsContent.slice(closeBracket);
    const addedSections = `,
        {
          id: 'sec-4',
          heading: '4. Eliminating IT Maintenance Overhead & E-Waste Liabilities',
          content: [
            'Managing an internal fleet of 50 owned laptops requires dedicating IT staff to battery diagnostics, thermal repasting, screen replacements, and compliant e-waste disposal under Central Pollution Control Board (CPCB) regulations.',
            'With LAPNEST rentals, end-to-end maintenance, annual preventive servicing, and certified end-of-life recycling are fully managed by our engineering lab at zero added expense to your balance sheet.'
          ],
          callout: '<strong>Operational Metric:</strong> Startups save an average of 18 IT engineering hours per month by outsourcing fleet maintenance and replacements to LAPNEST.'
        },
        {
          id: 'sec-5',
          heading: '5. Enterprise Fleet Customization & Zero Security Deposit Terms',
          content: [
            'We pre-load your company\\'s custom VPN configs, Docker containers, and development toolchains prior to dispatch. For verified GST-registered companies in Chennai, we offer zero security deposit leasing with monthly billing.'
          ]
        }`;

    jsContent = before + addedSections + after;
    fs.writeFileSync('assets/js/blog-details.js', jsContent, 'utf8');
    console.log('Successfully enriched rental-economics to 5 sections!');
  } else {
    console.log('closeBracket not found');
  }
} else {
  console.log('target not found');
}
