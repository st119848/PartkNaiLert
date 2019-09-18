import URLS from './../config/urls';

const domain = URLS.domain;

export const transformBeaconsConfig = (data=[]) => {

    return data.reduce((result, item) => {
        const {tags=[], distance} = item;
        for (const tag of tags) {
            const isExistTags = result.find(item => item.tag === tag);
            if(isExistTags) {
                return result;
            }
            const newConfig = {
                tag,
                distance,
            };
            return [
                ...result,
                newConfig
            ];
        };
        return result;
    }, [])
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