//import { chromium } from 'playwright-extra';
import { chromium, Page } from 'playwright';

// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);


async function launchWithRecorder(dataDir: string) {

  const browser = await chromium.launchPersistentContext(dataDir, {
    headless: false,
    viewport: { width: 500, height: 500 },
    args: [
      '--no-first-run',
      '--disable-session-crashed-bubble', // ⚡ hides the restore popup
      '--disable-infobars',                // optional: hide other infobars
    ],
  });

  return browser!;

  // Now the recorder extension should be active, and you can start recording manually
}

const wildertBrowser = await launchWithRecorder('./../wildert/UserDataDir').catch(console.error);

const wildert = await wildertBrowser.pages()[0];
await wildert.goto('https://dev.awesum.app/');


await wildert.getByRole('link', { name: 'Settings' }).click();
await wildert.getByRole('button', { name: 'Create App' }).click();
await wildert.getByRole('textbox', { name: 'Name', exact: true }).click();
await wildert.getByRole('textbox', { name: 'Name', exact: true }).fill('a');
await wildert.getByRole('textbox', { name: 'Name', exact: true }).press('Tab');
await wildert.getByRole('textbox', { name: 'Unique Name' }).fill('a');
await wildert.getByRole('button', { name: 'Lets Go!' }).click();






const demobratBrowser = await launchWithRecorder('./../demobrat/UserDataDir').catch(console.error);
const demobrat = await demobratBrowser.pages()[0];
await demobrat.goto('https://dev.awesum.app/');


await demobrat.getByRole('link', { name: 'Settings' }).click();
await demobrat.getByRole('button', { name: 'Create App' }).click();
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).click();
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).fill('b');
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).press('Tab');
await demobrat.getByRole('textbox', { name: 'Unique Name' }).fill('b');
await demobrat.getByRole('textbox', { name: 'Unique Name' }).press('Tab');
await demobrat.getByRole('button', { name: 'Lets Go!' }).click();





await wildert.getByRole('button', { name: 'Settings' }).click();
await wildert.getByRole('link', { name: 'Manage Leaders and Followers' }).click();
await wildert.getByRole('link', { name: 'Add Person Following You' }).click();
await wildert.getByRole('textbox', { name: 'Follower Email' }).click();
await wildert.getByRole('textbox', { name: 'Follower Email' }).fill('demobrat@gmail.com');
await wildert.getByRole('textbox', { name: 'Follower Email' }).press('Tab');
await wildert.getByRole('button', { name: 'Search' }).press('Enter');
await wildert.getByRole('button', { name: 'Search' }).click();
await wildert.getByRole('button', { name: 'Submit' }).click();

//wait for approve button to appear
await demobrat.waitForSelector('button:has-text("Approve")');
await demobrat.getByRole('button', { name: 'Approve' }).click();

//wait for toast with text 'Hello, world! This is a toast' to appear
await wildert.waitForSelector('text=Hello, world! This is a toast');

  await wildert.getByRole('button', { name: 'Home' }).click();
  await wildert.getByRole('button', { name: 'Lets Go' }).click();
  await wildert.getByRole('link', { name: 'edit' }).click();
  await wildert.getByRole('button', { name: 'Add Database' }).click();



  await wildert.pause();

    await wildert.getByRole('heading', { name: 'Edit Databases' }).click();
  await wildert.locator('body').press('Tab');
  await wildert.getByRole('button', { name: 'Edit' }).first().click();
  await wildert.getByRole('button', { name: 'Add Assignment' }).click();
  await wildert.getByRole('heading', { name: 'Add Assignment' }).click();
  await wildert.locator('body').press('Tab');
  await wildert.getByRole('button', { name: 'Assign to User' }).press('Tab');
  await wildert.getByRole('button', { name: 'Assign to Group' }).press('Tab');
  await wildert.getByLabel('Select user').press('ArrowDown');
  await wildert.getByLabel('Select user').press('Tab');
  await wildert.getByRole('button', { name: 'Cancel' }).press('Tab');
  await wildert.getByRole('button', { name: 'Submit' }).click();