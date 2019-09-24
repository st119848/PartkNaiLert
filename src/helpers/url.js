

export const getParamsFromUrl = (url) => {
    const query = url.split('?')[1];
    if(!query) {
        return {};
    }
    const queryOptions = query.split('&');
    return queryOptions.reduce((result, item='') => {
        const param = item.split('=');
        const [key, value] = param;
        return {
            ...result,
            [key]: value,
        }
    }, {});
};