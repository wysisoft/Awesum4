import { chromium } from 'playwright';

const CDP_ENDPOINT = process.env.CDP_ENDPOINT || 'http://localhost:9222';
const TARGET_TITLE = 'Awesum';
const WAIT_TIMEOUT = 5000; // ms, adjust if needed

async function findPageByTitle(browser, titleContains) {
  // browser.pages() may return pages for attached contexts; also check contexts' pages
  const pages = browser.contexts().flatMap(ctx => ctx.pages()).concat(browser.pages ? browser.pages() : []);
  // Deduplicate
  const uniquePages = Array.from(new Set(pages));
  for (const p of uniquePages) {
    try {
      const t = await p.title();
      if (t && t.includes(titleContains)) return p;
    } catch (e) {
      // ignore pages that error on title
    }
  }
  // fallback: try all contexts/pages via CDP targets if available
  return null;
}

async function clickWithFallback(page, fallbackSelectors, description) {
  for (const sel of fallbackSelectors) {
    try {
      const locator = page.locator(sel);
      await locator.first().waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
      await locator.first().click({ timeout: WAIT_TIMEOUT });
      console.log(`Clicked ${description} using selector: ${sel}`);
      return true;
    } catch (e) {
      // try next selector
    }
  }
  console.warn(`Unable to click ${description}. Tried selectors: ${JSON.stringify(fallbackSelectors)}`);
  return false;
}

(async () => {
  let browser = null;
  try {
    console.log(`Connecting to Chromium CDP endpoint: ${CDP_ENDPOINT}`);
    browser = await chromium.connectOverCDP(CDP_ENDPOINT, { timeout: 10000 });

    
    console.log('Connected.');

    // find page with title containing TARGET_TITLE
    let page = await findPageByTitle(browser, TARGET_TITLE);

    // If not found by helper, try scanning browser.pages()
    if (!page) {
      console.log(`Looking through browser.pages() as a fallback...`);
      const pages = browser.pages ? await browser.pages() : [];
      for (const p of pages) {
        try {
          const t = await p.title();
          if (t && t.includes(TARGET_TITLE)) {
            page = p;
            break;
          }
        } catch (e) {}
      }
    }

    if (!page) {
      throw new Error(`Could not find a tab with title containing "${TARGET_TITLE}". Make sure it is open.`);
    }

    console.log(`Found page with title: "${await page.title()}" — bringing to front.`);
    try { await page.bringToFront(); } catch (e) { /* not always available for CDP-attached pages */ }

    // Click the settings button. Try several reasonable selectors.
    const settingsSelectors = [
      'role=button[name=/settings/i]',        // accessible name "Settings"
      'text="Settings"',                      // exact text
      'button:has-text("Settings")',          // any button with text
      '[aria-label="Settings"]',              // aria-label
      '.settings, #settings, [data-test="settings"]' // common classes/ids
    ];
    const clickedSettings = await clickWithFallback(page, settingsSelectors, 'settings button');
    if (!clickedSettings) {
      // Not fatal — continue and try to find delete button elsewhere
      console.warn('Settings button not found — continuing to try delete button directly.');
    }

    // Click the "delete all browser data" button
    const deleteSelectors = [
      'role=button[name=/delete all browser data/i]',
      'text="Delete all browser data"',
      'button:has-text("Delete all browser data")',
      'button:has-text("Delete")',
      '[data-test="delete-all-browser-data"]',
      '[aria-label="Delete all browser data"]'
    ];
    const clickedDelete = await clickWithFallback(page, deleteSelectors, '"delete all browser data" button');
    if (!clickedDelete) {
      throw new Error('Failed to find / click the "delete all browser data" button. Check the selector text on the page.');
    }

    // Wait briefly for the input to appear
    const inputSelector = '#resetEverythingValueInput';
    const inputLocator = page.locator(inputSelector);
    await inputLocator.waitFor({ state: 'attached', timeout: WAIT_TIMEOUT });
    await inputLocator.fill(''); // clear first
    await inputLocator.type('38', { delay: 50 });
    console.log(`Entered 38 into ${inputSelector}`);

    // Click submit - try several common selectors
    const submitSelectors = [
      'role=button[name=/submit/i]',
      'button:has-text("Submit")',
      'button[type="submit"]',
      '[data-test="submit"]',
      'text="Submit"'
    ];
    const clickedSubmit = await clickWithFallback(page, submitSelectors, 'submit button');
    if (!clickedSubmit) {
      throw new Error('Failed to click submit. Check submit button selector on the page.');
    }

    console.log('All actions completed successfully.');

    // Optionally close the attached browser connection (doesn't close the real Chrome)
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message || err);
    if (browser) {
      try { await browser.close(); } catch (e) {}
    }
    process.exit(1);
  }
})();



