
const apiUrl = 'http://localhost:8000/api/app/';
const domain = 'http://localhost:8000/';

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
    }
};

export default url;