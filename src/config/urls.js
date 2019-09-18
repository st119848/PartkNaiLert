
// const apiUrl = 'http://192.168.1.10:8000/api/app/';
// const domain = 'http://192.168.1.10:8000/';

const apiUrl = 'http://nailert-api.topwork.asia/api/app/';
const domain = 'http://nailert-api.topwork.asia/';

const url =  {
    domain: domain,
    museumContent: {
        imageSlider: `${apiUrl}get-slide`,
        highlightList: `${apiUrl}get-highlight-list`,
        beaconContent: `${apiUrl}beacon/get-beacon-and-content`,
    },
    aboutUs: {
        intro: `${apiUrl}about-us/show-introduction`,
        contact: `${apiUrl}about-us/show-contact`,
        find: `${apiUrl}about-us/show-contact`,
    },
    beacon: {
        config: `${apiUrl}configbeaconzone`,
    }
};

export default url;