//import { chromium } from 'playwright-extra';
import { Browser, chromium, Page } from 'playwright';
import { Kysely, PostgresDialect, HandleEmptyInListsPlugin, type HandleEmptyInListsOptions, pushValueIntoList } from 'kysely';
import { Pool } from 'pg';

import {
  type AwesumApp, type AwesumFollowerRequest, type AwesumFollowerDatabase, type DB,
  type AwesumFollowerDatabaseCompletion, type AwesumDatabaseUnit, type AwesumDatabaseItem,
  type AwesumRouter, type AwesumDatabase, type AwesumDnsEntry
} from '../../../server/db/db.js';


// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);

const waitUntilNotPaused = async (browser: any) => {
  if (!browser.isPaused) return;
  await new Promise(resolve => setTimeout(resolve, 1000));
  await waitUntilNotPaused(browser);
}

function instrumentPage(page: any, browser: any) {
  var originalClick = page.click.bind(page);
  page.click = async function (...args: any[]) {
    const result = await originalClick(...args);
    await waitUntilNotPaused(browser);
    return result;
  };
  var originalFill = page.fill.bind(page);
  page.fill = async function (...args: any[]) {
    const result = await originalFill(...args);
    await waitUntilNotPaused(browser);
    return result;
  };
  var originalPress = page.press.bind(page);
  page.press = async function (...args: any[]) {
    const result = await originalPress(...args);
    await waitUntilNotPaused(browser);
    return result;
  };
}
async function launchWithRecorder(dataDir: string, windowTop: number, windowLeft: number, windowWidth: number, windowHeight: number) {

  const browser = await chromium.launchPersistentContext(dataDir, {
    headless: false,
    viewport: { width: 0, height: 0 },
    devtools: true,
    args: [
      '--no-first-run',
      '--disable-session-crashed-bubble', // ⚡ hides the restore popup
      '--disable-infobars',                // optional: hide other infobars
      '--hide-crash-restore-bubble',
    ],
  });

  const page = await browser.pages()[0];

  browser.setDefaultTimeout(0);
  browser.setDefaultNavigationTimeout(0);

  const session = await browser.newCDPSession(page);
  (browser as any).session = session;

  // Node / Playwright
  await session.send('Debugger.enable'); // start listening

  session.on('Debugger.paused', () => {
    (browser as any).isPaused = true;
  });
  session.on('Debugger.resumed', () => {
    (browser as any).isPaused = false;
  });

  await session.send('Browser.setWindowBounds', {
    windowId: (await session.send('Browser.getWindowForTarget')).windowId,
    bounds: { top: windowTop, left: windowLeft, width: windowWidth, height: windowHeight }
  });

  page.exposeFunction('openInspector', async () => {
    await page.pause();
  });


  return browser!;

  // Now the recorder extension should be active, and you can start recording manually
}



const wildertBrowser = await launchWithRecorder('./../wildert/UserDataDir', 0, 0, 650, 1000).catch(console.error);

let isPaused = false;


const wildert = await wildertBrowser.pages()[0];

instrumentPage(wildert, wildertBrowser);

await wildert.goto('https://dev.awesum.app/');

await wildert.getByRole('button', { name: 'Settings' }).click();
await wildert.getByRole('button', { name: 'Delete All Browser Data' }).nth(1).click();
await wildert.locator('#resetEverythingValueInput').fill('38');
await wildert.getByRole('button', { name: 'Submit' }).click();

await wildert.getByRole('link', { name: 'Settings' }).click();
await wildert.getByRole('button', { name: 'Create App' }).click();
await wildert.getByRole('textbox', { name: 'Name', exact: true }).click();
await wildert.getByRole('textbox', { name: 'Name', exact: true }).fill('a');
await wildert.getByRole('textbox', { name: 'Name', exact: true }).press('Tab');
await wildert.getByRole('textbox', { name: 'Unique Name' }).fill('a');
await wildert.getByRole('textbox', { name: 'Unique Name' }).press('Tab');
await wildert.getByRole('button', { name: 'Lets Go!' }).click();




const demobratBrowser = await launchWithRecorder('./../demobrat/UserDataDir', 0, 650, 650, 1000).catch(console.error);
const demobrat = await demobratBrowser.pages()[0];
instrumentPage(demobrat, demobratBrowser);
await demobrat.goto('https://dev.awesum.app/');

await demobrat.getByRole('button', { name: 'Settings' }).click();
await demobrat.getByRole('button', { name: 'Delete All Browser Data' }).nth(1).click();
await demobrat.locator('#resetEverythingValueInput').fill('38');
await demobrat.getByRole('button', { name: 'Submit' }).click();

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

//use kysely to wait loop for a row to exist in the serverFollowerRequest table where followerEmail = 'demobrat@gmail.com' and leaderEmail = 'wildert@gmail.com' and status = 1

// Define a custom logger (you can use any logging library you prefer)
const logger = {
  log: (message: string) => console.log(message),  // Here we use console.log for simplicity
}

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL!.replace('awesum', 'awesumDev'),
    }),
  }),
  plugins: [
    new HandleEmptyInListsPlugin({
      strategy: pushValueIntoList('__kysely_no_values_were_provided__') // choose a unique value for not in. has to be something with zero chance being in the data.
    })
  ],
  log: (event) => {
    // Log the SQL query and parameters
    if (event.level === 'query') {
      logger.log(`🧱 SQL Query: ${event.query.sql}`)
      logger.log(`🧱 Query: ${event.query.query}`)
      logger.log(`🪄 Parameters: ${JSON.stringify(event.query.parameters)}`)
    }
    // Log the result after query execution
  },

});

while (true) {
  const followerRequest = await db.selectFrom('awesum.FollowerRequest as fr')
    .where('followerEmail', '=', 'demobrat@gmail.com')
    .executeTakeFirst();
  if (followerRequest) {
    break;
  }
  await demobrat.waitForTimeout(1000);
}

await demobrat.getByRole('button', { name: 'Sync' }).click();
await demobrat.getByRole('button', { name: 'Settings' }).click();

await demobrat.getByRole('link', { name: 'Manage Leaders and Followers' }).click();
await demobrat.getByRole('button', { name: 'Manage Leaders' }).click();

await demobrat.getByRole('button', { name: 'Respond' }).click();
await demobrat.getByRole('button', { name: 'Approve' }).click();


await wildert.getByRole('button', { name: 'Sync' }).click();
await wildert.getByRole('button', { name: 'Settings' }).click();

await wildert.getByRole('button', { name: 'Home' }).click();
await wildert.getByRole('button', { name: 'Lets Go' }).click();
await wildert.getByRole('link', { name: 'edit' }).click();

await wildert.getByRole('button', { name: 'Add Database' }).click();
await wildert.locator('.appEditDatabaseButton').first().click();

await wildert.getByRole('button', { name: 'Add Unit' }).click();
await wildert.getByRole('link', { name: 'Edit' }).first().click();
await wildert.locator('.multiselect__select').first().click();
await wildert.locator('span').filter({ hasText: 'Spelling' }).nth(2).click();
await wildert.locator('.unitEditItemButton').first().click();
await wildert.getByRole('textbox', { name: 'Item Text' }).fill('Calvin');
await wildert.getByRole('textbox', { name: 'Item Text' }).press('Tab');
await wildert.getByRole('textbox', { name: 'Visual Hint' }).press('Tab');
await wildert.getByRole('textbox', { name: 'Letters' }).press('ControlOrMeta+a');
await wildert.getByRole('textbox', { name: 'Letters' }).fill('');
await wildert.getByRole('button', { name: 'Play' }).click();



await wildert.getByRole('button', { name: 'Database' }).click();
await wildert.getByRole('button', { name: 'Edit' }).click();
await wildert.getByRole('button', { name: 'Add Assignment' }).click();

await wildert.getByLabel('Select user').selectOption({ index: 1 });
await wildert.getByRole('button', { name: 'Submit' }).click();
await wildert.getByRole('button', { name: 'Home' }).click();

await demobrat.getByRole('button', { name: 'Sync' }).click();

await demobrat.getByRole('button', { name: 'Home' }).click();
await demobrat.getByRole('button', { name: 'Lets Go' }).first().click();
await demobrat.waitForTimeout(3000);
await demobrat.getByRole('button', { name: 'Lets Go' }).click();
await demobrat.getByRole('button', { name: 'Lets Go' }).click();
await demobrat.getByRole('button', { name: 'Lets Go' }).click();
await demobrat.evaluate(() => eval('debugger'));
await demobrat.locator('body').click();
await demobrat.locator('body').press('Tab');



await demobrat.keyboard.press('C');
await demobrat.keyboard.press('A');
await demobrat.keyboard.press('L');
await demobrat.keyboard.press('V')
await demobrat.keyboard.press('I');
await demobrat.keyboard.press('N');

while (true) {
  const followerDatabaseCompletion = await db.selectFrom('awesum.FollowerDatabaseCompletion as fdc')
    .executeTakeFirst();
  if (followerDatabaseCompletion) {
    break;
  }
  await demobrat.waitForTimeout(1000);
}


await wildert.getByRole('button', { name: 'Sync' }).click();

await wildert.pause();