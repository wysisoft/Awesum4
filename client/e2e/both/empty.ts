//import { chromium } from 'playwright-extra';
import { Browser, chromium, Page } from 'playwright';

// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);



async function launchWithRecorder(dataDir: string, windowTop: number, windowLeft: number, windowWidth: number, windowHeight: number) {

  const browser = await chromium.launchPersistentContext(dataDir, {
    headless: false,
    viewport: { width: 0, height: 0 },
    devtools: true,
    args: [
      '--no-first-run',
      '--disable-session-crashed-bubble', // ⚡ hides the restore popup
      '--disable-infobars',                // optional: hide other infobars
    ],
  });

  const page = await browser.pages()[0];
  browser.setDefaultTimeout(0);
  browser.setDefaultNavigationTimeout(0);

  const session = await browser.newCDPSession(page);
  browser.session = session;

  // Node / Playwright
  await session.send('Debugger.enable'); // start listening

  session.on('Debugger.paused', () => { 
    browser.isPaused = true; 
  });
  session.on('Debugger.resumed', () => { 
    browser.isPaused = false; 
  });

  await session.send('Browser.setWindowBounds', {
    windowId: (await session.send('Browser.getWindowForTarget')).windowId,
    bounds: { top: windowTop, left: windowLeft, width: windowWidth, height: windowHeight }
  });

  page.exposeFunction('openInspector', async () => {
    console.log('Inspector triggered');
    await page.pause();
  });


  return browser!;

  // Now the recorder extension should be active, and you can start recording manually
}

const waitUntilNotPaused = async (browser: any) => {
  if (!browser.isPaused) return;
  await new Promise(resolve => setTimeout(resolve, 1000));
  await waitUntilNotPaused(browser);
}

const wildertBrowser = await launchWithRecorder('./../wildert/UserDataDir', 100, 0, 600, 600).catch(console.error);

let isPaused = false;


const wildert = await wildertBrowser.pages()[0];
await wildert.goto('https://dev.awesum.app/');


await wildert.getByRole('link', { name: 'Settings' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('button', { name: 'Create App' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Name', exact: true }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Name', exact: true }).fill('a'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Name', exact: true }).press('Tab'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Unique Name' }).fill('a'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Unique Name' }).press('Tab'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('button', { name: 'Lets Go!' }).click(); await waitUntilNotPaused(wildertBrowser);




const demobratBrowser = await launchWithRecorder('./../demobrat/UserDataDir', 600, 100, 600, 600).catch(console.error); await waitUntilNotPaused(wildertBrowser);
const demobrat = await demobratBrowser.pages()[0]; await waitUntilNotPaused(wildertBrowser);
await demobrat.goto('https://dev.awesum.app/'); await waitUntilNotPaused(wildertBrowser);


await demobrat.getByRole('link', { name: 'Settings' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Create App' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).fill('b'); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('textbox', { name: 'Name', exact: true }).press('Tab'); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('textbox', { name: 'Unique Name' }).fill('b'); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('textbox', { name: 'Unique Name' }).press('Tab'); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Lets Go!' }).click(); await waitUntilNotPaused(demobratBrowser);

await wildert.getByRole('button', { name: 'Settings' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('link', { name: 'Manage Leaders and Followers' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('link', { name: 'Add Person Following You' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Follower Email' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Follower Email' }).fill('demobrat@gmail.com'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('textbox', { name: 'Follower Email' }).press('Tab'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('button', { name: 'Search' }).press('Enter'); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('button', { name: 'Search' }).click(); await waitUntilNotPaused(wildertBrowser);
await wildert.getByRole('button', { name: 'Submit' }).click(); await waitUntilNotPaused(wildertBrowser);

await demobrat.getByRole('button', { name: 'Sync' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Settings' }).click();await waitUntilNotPaused(demobratBrowser);

await demobrat.getByRole('link', { name: 'Manage Leaders and Followers' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Manage Leaders' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Respond' }).click(); await waitUntilNotPaused(demobratBrowser);
await demobrat.getByRole('button', { name: 'Approve' }).click(); await waitUntilNotPaused(demobratBrowser);

