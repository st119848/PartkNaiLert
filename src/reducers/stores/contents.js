import {
    GETTING_IMAGE_SLIDER_START,
    GETTING_IMAGE_SLIDER_SUCCESS,
    GETTING_IMAGE_SLIDER_FAILED,
    GETTING_HIGHLIGHT_LIST_START,
    GETTING_HIGHLIGHT_LIST_SUCCESS,
    GETTING_HIGHLIGHT_LIST_FAILED,
} from "../actions/contents";

const initialStste = {
    imagesHighlight : [],
    isGettingImageSlider: false,
    isGettingImageSliderSuccess: false,
    highlightList: [],
    isGettingHighlightList: false,
    isGettingHighlightListSuccess: false,
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
        default:
            return state
    }

}