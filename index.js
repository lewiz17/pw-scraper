const { chromium } = require('playwright');

async function runScraper() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto('https://www.google.com');
  
    const title = await page.title();
    console.log('Título de la página:', title);
  
    await browser.close();
}

runScraper().catch((error) => console.error(error));
