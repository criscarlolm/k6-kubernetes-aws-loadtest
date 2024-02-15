const environments = {
    qa8: {
        baseUrl: 'https://location-finderqa8.legalmatch.com'
    },
    qa9: {
        baseUrl: 'https://location-finderqa9.legalmatch.com'
    },
    test: {
        baseUrl: 'https://apitest.legalmatch.com'
    }
};

export function getBaseUrl(environment) {
    if (!environments.hasOwnProperty(environment)) {
        throw new Error(`Environment '${environment}' is not defined.`);
    }

    return environments[environment].baseUrl;
}
