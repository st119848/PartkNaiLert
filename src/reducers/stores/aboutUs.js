import {
    GETTING_ABOUT_US_INTRO_START,
    GETTING_ABOUT_US_INTRO_SUCCESS,
    GETTING_ABOUT_US_INTRO_FAILED
} from "../actions/aboutUs";

const initialStste = {
    introData : {},
    isGettingIntroData: false,
    isGettingIntroDataSuccess: false,
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
        default:
            return state
    }

}