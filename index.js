const { chromium } = require('playwright');

async function runScraper() {
    const browser = await chromium.launch({
        executablePath: process.env.PLAYWRIGHT_BROWSERS_PATH,
        args: [
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-sandbox'
        ],
        chromiumSandbox: false
      });
    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto('https://www.google.com');
  
    const title = await page.title();
    console.log('Título de la página:', title);
  
    await browser.close();
}

runScraper().catch((error) => console.error(error));
