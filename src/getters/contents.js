import URLS from './../config/urls';

export const getImagesSlider = (data=[]) => {
    const domain = URLS.domain;
    return data.map(item => {
        const {id, path} = item;
        return {
            id: id,
            path: `${domain}${path}`
        }
    });
};