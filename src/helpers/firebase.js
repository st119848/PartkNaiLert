import dynamicLinks from '@react-native-firebase/dynamic-links';

export const dynamicEventLink = async (id, title, image, description='') => {

    const link = await dynamicLinks().buildLink({
        link: encodeURI(`https://parknailertapp.page.link/content/${id}`),
        // domainUriPrefix is created in your Firebase console
        domainUriPrefix: 'https://parknailertapp.page.link',
        // optional set up which updates Firebase analytics campaign
        // "banner". This also needs setting up before hand
    });
    link.android.setPackageName('com.parknailert');
    link.ios.setBundleId('com.pnl.parknailert');
    link.social.setDescriptionText(description);
    link.social.setImageUrl(image);
    link.social.setTitle(title);

    return dynamicLinks()
        .createShortDynamicLink(link, `UNGUESSABLE`)
        .then((url) => decodeURIComponent(url));
};