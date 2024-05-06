// browserFlow.js
import { browser } from 'k6/experimental/browser';
import { config } from './config.js';
import { thresholds } from './thresholds.js';
import { scenarios } from './webscenarios.js';
import { sleep } from 'k6';


export const options = {
    scenarios,
    thresholds,
};



export default async function () {
    const page = browser.newPage();

    try {
        await page.goto(config.baseURL);
        page.screenshot({ path: 'screenshots/hpScreenshot.png' });

        const gwLink = page.locator('[data-track="global footer:shop:devices"]');
        await Promise.all([page.waitForNavigation(), gwLink.click()]);
        page.screenshot({ path: 'screenshots/gwScreenshot.png' });

        sleep(2);
        const pdpLink = page.locator('[aria-label="Apple iPhone 15"]');
        await Promise.all([page.waitForNavigation(), pdpLink.click()]);
        page.screenshot({ path: 'screenshots/pdpScreenshot.png' });


    } finally {
        page.close();
    }
}
