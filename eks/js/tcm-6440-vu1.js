import http from 'k6/http';
import { check, group } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let options = Singleuserrequest();

//  metrics
const responseTimes = new Trend('response_times');
const requestsPerSecond = new Rate('requests_per_second');
const errors = new Counter('errors');

export function Singleuserrequest() {
    return {
        stages: [
            { duration: '1m', target: 1, name: 'Stage 1: 1 User Ramp-up' }
            // Ramp-up to 1 virtual users immediately and maintain for 30 minutes
        ],
        thresholds: {
            //  Once baseline and threshold are defined. we will set this thresshold.
            http_req_duration: ['p(95)<3500'],
            http_reqs: ['rate>0.7'],
            http_req_failed: ['rate<0.1']
        }
    };
}

const baseURL = 'https://attorney-apitest.legalmatch.com';

const headers = {
    Authorization: 'Basic bG0tY2xpZW50OmxtLXNlY3JldA==',
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json, text/plain, */*',
    'User-Agent':
        'legalmatchattorney/2.1.10.1 Mozilla/5.0 (Linux; Android 11; Android SDK built for x86 Build/RSR1.210210.001.A1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
    'x-app-version': '2.1.10'
};

export function setup() {
    const authToken = obtainAccessToken();
    if (!authToken) {
        console.error('Step 1: Authentication failed.');
        return;
    }

    return { authToken };
}

let currentCaseNumber = 0;

export default function (data) {
    const authToken = data.authToken;

    group('Process List Case - Send Response - Engage Case method', function () {
        new Promise(async (resolve, reject) => {
            // Make the 'listCases' request
            const listCasesStartTime = new Date();
            const listCasesResponse = listCases(authToken);
            const listCasesEndTime = new Date();

            // Calculate the response time for the 'listCases' request
            const listCasesResponseTime = listCasesEndTime - listCasesStartTime;

            // Record the response time for the 'listCases' request
            responseTimes.add(listCasesResponseTime);

            if (listCasesResponse && listCasesResponse.caseNumber) {
                const caseNumber = listCasesResponse.caseNumber;
                currentCaseNumber++;

                try {
                    // First, send the response
                    const responseStep3 = await sendResponse(authToken, caseNumber);

                    // Record response time for this request
                    responseTimes.add(responseStep3.timings.duration);
                    requestsPerSecond.add(1);

                    if (responseStep3.status !== 200) {
                        console.error('Step 3: Request failed. Status code:', responseStep3.status);
                        console.error('Step 3: Send Response:', responseStep3.body);
                        reject(responseStep3.body);
                    } else {
                        console.log(
                            `Step 3: Send Response for Case ${caseNumber}:`,
                            responseStep3.body
                        );

                        // Then, engage the case
                        const responseStep4 = await engageCase(authToken, caseNumber);

                        // Record response time for this request
                        responseTimes.add(responseStep4.timings.duration);
                        requestsPerSecond.add(1);

                        if (responseStep4.status !== 200) {
                            // Added stage tracking log message
                            console.error(
                                `Stage 4: Request failed. Status code: ${responseStep4.status}`
                            );
                            console.error('Stage 4: Engage Case:', responseStep4.body);
                            reject(responseStep4.body);
                        } else {
                            console.log(`Stage 4: Engage Case ${caseNumber}:`, responseStep4.body);
                            resolve();
                        }
                    }
                } catch (error) {
                    console.error('Error:', error);
                    reject(error);
                }
            } else {
                console.error('Step 2: Failed to extract Case Number from the response.');
                reject('Failed to extract Case Number');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    });
}

function obtainAccessToken() {
    const payload = {
        username: 'testattorney',
        password: 'attorney',
        grant_type: 'password'
    };

    const response = http.post(`${baseURL}/oauth/token`, JSON.stringify(payload), {
        headers: headers
    });

    responseTimes.add(response.timings.duration);
    requestsPerSecond.add(1);

    console.log(`Authentication Response: ${JSON.stringify(response.body)}`);

    check(response, {
        'Step 1: Access Token - Status code is 200': (r) => r.status === 200
    });

    if (response.status === 200) {
        const jsonData = response.json();
        const authToken = jsonData.access_token;
        console.log(`Step 1: Access token: ${authToken}`);
        return authToken;
    } else {
        console.error(`Authentication failed. Status code: ${response.status}`);
        console.error(`Authentication response body: ${response.body}`);
        errors.add(1);
        return null;
    }
}

let currentCaseIndex = 0;

function listCases(authToken) {
    const headersWithToken = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
            'legalmatchattorney/2.1.10.1 Mozilla/5.0 (Linux; Android 11; Android SDK built for x86 Build/RSR1.210210.001.A1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
        'x-app-version': '2.1.10'
    };

    const listCasesResponse = http.get(`${baseURL}/attorney/cases`, {
        headers: headersWithToken
    });

    check(listCasesResponse, {
        'Step 2: List Cases - Status code is 200': (r) => r.status === 200
    });

    if (listCasesResponse.status === 200) {
        const listCasesData = listCasesResponse.json();
        const content = listCasesData.content;

        if (content && Array.isArray(content) && content.length > 0) {
            const caseInfo = content[currentCaseIndex].caseInfo;

            if (caseInfo && caseInfo.caseNumber) {
                const caseNumber = caseInfo.caseNumber;
                console.log(`Step 2: List Cases case Number: ${caseNumber}`);
                currentCaseIndex = (currentCaseIndex + 1) % content.length;
                return { caseNumber };
            } else {
                console.error('Case Number not found in the response.');
            }
        } else {
            console.error('No cases found in the response.');
        }
    } else {
        console.error('Step 2: List Cases failed. Status code:', listCasesResponse.status);
        console.error('Step 2: Response body:', listCasesResponse.body);
    }

    return null;
}

function sendResponse(authToken, caseNumber) {
    const headersWithToken = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
            'legalmatchattorney/2.1.10.1 Mozilla/5.0 (Linux; Android 11; Android SDK built for x86 Build/RSR1.210210.001.A1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
        'x-app-version': '2.1.10'
    };

    const payload = {
        initialConsultationFee: null,
        responseAcceptanceDays: null,
        displayFeeInfo: true,
        initialConsultationLength: 30,
        flatFeeFlag: 1,
        hourlyFeeFlag: null,
        contingentFeeFlag: 1,
        andOrFlag: 1,
        flatFeeTotalAmount: 7890,
        flatFeeBreakdownCode: 4,
        billingTimeIncrement: 30,
        simplePercent: 88,
        structPercent1: null,
        structPercent2: null,
        structPercent3: null,
        structPercent4: null,
        structPercent5: null,
        structPercent6: null,
        structPercent7: null,
        negotiableFlag: 1,
        subjectToChangeFlag: 0,
        filingFeeFlag: 1,
        courtCostFlag: 1,
        travelExpenseFlag: 1,
        phoneExpenseFlag: 1,
        copyingExpenseFlag: 0,
        postageExpenseFlag: 0,
        otherExpenseFlag: 0,
        flatFeeRangeLow: null,
        flatFeeRangeHigh: null,
        flatFeeTypeFlag: 0,
        flatFeeDesc: '',
        contingentFeeDesc: '',
        visaAccepted: false,
        masterCardAccepted: false,
        discoverAccepted: false,
        amexAccepted: false,
        consultationTimeSlots: [],
        shortDesc: 'Loadtest',
        longDesc: '<div>attorney api</div>'
    };

    const responseStep3 = http.put(
        `${baseURL}/attorney/case-response/${caseNumber}`,
        JSON.stringify(payload),
        {
            headers: headersWithToken
        }
    );

    check(responseStep3, {
        'Step 3: Send Response - Status code is 200': (r) => r.status === 200
    });

    return responseStep3;
}

function engageCase(authToken, caseNumber) {
    const authTokenStep4 = authToken;
    const payloadStep4 = [caseNumber];

    const headersStep4 = {
        Authorization: `Bearer ${authTokenStep4}`,
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
            'legalmatchattorney/2.1.10.1 Mozilla/5.0 (Linux; Android 11; Android SDK built for x86 Build/RSR1.210210.001.A1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
        'x-app-version': '2.1.10'
    };

    const responseStep4 = http.post(
        `${baseURL}/attorney/cases/engage`,
        JSON.stringify(payloadStep4),
        {
            headers: headersStep4
        }
    );

    check(responseStep4, {
        'Step 4: Engage Case - Status code is 200': (r) => r.status === 200
    });

    return responseStep4;
}
