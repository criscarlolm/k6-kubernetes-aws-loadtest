import { browser } from 'k6/experimental/browser';
import http from 'k6/http';

export const options = {
    scenarios: {
        ui: {
            executor: 'constant-vus',
            options: {
                browser: {
                    type: 'chromium'
                }
            },
            vus: 3,
            duration: '60s'
        }
    }
};

export default async function () {
    const page = browser.newPage();

    try {
        await page.goto('https://test.legalmatch.com/');
        page.screenshot({ path: 'screenshot.png' });
    } finally {
        page.close();
    }
    http.get('https://test.legalmatch.com/');
}
