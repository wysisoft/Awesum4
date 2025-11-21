import { chromium } from 'playwright';

async function launchWithRecorder() {
  const browser = await chromium.launchPersistentContext('UserDataDir', {
    headless: false,
  });  

  const page = await browser.pages()[0];

  await page.goto('https://dev.awesum.app/');
  
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Delete All Browser Data' }).nth(1).click();
  await page.locator('#resetEverythingValueInput').fill('38');
  await page.getByRole('button', { name: 'Submit' }).click();
  await browser.close();

}

launchWithRecorder().catch(console.error);
