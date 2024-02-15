import { check } from 'k6';
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { browser } from 'k6/experimental/browser';
import http from 'k6/http';
import { sleep } from 'k6';

// Scenario Configuration Virtual Users, Iteration and Duration
export function perVUiterations() {
    return {
        scenarios: {
            ui: {
                executor: 'per-vu-iterations',
                options: {
                    browser: {
                        type: 'chromium'
                    }
                },
                vus: 2,
                iterations: 1,
                maxDuration: '2m'
            }
        },
        thresholds: {
            checks: ['rate==1.0']
        }
    };
}

export let options = perVUiterations();

// Credential Login Attorney
export const data = {
    username: 'testattorney',
    password: 'attorney'
};

// Element Locators
export const loginAttorneyPageLocators = {
    logInPage: "//input[@value='Log In']",
    logInAfterCasePost: "//a[normalize-space()='Log In']",
    loginLink: '.header__nav-item.top-menu__item.header__nav-item',
    userField: "//input[@id='userName']",
    passField: "//input[@id='password']",
    logInButton: "input[value='Log In']",
    seachInput: "//input[@id='searchQuery']",
    searchBtn: '#searchSubmit'
};

// Calling Page Object Locators
const url = 'https://qa3.legalmatch.com/';
export class LoginAttorneyPage {
    constructor(page) {
        const {
            logInPage,
            logInAfterCasePost,
            loginLink,
            userField,
            passField,
            logInButton,
            seachInput,
            searchBtn
        } = loginAttorneyPageLocators;
        this.page = page;
        this.waitPage = page;
        this.logInPage = page.locator(logInPage);
        this.logInAfterCasePost = page.locator(logInAfterCasePost);
        this.loginLink = page.locator(loginLink);
        this.userField = page.locator(userField);
        this.passField = page.locator(passField);
        this.logInButton = page.locator(logInButton);

        this.seachInput = page.locator(seachInput);

        this.searchBtn = page.locator(searchBtn);
        this.waitNav = page;
    }

    async goto() {
        let res = http.get(url);
        await this.page.goto(res.url);
    }

    async logInPageCheck() {
        this.logInPage.isVisible();
    }
    async logInPageAfterCasePost() {
        this.logInAfterCasePost.click();
    }

    async clickLogIn() {
        await this.loginLink.click();
    }

    async logInForm() {
        const { username, password } = data;
        sleep(3);
        this.userField.fill(username);
        this.passField.fill(password);
        sleep(3);
        const logInButton = await this.logInButton;
        await Promise.all([this.waitNav.waitForNavigation(60), logInButton.click()]);
        this.waitPage.waitForTimeout(20000);
    }

    async attorneyDashboardCheck() {
        this.seachInput.isVisible();
    }
}

// Test Script
export default async function () {
    const page = browser.newPage();
    const loginhome = new LoginAttorneyPage(page);

    describe('[TCM-6295] TCM-1: [Load Testing] - Browser component attorney login', async () => {
        await loginhome.goto();
        await loginhome.clickLogIn();
        check(page, {
            'User should Successfully Login': () => loginhome.logInPageCheck()
        });
        await loginhome.logInForm();
        check(page, {
            'Should be landed at Attorney Dashboard Page': () => loginhome.attorneyDashboardCheck()
        });
        await loginhome.verifySearchCase();

        page.close();
    });
    let res = http.get(url);
    http.get(res.url);
}
