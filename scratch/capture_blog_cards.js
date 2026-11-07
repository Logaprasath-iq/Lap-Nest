const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://127.0.0.1:3000/blog.html', { waitUntil: 'networkidle0' });
  
  // Wait for articles grid
  await page.waitForSelector('#blog-articles-grid');
  
  // Screenshot the cards grid
  const grid = await page.$('#blog-articles-grid');
  await grid.screenshot({ path: 'scratch/blog_cards_after.png' });
  console.log('Saved scratch/blog_cards_after.png');
  
  await browser.close();
})();
