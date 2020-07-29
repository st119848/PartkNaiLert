import dynamicLinks from '@react-native-firebase/dynamic-links';

export const dynamicEventLink = async (id, title, image, description='') => {

    const link = await dynamicLinks().buildShortLink({
        link: `https://nailertapp.com/content?id=${id}`,
        domainUriPrefix: 'https://parknailertapp.page.link',
        social: {
            title: title,
            descriptionText: description,
            imageUrl: image
        },
        ios: {
            bundleId: 'com.pnl.parknailert',
            appStoreId: '1492670944',
        }
    });

    return link;
};