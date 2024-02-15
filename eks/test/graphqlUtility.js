import http from 'k6/http';
import { check } from 'k6';

export function makeGraphQLRequest(baseUrl, payload, headers) {
    try {
        const response = http.post(baseUrl, JSON.stringify(payload), {
            headers,
            timeout: 60000
        });
        check(response, {
            'Status is 200': (res) => res.status === 200,
            'Response body has data': (res) => res.json('data') !== null
        });

        console.log(`[${new Date().toISOString()}] Response Body:`, response.body);
        console.log(`[${new Date().toISOString()}] Status Code:`, response.status);

        return response.json();
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error making GraphQL request:`, error);
        throw error;
    }
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
    }
}
