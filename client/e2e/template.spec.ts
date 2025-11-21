//import { chromium } from 'playwright-extra';
import { chromium } from 'playwright';

// import stealth from 'puppeteer-extra-plugin-stealth'
// var stealthPlugin = stealth();
// stealthPlugin.enabledEvasions.delete("iframe.contentWindow");
// stealthPlugin.enabledEvasions.delete("media.codecs");
// chromium.use(stealthPlugin);

async function launchWithRecorder() {

  const browser = await chromium.launchPersistentContext('~/PlaywrightWildert', {
    headless: false,
    viewport: { width: 0, height: 0 },
  });

  const page = await browser.pages()[0];
  page.pause();

  // Now the recorder extension should be active, and you can start recording manually
}

launchWithRecorder().catch(console.error);
