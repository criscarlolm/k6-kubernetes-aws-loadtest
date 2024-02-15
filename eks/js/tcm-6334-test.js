import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

//  metrics
const responseTimes = new Trend('response_times');
const requestsPerSecond = new Rate('requests_per_second');
const errors = new Counter('errors');

export let options = Constantload();

export function Constantload() {
    return {
        stages: [{ duration: '15m', target: 50, name: 'Stage 1: 50 User Ramp-up' }],
        thresholds: {
            //  Once baseline and threshold are defined. we will set this thresshold.
            http_req_duration: ['p(95)<3000'], // 95% of requests should complete within 2 seconds
            http_reqs: ['rate>100'], // Throughput should be at least 100 requests per second
            http_req_failed: ['rate<0.1'] // Error rate should be less than 0.1%
        }
    };
}

const environment = 'test';
const baseUrl = getBaseUrl(environment);

export function getBaseUrl(environment) {
    const environments = {
        test: {
            baseUrl: 'https://apitest.legalmatch.com'
        }
    };

    if (!environments.hasOwnProperty(environment)) {
        throw new Error(`Environment '${environment}' is not defined.`);
    }

    return environments[environment].baseUrl;
}

export default function () {
    const { caseNumber, authToken } = insertLegalCase(baseUrl);

    // Custom Logic: Print some additional information about the inserted case
    console.log(`[${new Date().toISOString()}] Inserted Case Number: ${caseNumber}`);
    console.log(`[${new Date().toISOString()}] Inserted Auth Token: ${authToken}`);

    const matchResult = matchLegalCase(baseUrl, caseNumber, authToken);

    // Custom Logic: Check the match result and perform an action based on it
    if (matchResult.matched) {
        console.log(`[${new Date().toISOString()}] Case matched successfully.`);

        // custom logic based on the match result
        if (matchResult.matchedToStandardType) {
            console.log(`[${new Date().toISOString()}] Matched to Standard Type.`);
        } else if (matchResult.matchedToCaseLeadsType) {
            console.log(`[${new Date().toISOString()}] Matched to Case Leads Type.`);
        }
    } else {
        console.error(`[${new Date().toISOString()}] Case did not match.`);
    }

    // Record response time for this request
    responseTimes.add(matchResult.responseTime);
    requestsPerSecond.add(1); // Assuming one request per iteration

    // Record an error if the response status code is not 200
    if (matchResult.status !== 200) {
        errors.add(1);
    }
    deleteCase(baseUrl, caseNumber, authToken); // Call deleteCase
    sleep(1);
}

export function insertLegalCase(baseUrl) {
    const payload = {
        query: `mutation ($data: LegalCaseInput) {
     insertLegalCase(data: $data) {
     legalCase {
     caseNumber
        }
        authToken
      }
    }`,

        variables: {
            data: {
                categories: [3],
                matchingZip: '00001',
                state: 'XX',
                zip: '00001',
                county: 'NOWHERESVILLE',
                city: 'Nowheresville',
                client: {
                    firstName: 'FnameApiTest',
                    lastName: 'LnameApi',
                    email: 'uhotlbpd@guerrillamail.com',
                    zip: '00001'
                },
                shortDesc: `TCM-6334 API Load Testing vu${Math.floor(Math.random() * 10000)}`,
                longDesc: `longDesc AWS Load Testing vu${Math.floor(Math.random() * 10000)}`
            }
        }
    };

    const apiUrl = `${baseUrl}/ccpm/graphql`;
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-key': 'GbXvJk48DSds5sxzWGW0'
    };

    try {
        const response = http.post(apiUrl, JSON.stringify(payload), { headers, timeout: 60000 });
        check(response, {
            'Status is 200': (res) => res.status === 200,
            'Response body has data': (res) => res.json('data') !== null
        });

        console.log(`[${new Date().toISOString()}] Insert Case Response Body:`, response.body);
        console.log(`[${new Date().toISOString()}] Status Code:`, response.status);

        const jsonData = response.json();

        if (!jsonData.data || !jsonData.data.insertLegalCase) {
            throw new Error('Invalid API response: Missing data or insertLegalCase');
        }

        const caseNumber = jsonData.data.insertLegalCase.legalCase.caseNumber;
        const authToken = jsonData.data.insertLegalCase.authToken;
        console.log(`[${new Date().toISOString()}] Case Number:`, caseNumber);
        console.log(`[${new Date().toISOString()}] Auth Token:`, authToken);
        const uniqueId = `${__VU}-${__ITER}`;
        const dataKey = `case_${uniqueId}`;
        const sharedData = {};

        sharedData[dataKey] = {
            caseNumber: caseNumber,

            authToken: authToken
        };

        __ENV.sharedData = JSON.stringify(sharedData);
        return { caseNumber, authToken, status: response.status };
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error inserting legal case:`, error);

        throw error;
    }
}

export function matchLegalCase(baseUrl, caseNumber, authToken) {
    const payload = {
        query: `mutation {
        matchLegalCase(caseNumber: "${caseNumber}") {
        matched,
        matchedToStandardType,
        matchedToCaseLeadsType,
        matchedToSpecialDealsType,
        matchedToMatchedLeadsType,
        matchedToMembershipPlusType,
        matchedToDirectoryServiceType

      }

    }`
    };

    const apiUrl = `${baseUrl}/ccpm/graphql`;
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
        'x-api-key': 'GbXvJk48DSds5sxzWGW0'
    };

    try {
        const response = http.post(apiUrl, JSON.stringify(payload), { headers, timeout: 60000 });

        check(response, {
            'Status is 200': (res) => res.status === 200,
            'Response body has data': (res) => res.json('data') !== null,
            'Response body has matchLegalCase': (res) => res.json('data.matchLegalCase') !== null
        });

        console.log(`[${new Date().toISOString()}] Matched Case Response Body:`, response.body);
        console.log(`[${new Date().toISOString()}] Status Code:`, response.status);

        const jsonData = response.json();
        const matchLegalCaseData = jsonData.data.matchLegalCase;

        if (!matchLegalCaseData) {
            console.error(
                `[${new Date().toISOString()}] Error matching legal case:`,
                'Invalid API response: Missing data or matchLegalCase'
            );
            throw new Error('Invalid API response: Missing data or matchLegalCase');
        }
        console.log(`[${new Date().toISOString()}] matched:`, matchLegalCaseData.matched);
        console.log(
            `[${new Date().toISOString()}] matchedToStandardType:`,
            matchLegalCaseData.matchedToStandardType
        );

        console.log(
            `[${new Date().toISOString()}] matchedToCaseLeadsType:`,
            matchLegalCaseData.matchedToCaseLeadsType
        );

        console.log(
            `[${new Date().toISOString()}] matchedToSpecialDealsType:`,
            matchLegalCaseData.matchedToSpecialDealsType
        );

        console.log(
            `[${new Date().toISOString()}] MatchedToMatchedLeadsType:`,
            matchLegalCaseData.matchedToMatchedLeadsType
        );

        console.log(
            `[${new Date().toISOString()}] MatchedToMembershipPlusType:`,
            matchLegalCaseData.matchedToMembershipPlusType
        );

        console.log(
            `[${new Date().toISOString()}] MatchedToDirectoryServiceType:`,
            matchLegalCaseData.matchedToDirectoryServiceType
        );

        // Record response time for this request
        responseTimes.add(response.timings.duration);
        requestsPerSecond.add(1); // Assuming one request per iteration
        return {
            matched: matchLegalCaseData.matched,
            responseTime: response.timings.duration,
            status: response.status
        };
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error matching legal case:`, error);

        throw error;
    }
}

export function deleteCase(baseUrl, caseNumber, authToken) {
    const payload = {
        query: `mutation {
            deleteCase(caseNumber: "${caseNumber}") 
        }`
    };
    const apiUrl = `${baseUrl}/ccpm/graphql`;

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
        'x-api-key': 'GbXvJk48DSds5sxzWGW0'
    };

    try {
        console.log(`[${new Date().toISOString()}] Deleting legal case number:`, caseNumber);

        const response = http.post(apiUrl, JSON.stringify(payload), {
            headers,
            timeout: 60000
        });

        check(response, {
            'Status is 200': (res) => res.status === 200,
            'Response body has data': (res) => res.json('data') !== null
        });

        console.log(
            `[${new Date().toISOString()}] Case Number Deleted Response Body:`,
            response.body
        );
        console.log(`[${new Date().toISOString()}] Status Code:`, response.status);

        const jsonData = response.json();

        if (!jsonData.data || !jsonData.data.deleteCase) {
            throw new Error('Invalid API response: Missing data or deleteCase');
        }

        // Record response time for this request
        responseTimes.add(response.timings.duration);
        requestsPerSecond.add(1); // Assuming one request per iteration

        return jsonData.data.deleteCase; // Return the response data
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error Deleting Case Number:`, error);
        errors.add(1); // Record an error
        throw error;
    }
}
