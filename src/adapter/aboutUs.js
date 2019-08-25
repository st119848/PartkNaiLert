import URLS from './../config/urls';
const domain = URLS.domain;

export const transformIntroData = (data={}) => {
    const {detail, image} = data;
    return {
        imageUrl: `${domain}${image}`,
        description: detail,
    }
};