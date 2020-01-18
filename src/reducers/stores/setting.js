import {
    SETTING_LANGUAGE_START,
    SETTING_LANGUAGE_SUCCESS,
    SET_HIDE_AR_MODAL,
    SET_SHOW_AR_MODAL,
} from "../actions/setting";

const initialState = {
    language: undefined,
    languageId: undefined,
    beaconActive: false,
    beaconInfo: [],
    isShowARModal: false,
    isChangingLanguage: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SETTING_LANGUAGE_START:
            return {
                ...state,
                isChangingLanguage: true,
                language: action.language,
                languageId: action.languageId,
            };
        case SETTING_LANGUAGE_SUCCESS:
            return {
                ...state,
                isChangingLanguage: false,
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
