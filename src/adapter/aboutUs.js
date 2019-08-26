import URLS from './../config/urls';
const domain = URLS.domain;

export const transformIntroData = (data={}) => {
    const {detail, image} = data;
    return {
        imageUrl: `${domain}${image}`,
        description: detail,
    }
};

export const transferContactData = (data={}) => {
    const {address, detail, email, facebook='', instagram} = data;
    return {
        address,
        detail,
        email,
        facebook: facebook.replace('https://www.facebook.com/', ''),
        instagram: instagram.replace('https://www.instagram.com/', ''),
    };
};

export const transferFindData = (data={}) => {
    const {address, image} = data;
    return {
        address,
        mapUrl: `${domain}${image}`,
    };
};