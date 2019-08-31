import {
    GETTING_IMAGE_SLIDER_START,
    GETTING_IMAGE_SLIDER_SUCCESS,
    GETTING_IMAGE_SLIDER_FAILED,
    GETTING_HIGHLIGHT_LIST_START,
    GETTING_HIGHLIGHT_LIST_SUCCESS,
    GETTING_HIGHLIGHT_LIST_FAILED,
    GETTING_BEACON_LIST_START,
    GETTING_BEACON_LIST_SUCCESS,
    GETTING_BEACON_LIST_FAILED,
    SET_ACTIVE_HIGHLIGHT_ITEM,
} from "../actions/contents";

const initialStste = {
    imagesHighlight : [],
    isGettingImageSlider: false,
    isGettingImageSliderSuccess: false,
    highlightList: [],
    isGettingHighlightList: false,
    isGettingHighlightListSuccess: false,
    activeHighlightItem: undefined,
    beaconList: [],
    isGettingBeaconList: false,
    isGettingBeaconListSuccess: false,
};

export default (state = initialStste, action) => {
    switch (action.type) {
        case GETTING_IMAGE_SLIDER_START:
            return {
                ...state,
                isGettingImageSlider: true,
                isGettingImageSliderSuccess: false,
            };

        case GETTING_IMAGE_SLIDER_SUCCESS:
            return {
                ...state,
                isGettingImageSlider: false,
                isGettingImageSliderSuccess: true,
                imagesHighlight: action.data,
            };

        case GETTING_IMAGE_SLIDER_FAILED:
            return {
                ...state,
                isGettingImageSlider: false,
                isGettingImageSliderSuccess: false,
            };
        case GETTING_HIGHLIGHT_LIST_START:
            return {
                ...state,
                isGettingHighlightList: true,
                isGettingHighlightListSuccess: false,
            };

        case GETTING_HIGHLIGHT_LIST_SUCCESS:
            return {
                ...state,
                isGettingHighlightList: false,
                isGettingHighlightListSuccess: true,
                highlightList: action.data,
            };

        case GETTING_HIGHLIGHT_LIST_FAILED:
            return {
                ...state,
                isGettingHighlightList: false,
                isGettingHighlightListSuccess: false,
            };
        case GETTING_BEACON_LIST_START:
            return {
                ...state,
                isGettingBeaconList: true,
                isGettingBeaconListSuccess: false,
            };

        case GETTING_BEACON_LIST_SUCCESS:
            return {
                ...state,
                beaconList: action.data,
                isGettingBeaconList: false,
                isGettingBeaconListSuccess: true,
            };

        case GETTING_BEACON_LIST_FAILED:
            return {
                ...state,
                isGettingBeaconList: false,
                isGettingBeaconListSuccess: false,
            };
        case SET_ACTIVE_HIGHLIGHT_ITEM: {
            return {
                ...state,
                activeHighlightItem: action.data,
            }
        }
        default:
            return state
    }

}