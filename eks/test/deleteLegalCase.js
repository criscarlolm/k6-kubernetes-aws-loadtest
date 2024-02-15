import { getBaseUrl } from './envConfig.js';
import { getRequestHeaders } from './headersConfig.js';
import { makeGraphQLRequest } from './graphqlUtility.js';
import { handleError } from './sharedUtils.js';

export function deleteCase(environment, caseNumber, authToken) {
    const payload = {
        query: `mutation {
            deleteCase(caseNumber: "${caseNumber}") 
        }`
    };
    const baseUrl = getBaseUrl(environment);
    const apiUrl = `${baseUrl}/ccpm/graphql`;
    const headers = getRequestHeaders(authToken);

    try {
        console.log(`[${new Date().toISOString()}] Deleting legal case number:`, caseNumber);
        const responseJson = makeGraphQLRequest(apiUrl, payload, headers);
        const deleteLegalCaseData = responseJson.data.deleteCase;

        if (!deleteLegalCaseData) {
            handleError('Invalid API response: Missing data or delete case');
        }
    } catch (error) {
        handleError(error);
    }
}
