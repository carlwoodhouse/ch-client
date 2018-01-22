const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cnhv.co/1f846');
  await page.waitFor(25000);
  await browser.close();
})();