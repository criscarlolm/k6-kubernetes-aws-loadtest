import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { zipCodes } from './zipCodes.js';
import { getBaseUrl } from './envConfig.js';
import { locationFinderStatusCheck } from './graphqlUtility.js';

const responseTime = new Trend('response_time');

export default function LocationFinder() {
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

    locationFinderStatusCheck(response);

    const body = JSON.parse(response.body);
    const location = body.places && body.places.length > 0 ? body.places[0]['place name'] : 'N/A';

    if (location !== 'N/A') {
        console.log(`Query: ${query}`);
    }
    console.log(`Response Time: ${responseTimeValue} ms`);

    sleep(1);
}
