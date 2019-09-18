import URLS from './../config/urls';

const domain = URLS.domain;

export const transformImagesSlider = (data=[]) => {
    return data.map(item => {
        const {id, path} = item;
        return {
            id: id,
            path: `${domain}${path}`
        }
    });
};

export const transformHighlightList = (data=[]) => {
    return data.map(item => {
        const {id, imageTitle, images=[], detail, sound, title} = item;
        const galleryImages = images.map(item => `${domain}${item.image}`);
        return {
            id: id,
            key: `key:${id}`,
            title,
            coverImage: `${domain}${imageTitle}`,
            galleryImages,
            description: detail,
            sound: sound ? `${domain}${sound}` : undefined,
        }
    });
};

export const transformBeaconList = (data=[]) => {
    return data.map(item => {
        const {id, imageTitle, images=[], detail, sound, title} = item;
        const galleryImages = images.map(item => `${domain}${item.image}`);
        return {
            id: id,
            key: `key:${id}`,
            title,
            coverImage: `${domain}${imageTitle}`,
            galleryImages,
            description: detail,
            sound: sound ? `${domain}${sound}` : undefined,
        }
    });
};