import { browser } from 'k6/experimental/browser';
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import http from 'k6/http';
import { check } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

/*********************** Test Data ****************************/
let textDescription = 'K6 Load Browser Test';
let firstNameValue = 'FirstName';
let lastNameValue = 'LastName';
let randomVar = randomString(8);
const summaryCaseValue = `${textDescription} ${randomVar}`;
const descriptionCaseValue = `${textDescription} ${randomVar}`;
const firtName = `${firstNameValue}${randomVar}`;
const lastName = `${lastNameValue}${randomVar}`;

export const data = {
    username: 'testattorney',
    password: 'attorney'
};

export const searchAttorney = {
    zipCode: '00001'
};

export const descriptionText = {
    summary: summaryCaseValue,
    description: descriptionCaseValue
};

export const saveCaseForm = {
    firstName: firtName,
    lastName: lastName,
    zipCode: '00001',
    telNumber: '4354355345',
    emailAddress: 'legalmatch@getnada.com'
};

/*********************** Scenario Configuration Virtual Users, Iteration and Duration ****************************/
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
                vus: 1,
                iterations: 1,
                maxDuration: '5m'
            }
        },
        thresholds: {
            checks: ['rate==1.0']
        }
    };
}
export let options = perVUiterations();

/*********************** Element Locators ****************************/
export const searchAttorneyLocators = {
    homePage: "//h1[@class='case-intake-form__header']//a[@class='case-intake-form__header--link']",
    chooseCategory: "//button[normalize-space()='Choose a Category']",
    categoryToSelect: 'Family',
    categoriesDropdown:
        "//div[@class='case-intake-form__dropdown-menu dropdown-menu js-case-intake-categories-dropdown is-single-choice']//div[normalize-space()=",
    zipCode: "//input[@placeholder='ZIP Code or Location']",
    locationCheckerValid: '.case-intake-form__location-checker--valid',
    submitBtn: "//button[@data-aut='ci_submit-btn']"
};

export const subCategoryLocators = {
    chooseSubCategory: "//h1[normalize-space()='Choose a Subcategory:']",
    subCategoryVal: 'Adoptions',
    subCategoryCheckBox: '//label[normalize-space()=',
    nextBtn: "//button[@data-aut='ci_submit-btn']"
};

export const saveYourCaseLocators = {
    saveYourCase: "//h1[normalize-space()='Save Your Case']",
    firstName: "input[name='firstName']",
    lastName: "input[name='lastName']",
    telNumber:
        '#sapper > main > div > form > fieldset:nth-child(1) > fieldset:nth-child(7) > section > div > input',
    emailAddress: "input[name='email']",
    textMessageCheckbox:
        '#sapper > main > div > form > fieldset.notify.svelte-jbkws9 > fieldset > label:nth-child(2) > input',
    nextBtn: "//button[@data-aut='ci_submit-btn']"
};

export const issueSpecificQuestionsLocators = {
    issueSpecificQuestions: "//h1[normalize-space()='Issue-Specific Questions']",
    nextBtn: "//button[@data-aut='ci_submit-btn']"
};

export const descriptionPageLocators = {
    description: "//h1[normalize-space()='Description']",
    stateAttorney: "input[placeholder='State why you need an attorney.']",
    stateHighlights:
        "//textarea[@placeholder='State the highlights / major facts that support your claim.']",
    nextBtn: "//button[@data-aut='ci_submit-btn']"
};

export const costEstimatePageLocators = {
    costEstimate: "//h1[normalize-space()='Cost Estimate']",
    levelExperienceRadioButton: "input[value='1']",
    typeCash: "input[value='estPaymentTypeCash']",
    caseMatchedMessage: 'h1:nth-child(1)',
    nextBtn: "//button[@data-aut='ci_submit-btn']"
};

/***********************  Calling Page Object Locators ****************************/

// Search Attorney
const url = 'https://qa3.legalmatch.com/';

export class SearchAttorneyPage {
    constructor(page) {
        const {
            homePage,
            chooseCategory,
            categoryToSelect,
            categoriesDropdown,
            zipCode,
            locationCheckerValid,
            submitBtn
        } = searchAttorneyLocators;
        this.page = page;
        this.homePage = page.locator(homePage);
        // Search Attorney
        this.chooseCategory = page.locator(chooseCategory);
        const categorySelect = categoryToSelect;
        this.categoriesDropdown = page.locator(`${categoriesDropdown}'${categorySelect}']`);
        this.zipCode = page.locator(zipCode);
        this.locationCheckerValid = page.locator(locationCheckerValid);
        this.waitPage = page.waitForTimeout(10000);
        this.waitNav = page;
        this.submitBtn = page.locator(submitBtn);
    }

    async goto() {
        let res = http.get(url);
        await this.page.goto(res.url);
    }

    async homePageCheck() {
        await this.homePage.isVisible();
    }

    async searchAttorney() {
        const { zipCode } = searchAttorney;
        const category = await this.chooseCategory;
        +category.click();
        await this.categoriesDropdown.click();
        await this.zipCode.type(zipCode);
        await this.locationCheckerValid;
        const searchBtn = await this.submitBtn.click();
        await Promise.all([this.waitNav.waitForNavigation(60), searchBtn]);
        this.waitPage;
    }
}

// Sub Category Page
export class SubCategoryPage {
    constructor(page) {
        const { chooseSubCategory, subCategoryVal, subCategoryCheckBox, nextBtn } =
            subCategoryLocators;
        this.page = page;
        this.subcategoryPage = page.locator(chooseSubCategory);

        // Select Sub Category
        const subCategory = subCategoryVal;
        this.subCategoryCheckBox = page.locator(`${subCategoryCheckBox}'${subCategory}']`);
        this.waitPage = page;

        // after this delay, we can repeat the same pattern as above:
        this.nextBtn = page.locator(nextBtn);
        this.waitNav = page;
    }

    async subcategoryPageCheck() {
        await this.subcategoryPage.isVisible();
    }

    async subCategoryPage() {
        this.subCategoryCheckBox.click();
        this.waitPage.waitForTimeout(5000);
        const nextButton = await this.nextBtn.click();
        await Promise.all([this.waitNav.waitForNavigation(60), nextButton]);
        this.waitPage.waitForTimeout(10000);
    }
}

// Issue Specific Questions
export class IssueSpecificQuestionsPage {
    constructor(page) {
        const { issueSpecificQuestions, nextBtn } = issueSpecificQuestionsLocators;
        this.page = page;

        // Issue Specific Questions
        this.waitPage = page;
        this.issueSpecificQuestions = page.locator(issueSpecificQuestions);

        // after this delay, we can repeat the same pattern as above:
        this.nextBtn = page.locator(nextBtn);
        this.waitNav = page;
    }

    async issueSpecificQuestionCheck() {
        this.issueSpecificQuestions.isVisible();
    }

    async issueSpecificQuestionPage() {
        const nextButton = await this.nextBtn;
        await Promise.all([this.waitNav.waitForNavigation(60), nextButton.click()]);
        this.waitPage.waitForTimeout(5000);
    }
}

// Description Page
export class DescriptionPage {
    constructor(page) {
        const { description, stateAttorney, stateHighlights, nextBtn } = descriptionPageLocators;
        this.page = page;
        // Description
        this.description = page.locator(description);

        this.stateAttorney = page.locator(stateAttorney);

        this.stateHighlights = page.locator(stateHighlights);
        this.waitPage = page;

        // after this delay, we can repeat the same pattern as above:
        this.nextBtn = page.locator(nextBtn);
        this.waitNav = page;
    }

    async descriptionPageCheck() {
        await this.description.isVisible();
    }

    async descriptionPage() {
        const { summary, description } = descriptionText;
        await this.stateAttorney.type(summary);
        await this.stateHighlights.type(description);

        const nextButton = await this.nextBtn.click();
        await Promise.all([this.waitNav.waitForNavigation(60), nextButton]);
        this.waitPage.waitForTimeout(5000);
    }
}

// Save Your Case Page
export class SaveYourCasePage {
    constructor(page) {
        const {
            saveYourCase,
            firstName,
            lastName,
            telNumber,
            emailAddress,
            textMessageCheckbox,
            nextBtn
        } = saveYourCaseLocators;
        this.page = page;

        // Save Your Case
        this.waitPage = page;
        this.saveYourCase = page.locator(saveYourCase);
        this.firstName = page.locator(firstName);
        this.lastName = page.locator(lastName);
        this.telNumber = page.locator(telNumber);
        this.emailAddress = page.locator(emailAddress);

        this.textMessageCheckbox = page.locator(textMessageCheckbox);

        // after this delay, we can repeat the same pattern as above:
        this.nextBtn = page.locator(nextBtn);
        this.waitNav = page;
    }

    async saveYourCasePageCheck() {
        await this.saveYourCase.isVisible();
    }

    async saveYourCasePage() {
        const { firstName, lastName, telNumber, emailAddress } = saveCaseForm;
        await this.firstName.type(firstName);
        await this.lastName.type(lastName);
        await this.telNumber.type(telNumber);
        await this.emailAddress.type(emailAddress);
        await this.textMessageCheckbox.click();

        const nextButton = await this.nextBtn.click();
        await Promise.all([this.waitNav.waitForNavigation(60), nextButton]);
        this.waitPage.waitForTimeout(5000);
    }
}

// Cost Estimate Page
export class CostEstimatePage {
    constructor(page) {
        const { costEstimate, levelExperienceRadioButton, typeCash, caseMatchedMessage, nextBtn } =
            costEstimatePageLocators;
        this.page = page;

        // Cost Estimate
        this.waitPage = page;
        this.costEstimate = page.locator(costEstimate);
        this.levelExperienceRadioButton = page.locator(levelExperienceRadioButton);
        this.typeCash = page.locator(typeCash);
        this.caseMatchedMessage = page.locator(caseMatchedMessage);

        // after this delay, we can repeat the same pattern as above:
        this.nextBtn = page.locator(nextBtn);
        this.waitNav = page;
    }

    async costEstimateCheck() {
        this.costEstimate.isVisible();
    }

    async costEstimatePage() {
        await this.levelExperienceRadioButton.click();
        await this.typeCash.click();

        const nextButton = await this.nextBtn;
        await Promise.all([this.waitNav.waitForNavigation(60), nextButton.click()]);
        this.waitPage.waitForTimeout(10000);
    }

    async caseMatchedMessageCheck() {
        this.waitPage.waitForTimeout(5000);
        this.caseMatchedMessage.isVisible();
    }

    async getURLCaseNumber() {}
}

/***********************  Test Script - Suite ****************************/
export default async function () {
    const page = browser.newPage();
    const searchAttorney = new SearchAttorneyPage(page);
    const subCategory = new SubCategoryPage(page);
    const issueSpecificQuestions = new IssueSpecificQuestionsPage(page);
    const descriptions = new DescriptionPage(page);
    const saveYourCase = new SaveYourCasePage(page);
    const costEstimate = new CostEstimatePage(page);

    describe('[TCM-6551] TCM-1: [Load Testing - Browser] - Case Posting Module (CCPM)', async () => {
        // Search Attorney
        await searchAttorney.goto();
        check(page, {
            'Should be at Home Page': () => searchAttorney.homePageCheck()
        });
        await searchAttorney.searchAttorney();

        // Select Sub Category
        check(page, {
            'Should be at Select Sub Category Page': () => subCategory.subcategoryPageCheck()
        });
        await subCategory.subCategoryPage();

        // Issue Specific Question
        check(page, {
            'Should be at Issue Specific Question Page': () =>
                issueSpecificQuestions.issueSpecificQuestionCheck()
        });
        await issueSpecificQuestions.issueSpecificQuestionPage();
        // Description
        check(page, {
            'Should be at Description Page': () => descriptions.descriptionPageCheck()
        });
        await descriptions.descriptionPage();
        // Save Your Case
        check(page, {
            'Should be at Save Your Case Page': () => saveYourCase.saveYourCasePageCheck()
        });
        await saveYourCase.saveYourCasePage();
        // Cost Estimate
        check(page, {
            'Should be at Cost Estimate Page': () => costEstimate.costEstimateCheck()
        });
        await costEstimate.costEstimatePage();
        check(page, {
            'Case Should Be Posted': () => costEstimate.caseMatchedMessageCheck()
        });

        page.close();
    });
    let res = http.get(url);
    http.get(res.url);
}
