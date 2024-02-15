import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let options = ScalabilityLoadTest();

//  metrics
const responseTime = new Trend('response_time');
const requestsPerSecond = new Rate('requests_per_second');
const errors = new Counter('errors');
const customMetric = new Trend('locationFinder_metric_name');

export function ScalabilityLoadTest() {
    return {
        stages: [
            { duration: '5m', target: 1, name: 'Stage 1: 1 Users Ramp-up' },
            { duration: '5m', target: 1, name: 'Stage 2: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 3: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 4: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 5: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 6: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 7: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 8: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 9: 1 Users' },
            { duration: '5m', target: 1, name: 'Stage 10: 1 Users' },
            { duration: '10m', target: 1, name: 'Stage 11: 1 Users (Constant)' },
            { duration: '5m', target: 0, name: 'Stage 12: Ramp-down to 0 Users' }
        ],
        thresholds: {
            //  Once baseline and threshold are defined. we will set this threshold.
            http_req_duration: ['p(95)<2000'], // 95% of requests should complete within 2 seconds
            http_reqs: ['rate>100'], // Throughput should be at least 100 requests per second
            http_req_failed: ['rate<0.1'] // Error rate should be less than 0.1%
        }
    };
}

export default function () {
    const environment = 'test';
    const headers = getRequestHeaders(environment);
    const query = getRandomZipCode();
    const response = sendPostRequest(environment, query, headers);

    logPerformance(query, response);
}

function getRequestHeaders(environment) {
    return {
        authority: `https://location-find${environment}.legalmatch.com`,
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        origin: `https://${environment}.legalmatch.com`,
        referer: `https://${environment}.legalmatch.com/`,
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    };
}

function getRandomZipCode() {
    const zipCodes = [
        '90001',
        '90020',
        '99925',
        '99926',
        '99927',
        '99928',
        '99929',
        '90040',
        '90050',
        '00000'
    ];
    const randomIndex = Math.floor(Math.random() * zipCodes.length);
    return zipCodes[randomIndex];
}

function sendPostRequest(environment, query, headers) {
    return http.post(
        `https://location-finder${environment}.legalmatch.com/location/suggest`,
        { query: query },
        { headers: headers }
    );
}

function logPerformance(query, response) {
    const responseTimeValue = response.timings.duration;
    responseTime.add(responseTimeValue);
    requestsPerSecond.add(1);

    check(response, {
        'Status is 200': (r) => r.status === 200
    });

    if (response.status !== 200) {
        errors.add(1);
    }

    customMetric.add(1);

    console.log(`Query: ${query}`);
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
}
