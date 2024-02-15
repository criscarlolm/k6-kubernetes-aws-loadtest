import http from 'k6/http';
import { check, sleep } from 'k6';
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
            { duration: '5m', target: 10, name: 'Stage 1: 10 Users Ramp-up' },
            { duration: '5m', target: 20, name: 'Stage 2: 20 Users' },
            { duration: '5m', target: 30, name: 'Stage 3: 30 Users' },
            { duration: '5m', target: 40, name: 'Stage 4: 40 Users' },
            { duration: '5m', target: 50, name: 'Stage 5: 50 Users' },
            { duration: '5m', target: 60, name: 'Stage 6: 60 Users' },
            { duration: '5m', target: 70, name: 'Stage 7: 70 Users' },
            { duration: '5m', target: 80, name: 'Stage 8: 80 Users' },
            { duration: '5m', target: 90, name: 'Stage 9: 90 Users' },
            { duration: '5m', target: 100, name: 'Stage 10: 100 Users' },
            { duration: '10m', target: 100, name: 'Stage 11: 100 Users (Constant)' },
            { duration: '5m', target: 0, name: 'Stage 12: Ramp-down to 0 Users' }
        ]
    };
}

export default function () {
    const environment = 'aws';
    const headers = getRequestHeaders(environment);
    const query = getRandomZipCode();
    const response = sendPostRequest(environment, query, headers);

    logPerformance(query, response);
}

function getRequestHeaders(environment) {
    return {
        authority: `https://location-findere1.${environment}.legalmatch.com`,
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        origin: `https://www1.${environment}.legalmatch.com`,
        referer: `https://www1.${environment}.legalmatch.com/`,
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
        `https://location-finder1.${environment}.legalmatch.com/location/suggest`,
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
