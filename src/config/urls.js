
const apiUrl = 'http://nailert-api.topwork.asia/api/app/';
const domain = 'http://nailert-api.topwork.asia/';

const url =  {
    domain: domain,
    museumContent: {
        imageSlider: `${apiUrl}get-slide`,
        highlightList: `${apiUrl}get-highlight-list`,
    },
    aboutUs: {
        intro: `${apiUrl}about-us/show-introduction`,
        contact: `${apiUrl}about-us/show-contact`,
        find: `${apiUrl}about-us/show-contact`,
    }
};

export default url;