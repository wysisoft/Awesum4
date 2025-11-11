
import { exec, execSync } from 'node:child_process';
import { chromium,test } from '@playwright/test';
execSync('npx tsx automation.ts');
execSync('pkill chrome');
execSync('find ~/.config/google-chrome -type d -name IndexedDB -exec rm -rf {}/* \;');

test('headed chromium with default userDataDir', async () => {

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  //const context = await browser.newContext();
  const context = await browser.newContext({ viewport: { width: 0, height: 0 }, storageState: 'myGoogleAuthDemobrat.json' });

  const page = await context.newPage();

  //await page.waitForTimeout(30000);
  //await page.context().storageState({ path: 'myGoogleAuthDemobrat.json' });

  await page.goto('https://awesum.app/');
  
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Create App' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('tlwTest');
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Unique Name' }).fill('tlwTest');
  await page.getByRole('button', { name: 'Lets Go!' }).click();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Delete All Server Data' }).click();
  await page.getByRole('spinbutton').fill('38');
  await page.getByRole('button', { name: 'Submit' }).click();

});
