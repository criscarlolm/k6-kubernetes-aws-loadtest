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

export const httpMetrics = {
    casePostEnv: 'https://qa3.legalmatch.com/post-case/subcategory',
    caseQuestions: 'https://qa3.legalmatch.com/post-case/questions',
    caseDescription: 'https://qa3.legalmatch.com/post-case/description',
    caseSaveYourCase: 'https://qa3.legalmatch.com/post-case/signup',
    caseEstimate: 'https://qa3.legalmatch.com/post-case/cost-estimate',
    casePostExit: 'https://qa3.legalmatch.com/post-case/exit'
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
                maxDuration: '10m'
            }
        },
        thresholds: {
            checks: ['rate==1.0']
        }
    };
}

export function httpMetricsData() {
    const {
        casePostEnv,
        caseQuestions,
        caseDescription,
        caseSaveYourCase,
        caseEstimate,
        casePostExit
    } = httpMetrics;
    http.get(casePostEnv);
    http.get(caseQuestions);
    http.get(caseDescription);
    http.get(caseSaveYourCase);
    http.get(caseEstimate);
    http.get(casePostExit);
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
    telNumber: '#field-phone',
    emailAddress: "input[name='email']",
    textMessageCheckbox: "input[value='true'][name='notifyBySms']",
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

export const attorneySearchPageLocators = {
    seachInput: "//input[@id='searchQuery']",
    searchBtn: '#searchSubmit',
    caseTitle: "a[class='case-list-item'] b"
};

export const openTabPageLocators = {
    openTab: "//a[@id='openLink']"
};

export const responseMessagePageLocators = {
    replyButton: "(//a[@id='reply'])[1]",
    selectTemplateDropdown: "//select[@id='tid']",
    selectOption: 'template1',
    subjectMessage: "//input[@id='abbr']",
    messageBody: "//div[@class=' nicEdit-main']",
    sendReplyButton: "//a[normalize-space()='Send Reply']",
    consultationFee: "//input[@id='conFee']",
    consultationValue: '12',
    consultationAppointment: "//input[@id='afterHoursConsultation']",
    respondedTab: "//a[@id='pendingLink']"
};

export const EngageCompleteCaseLocators = {
    respondedTab: "a[id='pendingLink']",
    engageButton: "(//a[normalize-space()='Engage'])[1]",
    engageTab: "(//a[@id='engagedLink'])[1]",
    caseEngageMessage: '#declinePrompt',
    completeCaseButton:
        "li[class='complete-button-container'] a[class='btn yes complete complete-case aae-v2-btn aae-v2-btn--primary aae-v2-btn--sm']",
    caseRecordToComplete: '//a[normalize-space()=',
    clickCompleteButton: "//a[@title='Mark case as Complete']",
    caseCompleteMessage: "//div[@id='content']//p[1]"
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

// Attorney Login Page
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

// Attorney Search Case Page
export class AttorneySearchPage {
    constructor(page) {
        const { seachInput, searchBtn, caseTitle } = attorneySearchPageLocators;
        const { openTab } = openTabPageLocators;
        this.page = page;
        this.waitPage = page;
        this.seachInput = page.locator(seachInput);
        this.searchBtn = page.locator(searchBtn);
        this.caseTitle = page.locator(caseTitle);
        this.openTab = page.locator(openTab);

        this.waitNav = page;
    }
    async verifySearchCase() {
        const { description } = descriptionText;
        this.seachInput.type(description);
        const searchButton = await this.searchBtn;
        await Promise.all([this.waitNav.waitForNavigation(60), searchButton.click()]);
        this.waitPage.waitForTimeout(10000);
    }
    async verifyCaseTitleCheck() {
        this.caseTitle.isVisible();
    }

    async clickCaseRecord() {
        const caseRecord = await this.caseTitle;
        await Promise.all([this.waitNav.waitForNavigation(60), caseRecord.click()]);
        this.waitPage.waitForTimeout(10000);
    }

    async verifyOpenTabCheck() {
        this.openTab.isVisible();
    }
}

// Search Attorney Page
export class searchAttorneyPage {
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

// Case Status Movement Responded, Engage, Complete
export class CaseStatusPage {
    constructor(page) {
        const { description } = descriptionText;
        const {
            respondedTab,
            replyButton,
            selectTemplateDropdown,
            selectOption,
            subjectMessage,
            messageBody,
            sendReplyButton,
            consultationFee,
            consultationAppointment
        } = responseMessagePageLocators;
        const {
            engageButton,
            engageTab,
            caseEngageMessage,
            completeCaseButton,
            caseRecordToComplete,
            caseCompleteMessage,
            clickCompleteButton
        } = EngageCompleteCaseLocators;
        const { seachInput, searchBtn, caseTitle } = attorneySearchPageLocators;
        this.page = page;
        this.waitPage = page;
        this.reload = page;
        this.respondedTab = page.locator(respondedTab);
        this.replyButton = page.locator(replyButton);
        this.templateDropdown = page.locator(selectTemplateDropdown);
        this.optionValue = page.locator(selectOption);
        this.subjectMessage = page.locator(subjectMessage);
        this.messageBody = page.locator(messageBody);
        this.consultationFee = page.locator(consultationFee);
        this.consultationAppointment = page.locator(consultationAppointment);
        this.sendReplyButton = page.locator(sendReplyButton);
        this.seachInput = page.locator(seachInput);
        this.searchBtn = page.locator(searchBtn);
        this.caseTitle = page.locator(caseTitle);
        this.engageButton = page.locator(engageButton);
        this.engageTab = page.locator(engageTab);
        this.caseEngageMessage = page.locator(caseEngageMessage);
        this.completeCaseButton = page.locator(completeCaseButton);
        this.caseRecordToComplete = page.locator(`${caseRecordToComplete}'${description}']`);
        this.caseCompleteMessage = page.locator(caseCompleteMessage);
        this.clickCompleteButton = page.locator(clickCompleteButton);
    }

    async clickReplyButton() {
        this.replyButton.click();
        this.waitPage.waitForTimeout(10000);
    }

    async enterMessage() {
        const { description } = descriptionText;
        this.subjectMessage.type(description);
        this.messageBody.type(description);
    }

    async consulatationFields() {
        const { consultationValue } = responseMessagePageLocators;
        this.consultationFee.fill(consultationValue);
        this.consultationAppointment.click();
    }

    async clickSendReplyEngage() {
        this.waitPage.waitForTimeout(10000);
        this.sendReplyButton.click();
        this.waitPage.waitForTimeout(10000);
        this.reload.reload();
        this.engageButton.click();
        this.waitPage.waitForTimeout(10000);
    }

    async caseEngageMessageCheck() {
        this.caseEngageMessage.isVisible();
    }

    async clickEngageTab() {
        this.waitPage.waitForTimeout(10000);
        this.engageTab.click();
    }

    async completeCaseButtonCheck() {
        this.completeCaseButton.isVisible();
        this.waitPage.waitForTimeout(10000);
    }

    async selectCaseRecord() {
        this.caseRecordToComplete.click();
        this.waitPage.waitForTimeout(10000);
    }

    async completeButtonClick() {
        this.clickCompleteButton.click();
        this.waitPage.waitForTimeout(10000);
    }

    async caseCompleteMessageCheck() {
        this.caseCompleteMessage.isVisible();
        this.waitPage.waitForTimeout(10000);
    }
}

/***********************  Test Script - Suite ****************************/
export default async function () {
    const page = browser.newPage();
    const searchAttorney = new searchAttorneyPage(page);
    const subCategory = new SubCategoryPage(page);
    const issueSpecificQuestions = new IssueSpecificQuestionsPage(page);
    const descriptions = new DescriptionPage(page);
    const saveYourCase = new SaveYourCasePage(page);
    const costEstimate = new CostEstimatePage(page);
    const loginAttorney = new LoginAttorneyPage(page);
    const attorneySearch = new AttorneySearchPage(page);
    const caseStatus = new CaseStatusPage(page);

    describe('[TCM-6611] TCM-1: [Load Testing - Browser] -Case Posting Module (CCPM)-> Browser component attorney login', async () => {
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

        // LogIn Attorney
        await loginAttorney.goto();
        await loginAttorney.clickLogIn();
        check(page, {
            'User Should Successfully Login as Attorney': () => loginAttorney.logInPageCheck()
        });
        await loginAttorney.logInForm();
        check(page, {
            'Should be landed at Attorney Dashboard Page': () =>
                loginAttorney.attorneyDashboardCheck()
        });

        // Search Case Record
        await attorneySearch.verifySearchCase();
        check(page, {
            'Case Record Should be Found': () => attorneySearch.verifyCaseTitleCheck()
        });

        // Open Tab
        await attorneySearch.clickCaseRecord();
        check(page, {
            'Case Record Should be at the Open Tab Page': () => attorneySearch.verifyOpenTabCheck()
        });

        // Reply Message
        await caseStatus.clickReplyButton();
        await caseStatus.enterMessage();
        await caseStatus.consulatationFields();
        await caseStatus.clickSendReplyEngage();

        // Engage Case Record
        await caseStatus.caseEngageMessageCheck();
        check(page, {
            'Successfully Reply the Case Record': () => caseStatus.caseEngageMessageCheck()
        });
        check(page, {
            'Successfully Engage the Case Record': () => caseStatus.caseEngageMessageCheck()
        });

        await caseStatus.clickEngageTab();
        check(page, {
            'Should be at the Engage Tab Page': () => caseStatus.completeCaseButtonCheck()
        });
        // Complete Case Record
        await caseStatus.selectCaseRecord();
        await caseStatus.completeButtonClick();
        check(page, {
            'Case Record Successfully Completed': () => caseStatus.caseCompleteMessageCheck()
        });

        page.close();
    });

    let res = http.get(url);
    http.get(res.url);
    httpMetricsData();
}
