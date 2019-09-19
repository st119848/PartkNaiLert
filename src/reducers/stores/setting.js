import {
    SETTING_LANGUAGE,
    SET_HIDE_AR_MODAL,
    SET_SHOW_AR_MODAL,
} from "../actions/setting";

const initialStste = {
    language: "th",
    beaconActive: false,
    beaconInfo: [],
    isShowARModal: false,
};

export default (state = initialStste, action) => {
    switch (action.type) {
        case SETTING_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        case SET_SHOW_AR_MODAL:
            return {
                ...state,
                isShowARModal: true,
            };
        case SET_HIDE_AR_MODAL:
            return {
                ...state,
                isShowARModal: false,
            };
        default:
            return state
    }

}
