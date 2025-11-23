//import { chromium } from 'playwright-extra';
import { chromium } from 'playwright';

// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);

async function launchWithRecorder() {

  const browser = await chromium.launchPersistentContext('UserDataDir', {
    headless: false,
    viewport: { width: 0, height: 0 },
    args: [
      '--no-first-run',
      '--disable-session-crashed-bubble', // ⚡ hides the restore popup
      '--disable-infobars',                // optional: hide other infobars
      '--window-position=600,100',
    ],
  });

  


  const page = await browser.pages()[0];
  const session = await browser.newCDPSession(page);

  await session.send('Browser.setWindowBounds', {
    windowId: (await session.send('Browser.getWindowForTarget')).windowId,
    bounds: { width: 600, height: 600 }
  });

  page.exposeFunction('openInspector', async () => {
    console.log('Inspector triggered');
    await page.pause();
  });

  await page.goto('https://dev.awesum.app/');


  // Keep the script alive forever
  while (true) {
    await new Promise(r => setTimeout(r, 1000));  // sleep 1 second
  }
  //page.pause();

  // Now the recorder extension should be active, and you can start recording manually
}

launchWithRecorder().catch(console.error);
