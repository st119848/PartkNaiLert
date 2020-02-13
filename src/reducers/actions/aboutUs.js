import URLS from './../../config/urls'
import {postApiData} from "../../helpers/networking";
import {
    transformIntroData,
    transferContactData,
    transferFindData
} from '../../adapter/aboutUs'
import {retryAlert} from "../../helpers/actions";

export const GETTING_ABOUT_US_INTRO_START = 'GETTING_ABOUT_US_INTRO_START';
export const GETTING_ABOUT_US_INTRO_SUCCESS = 'GETTING_ABOUT_US_INTRO_SUCCESS';
export const GETTING_ABOUT_US_INTRO_FAILED = 'GETTING_ABOUT_US_INTRO_FAILED';
export const GETTING_ABOUT_US_CONTACT_START = 'GETTING_ABOUT_US_CONTACT_START';
export const GETTING_ABOUT_US_CONTACT_SUCCESS = 'GETTING_ABOUT_US_CONTACT_SUCCESS';
export const GETTING_ABOUT_US_CONTACT_FAILED = 'GETTING_ABOUT_US_CONTACT_FAILED';
export const GETTING_ABOUT_US_FIND_START = 'GETTING_ABOUT_US_FIND_START';
export const GETTING_ABOUT_US_FIND_SUCCESS = 'GETTING_ABOUT_US_FIND_SUCCESS';
export const GETTING_ABOUT_US_FIND_FAILED = 'GETTING_ABOUT_US_FIND_FAILED';

export const getAboutUsIntroFromApi = () => async (dispatch, getState) => {
    const {language} = getState().setting;
    try {
        dispatch({type: GETTING_ABOUT_US_INTRO_START});
        const url = URLS.aboutUs.intro;
        const postData = {
            code: language,
        };
        const response = await postApiData(url, postData);
        const {response: introDataArr = []} = response.data;
        const [introData={}] = introDataArr;
        const data = transformIntroData(introData);
        dispatch({type: GETTING_ABOUT_US_INTRO_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_ABOUT_US_INTRO_FAILED});
        retryAlert(language, () => {
            dispatch(getAboutUsIntroFromApi());
        });
    }
};

export const getAboutUsContactFromApi = () => async (dispatch, getState) => {
    const {language} = getState().setting;
    try {
        dispatch({type: GETTING_ABOUT_US_CONTACT_START});
        const url = URLS.aboutUs.contact;
        const postData = {
            code: language,
        };
        const response = await postApiData(url, postData);
        const {response: contactDataArr = []} = response.data;
        const [contactData={}] = contactDataArr;
        const data = transferContactData(contactData);
        dispatch({type: GETTING_ABOUT_US_CONTACT_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_ABOUT_US_CONTACT_FAILED});
        retryAlert(language, () => {
            dispatch(getAboutUsContactFromApi());
        });
    }
};

export const getAboutUsFindFromApi = () => async (dispatch, getState) => {
    const {language} = getState().setting;
    try {
        dispatch({type: GETTING_ABOUT_US_FIND_START});
        const url = URLS.aboutUs.find;
        const postData = {
            code: language,
        };
        const response = await postApiData(url, postData);
        const {response: findDataArr = []} = response.data;
        const [findData={}] = findDataArr;
        const data = transferFindData(findData);
        dispatch({type: GETTING_ABOUT_US_FIND_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_ABOUT_US_FIND_FAILED});
        retryAlert(language, () => {
            dispatch(getAboutUsFindFromApi());
        });
    }
};


