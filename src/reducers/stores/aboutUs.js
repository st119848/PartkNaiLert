import {
    GETTING_ABOUT_US_INTRO_START,
    GETTING_ABOUT_US_INTRO_SUCCESS,
    GETTING_ABOUT_US_INTRO_FAILED,
    GETTING_ABOUT_US_CONTACT_START,
    GETTING_ABOUT_US_CONTACT_SUCCESS,
    GETTING_ABOUT_US_CONTACT_FAILED,
    GETTING_ABOUT_US_FIND_START,
    GETTING_ABOUT_US_FIND_SUCCESS,
    GETTING_ABOUT_US_FIND_FAILED
} from "../actions/aboutUs";

const initialStste = {
    introData: {},
    isGettingIntroData: false,
    isGettingIntroDataSuccess: false,
    contactData: {},
    isGettingContactData: false,
    isGettingContactDataSuccess: false,
    findData: {},
    isGettingFindData: false,
    isGettingFindDataSuccess: false,
};

export default (state = initialStste, action) => {
    switch (action.type) {
        case GETTING_ABOUT_US_INTRO_START:
            return {
                ...state,
                isGettingIntroData: true,
                isGettingIntroDataSuccess: false,
            };

        case GETTING_ABOUT_US_INTRO_SUCCESS:
            return {
                ...state,
                isGettingIntroData: false,
                isGettingIntroDataSuccess: true,
                introData: action.data,
            };

        case GETTING_ABOUT_US_INTRO_FAILED:
            return {
                ...state,
                isGettingIntroData: false,
                isGettingIntroDataSuccess: false,
            };
        case GETTING_ABOUT_US_CONTACT_START:
            return {
                ...state,
                isGettingContactData: true,
                isGettingContactDataSuccess: false,
            };

        case GETTING_ABOUT_US_CONTACT_SUCCESS:
            return {
                ...state,
                isGettingContactData: false,
                isGettingContactDataSuccess: true,
                contactData: action.data,
            };

        case GETTING_ABOUT_US_CONTACT_FAILED:
            return {
                ...state,
                isGettingContactData: false,
                isGettingContactDataSuccess: false,
            };
        case GETTING_ABOUT_US_FIND_START:
            return {
                ...state,
                isGettingFindData: true,
                isGettingFindDataSuccess: false,
            };

        case GETTING_ABOUT_US_FIND_SUCCESS:
            return {
                ...state,
                isGettingFindData: false,
                isGettingFindDataSuccess: true,
                findData: action.data,
            };

        case GETTING_ABOUT_US_FIND_FAILED:
            return {
                ...state,
                isGettingFindData: false,
                isGettingFindDataSuccess: false,
            };
        default:
            return state
    }

}