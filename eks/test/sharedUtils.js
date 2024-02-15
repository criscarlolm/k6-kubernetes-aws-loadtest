export function saveSharedData(caseNumber, authToken) {
    const uniqueId = `${__VU}-${__ITER}`;
    const dataKey = `case_${uniqueId}`;
    const sharedData = {};
    sharedData[dataKey] = {
        caseNumber: caseNumber,
        authToken: authToken
    };
    __ENV.sharedData = JSON.stringify(sharedData);
}

export function handleError(error) {
    console.error(`[${new Date().toISOString()}] Error:`, error);

    if (error.response) {
        try {
            const responseJson = JSON.parse(error.response.body);
            console.error(`[${new Date().toISOString()}] Response Body:`, responseJson);
        } catch (parseError) {
            console.error(`[${new Date().toISOString()}] Error parsing response body:`, parseError);
            console.error(
                `[${new Date().toISOString()}] Response Body (raw):`,
                error.response.body
            );
        }
    } else {
        console.error(`[${new Date().toISOString()}] No response object in the error`);
    }

    throw error;
}
export function logMatchedResults(matchLegalCaseData) {
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
}
