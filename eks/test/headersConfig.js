const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': 'GbXvJk48DSds5sxzWGW0'
};

function getRequestHeaders(authToken) {
    return {
        'Content-Type': headers['Content-Type'],
        Accept: headers.Accept,
        Authorization: `Bearer ${authToken}`,
        'x-api-key': headers['x-api-key']
    };
}

export { getRequestHeaders };
