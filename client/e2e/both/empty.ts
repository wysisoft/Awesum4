//import { chromium } from 'playwright-extra';
import { chromium, Page } from 'playwright';

// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);


async function launchWithRecorder(dataDir: string, windowTop: number,windowLeft: number,windowWidth: number, windowHeight: number) {

  const browser = await chromium.launchPersistentContext(dataDir, {
    headless: false,
    viewport: { width: 0, height: 0 },
    args: [
      '--no-first-run',
      '--disable-session-crashed-bubble', // ⚡ hides the restore popup
      '--disable-infobars',                // optional: hide other infobars
    ],
  });

  const page = await browser.pages()[0];

  const session = await browser.newCDPSession(page);

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

const wildertBrowser = await launchWithRecorder('./../wildert/UserDataDir', 100,0,600,600).catch(console.error);

const wildert = await wildertBrowser.pages()[0];
await wildert.goto('https://dev.awesum.app/');

