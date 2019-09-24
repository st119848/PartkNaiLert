import firebase from 'react-native-firebase';

export const dynamicEventLink = async (id, title, image, description='') => {
    const link = new firebase.links.DynamicLink(
            encodeURI(`https://parknailertapp.page.link?id=${id}`),
            'https://parknailertapp.page.link'
        );
    link.android.setPackageName('com.parknailert');
    link.ios.setBundleId('com.parknailert.parknailert');
    link.social.setDescriptionText(description);
    link.social.setImageUrl(image);
    link.social.setTitle(title);

    return firebase.links()
        .createShortDynamicLink(link, `UNGUESSABLE`)
        .then((url) => decodeURIComponent(url));
};