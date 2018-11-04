const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
});

function get(url, success, error, final) {
    return api({
        method: 'GET',
        url: url})
    .then(success)
    .catch(error)
    .finally(final);
};

function getParams(url, par, success, error, final) {
    return api({
        method: 'GET',
        url: url,
        params: par
    })
    .then(success)
    .catch(error)
    .finally(final);
}

function post(url, data, success, error, final) {
    return api({
        method: 'POST',
        url: url,
        data: data
    })
    .then(success)
    .catch(error)
    .finally(final);
};