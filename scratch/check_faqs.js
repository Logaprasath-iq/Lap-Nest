const fs = require('fs');

const files = ['index.html', 'faq.html', 'pricing.html', 'repair-upgrade.html', 'service-details.html', 'about.html'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const items = (content.match(/faq-item/g) || []).length;
    const triggers = (content.match(/faq-trigger/g) || []).length;
    const answers = (content.match(/faq-answer/g) || []).length;
    const details = (content.match(/<details/g) || []).length;
    const faqMentions = (content.match(/FAQ/gi) || []).length;
    console.log(`${f}: items=${items}, triggers=${triggers}, answers=${answers}, details=${details}, FAQ mentions=${faqMentions}`);
  }
});
