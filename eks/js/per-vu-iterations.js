import { browser } from 'k6/experimental/browser';
import { check } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
    scenarios: {
        ui: {
            executor: 'per-vu-iterations',
            options: {
                browser: {
                    type: 'chromium'
                }
            },
            vus: 10
        }
    }
};

export default async function () {
    const page = browser.newPage();
    await page.goto('https://test.legalmatch.com/');
    // Select Category
    check(page, {
        'Should be at Homepage': () =>
            page
                .locator(
                    "//h1[@class='case-intake-form__header']//a[@class='case-intake-form__header--link']"
                )
                .isVisible()
    });
    const category = await page.locator("//button[normalize-space()='Choose a Category']");
    +category.click();
    const categoryToSelect = 'Family';
    const categoryItem = page.locator(
        `//div[@class='case-intake-form__dropdown-menu dropdown-menu js-case-intake-categories-dropdown is-single-choice']//div[normalize-space()='${categoryToSelect}']`
    );
    categoryItem.click();

    await page.locator("//input[@placeholder='ZIP Code or Location']").fill('00001');
    await page.waitForSelector('.case-intake-form__location-checker--valid');
    const searchBtn = page.locator("//button[@data-aut='ci_submit-btn']");

    await Promise.all([page.waitForNavigation(60), searchBtn.click()]);
    // Select Sub Category
    check(page, {
        'Should be at Subcategory Page': () =>
            page.locator("//h1[normalize-space()='Choose a Subcategory:']").isVisible()
    });

    const subCategory = 'Adoptions';
    page.locator(`//label[normalize-space()="${subCategory}"]`).click();
    await page.waitForTimeout(5000);

    // after this delay, we can repeat the same pattern as above:
    const nextBtn = page.locator("//button[@data-aut='ci_submit-btn']");
    await Promise.all([page.waitForNavigation(60), nextBtn.click()]);
    await page.waitForTimeout(5000);
    await Promise.all([page.waitForNavigation(60), nextBtn.click()]);
    await page.waitForTimeout(10000);

    // Description
    check(page, {
        'Should be at Description Page': () =>
            page.locator("//h1[normalize-space()='Description']").isVisible()
    });

    const summaryCase = randomString(8);
    await page
        .locator("input[placeholder='State why you need an attorney.']")
        .type(`Load Browser Test Summary ${summaryCase}`);

    const descriptionCase = randomString(8);

    await page
        .locator(
            "//textarea[@placeholder='State the highlights / major facts that support your claim.']"
        )

        .type(`Load Browser Test Decription ${descriptionCase}`);

    await Promise.all([page.waitForNavigation(60), nextBtn.click()]);
    await page.waitForTimeout(10000);

    // Save Your Case
    check(page, {
        'Should be at Save Your Case Page': () =>
            page.locator("//h1[normalize-space()='Save Your Case']").isVisible()
    });

    await page.waitForSelector("input[name='firstName']");
    const firstName = randomString(8);

    await page.locator("input[name='firstName']").type(`FirstName${firstName}`);
    const lastName = randomString(8);

    await page.locator("input[name='lastName']").type(`LastLast${lastName}`);
    await page
        .locator(
            '#sapper > main > div > form > fieldset:nth-child(1) > fieldset:nth-child(7) > section > div > input'
        )
        .type('4354355345');
    await page.locator("input[name='email']").type('crisqa.legalmatch@gmail.com');

    await page
        .locator(
            '#sapper > main > div > form > fieldset.notify.svelte-jbkws9 > fieldset > label:nth-child(2) > input'
        )

        .click();

    await Promise.all([page.waitForNavigation(), nextBtn.click()]);
    await page.waitForTimeout(5000);

    // Cost Estimate
    check(page, {
        'Should be at Cost Estimate Page': () =>
            page.locator("//h1[normalize-space()='Cost Estimate']").isVisible()
    });

    await page.locator("input[value='1']").click();
    await page.locator("input[value='estPaymentTypeCash']").click();
    await Promise.all([page.waitForNavigation(), nextBtn.click()]);
    await page.waitForTimeout(10000);

    check(page, {
        'Case should be posted!': () => page.locator('h1:nth-child(1)')
    });

    page.close();
    browser.close();
}
