import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

//  metrics
const responseTime = new Trend('response_time');
const requestsPerSecond = new Rate('requests_per_second');
const errors = new Counter('errors');
const customMetric = new Trend('locationFinder_metric_name');

export let options = Gradualload();

const environments = {
    qa9: {
        baseUrl: 'https://location-finderqa9.legalmatch.com'
    }
};

export function getBaseUrl(environment) {
    return environments[environment].baseUrl;
}

export function Gradualload() {
    return {
        stages: [
            { duration: '5m', target: 10, name: 'Stage 1: 10 Users Ramp-up' }, // Ramp-up to 10 virtual users immediately
            { duration: '10m', target: 10, name: 'Stage 2: 10 Users Stay' }
            // Stay at 10 virtual users for 10 minutes
            // It will gradually ramp up from 0 to 10 virtual users over 5 minute
        ],
        thresholds: {
            //  Once baseline and threshold are defined. we will set this thresshold.
            http_req_duration: ['p(95)<2000'], // 95% of requests should complete within 2 seconds
            http_reqs: ['rate>100'], // Throughput should be at least 100 requests per second
            http_req_failed: ['rate<0.1'] // Error rate should be less than 0.1%
        }
    };
}

export function locationFinderStatusCheck(response) {
    const statusCheck = check(response, {
        'Status is 200': (res) => res.status === 200
    });

    if (!statusCheck) {
        console.error(`Failed Request at Virtual User: ${__VU}, Iteration: ${__ITER}`);
        const body = JSON.parse(response.body);
        if (body && body.message && body.message === 'Internal server error') {
            console.error('Error Message in Response: Internal server error');
        }
        errors.add(1); // Increment the error count metric
    }
}

const zipCodes = ['90001', '90020', '99925', '99926', '99927', '99928', '99929', '90040', '99950'];

export default function () {
    const randomIndex = Math.floor(Math.random() * zipCodes.length);
    const query = zipCodes[randomIndex];

    const baseUrl = getBaseUrl('qa9');
    const url = `${baseUrl}/location/suggest?query=${query}`;
    console.log(`Request URL: ${url}`);

    const start = new Date().getTime();
    const response = http.get(url);

    console.log('Response:', response.body);

    const end = new Date().getTime();
    const responseTimeValue = end - start;

    responseTime.add(responseTimeValue);
    requestsPerSecond.add(1); // Increment requests per second metric
    locationFinderStatusCheck(response);

    const body = JSON.parse(response.body);
    const location = body.places && body.places.length > 0 ? body.places[0]['place name'] : 'N/A';

    if (location !== 'N/A') {
        console.log(`Query: ${query}`);
    }
    console.log(`Response Time: ${responseTimeValue} ms`);

    customMetric.add(responseTimeValue); // Added response time to custom metric

    sleep(1);
}
